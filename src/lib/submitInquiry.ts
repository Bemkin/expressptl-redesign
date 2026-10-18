export interface InquiryPayload {
  fullName: string;
  phone: string;
  email?: string;
  company?: string;
  cargo?: string;
  /** Which form sent it, e.g. "home-feedback" or "contact-page". */
  source: string;
  /** Honeypot value; must stay empty for real visitors. */
  website?: string;
}

/** Posts a freight inquiry to /api/inquiry. Resolves on success, throws with a user-facing message otherwise. */
export async function submitInquiry(payload: InquiryPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Network error. Please check your connection and try again.");
  }

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? "Something went wrong. Please try again or call us directly.");
  }
}
