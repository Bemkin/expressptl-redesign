/**
 * Freight inquiry endpoint shared by the homepage feedback modal and the
 * contact page form. Delivers each request by e-mail through the Resend REST API.
 *
 * Required env (see .env.example):
 *   RESEND_API_KEY      – Resend API key
 *   INQUIRY_TO_EMAIL    – inbox that receives requests (comma-separated for several)
 *   INQUIRY_FROM_EMAIL  – verified sender, e.g. "Express PTL Website <web@expressptl.com>"
 *
 * Without them the request is logged in development and rejected with 503 in production,
 * so a misconfigured deploy never silently drops leads.
 */

const LIMITS = {
  fullName: 120,
  company: 160,
  phone: 40,
  email: 200,
  cargo: 2000,
  source: 40,
} as const;

type Field = keyof typeof LIMITS;
type Inquiry = Record<Field, string>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{5,}$/;

function readField(body: Record<string, unknown>, field: Field): string {
  const value = body[field];
  return typeof value === "string" ? value.trim().slice(0, LIMITS[field]) : "";
}

function validate(data: Inquiry): string | null {
  if (!data.fullName) return "Please enter your full name.";
  if (!data.phone || !PHONE_RE.test(data.phone)) return "Please enter a valid phone number.";
  if (data.email && !EMAIL_RE.test(data.email)) return "Please enter a valid e-mail address.";
  return null;
}

function formatMessage(data: Inquiry): string {
  return [
    `New freight request from the website (${data.source || "unknown form"})`,
    "",
    `Name:    ${data.fullName}`,
    `Company: ${data.company || "-"}`,
    `Phone:   ${data.phone}`,
    `E-mail:  ${data.email || "-"}`,
    "",
    "Route / cargo:",
    data.cargo || "-",
  ].join("\n");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const data = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((field) => [field, readField(body, field)])
  ) as Inquiry;

  const error = validate(data);
  if (error) {
    return Response.json({ error }, { status: 422 });
  }

  const { RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !INQUIRY_TO_EMAIL || !INQUIRY_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[inquiry] e-mail delivery not configured; logging request instead:\n" + formatMessage(data));
      return Response.json({ ok: true });
    }
    console.error("[inquiry] RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL missing");
    return Response.json(
      { error: "Online requests are temporarily unavailable. Please call or e-mail us directly." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: INQUIRY_FROM_EMAIL,
      to: INQUIRY_TO_EMAIL.split(",").map((s) => s.trim()).filter(Boolean),
      reply_to: data.email || undefined,
      subject: `Freight request – ${data.fullName}${data.company ? ` (${data.company})` : ""}`,
      text: formatMessage(data),
    }),
  });

  if (!res.ok) {
    console.error("[inquiry] Resend responded", res.status, await res.text().catch(() => ""));
    return Response.json(
      { error: "We couldn't send your request. Please try again or call us directly." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
