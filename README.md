# Express Transport & Logistics (Express PTL) — Web Platform Redesign

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-black?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Lenis Smooth Scroll](https://img.shields.io/badge/Lenis-1.3.26-FF5A1F?style=flat)](https://lenis.darkroom.engineering/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat&logo=vercel)](https://expressptl-redesign.vercel.app)

> **Next-generation digital platform and enterprise web redesign for Express Transport & Logistics (Express PTL)** — Ethiopia's premier heavy haulage, multimodal freight, and licensed customs clearance enterprise.

🔗 **Live Platform**: [expressptl-redesign.vercel.app](https://expressptl-redesign.vercel.app)  
🏢 **Official Corporate Reference**: [expressptl.com](https://expressptl.com)  
📂 **Source Code**: [github.com/Bemkin/expressptl-redesign](https://github.com/Bemkin/expressptl-redesign)

---

## 📌 Executive Summary

Operating continuously since **2013** with corporate headquarters at the **Ambasel Building in Addis Ababa**, **Express Transport & Logistics (Express PTL)** is one of East Africa's leading heavy haulage operators and an accredited humanitarian aid transport partner to the **United Nations World Food Programme (UN WFP)**.

### Operational Core Metrics
* 🚛 **76 Company-Owned Heavy Prime Movers** (Mercedes-Benz, Sinotruk, HOWO 6×4 and 8×4 configurations, 480–540 HP).
* 🏗️ **2,916 Metric Tons** Synchronous Heavy Lift Capacity via Goldhofer modular multi-axle lowbeds.
* 🏭 **14,000 m² Operations Facility** in Bole Bulbula, Addis Ababa (fleet marshalling depot, bonded maintenance bays, heavy equipment storage).
* 🌐 **Strategic Trade Corridors**: Djibouti Port – Galafi – Addis Ababa, Modjo Dry Port, Berbera Corridor, and Kenya/Moyale transit routes.
* 📦 **158,636+ Metric Tons** of out-of-gauge industrial, project cargo, and humanitarian supplies delivered with a **99.98% on-time transit rate**.

### The Redesign Mission
This project re-engineers Express PTL's digital presence from a dated corporate site into a high-performance, dark-aesthetic enterprise portal inspired by benchmark global logistics leaders (**MVP Logistics** aesthetic). It unifies authentic, verified Ethiopian operational data with cinematic motion design, interactive freight estimation, and smooth UX.

---

## ✨ Architectural & UX Highlights

### 1. Cinematic Preloader with Smart Session Gating
* **Monogram Reveal**: A custom SVG monogram and energetic expanding line introduce the brand aesthetic on first arrival.
* **Hydration-Safe Session Tracker (`lib/introSession.ts`)**: Implements `useSyncExternalStore` to track `sessionStorage` without hydration mismatches. The preloader plays **once per user session** — subsequent returns to Home or page switches load instantly with zero delay.

### 2. Dual-Layer Page Curtain Transitions (`components/PageCurtain.tsx`)
* Reverse-engineered transition architecture inspired by world-class portfolio and logistics benchmarks.
* Operates on a two-phase `cubic-bezier(0.77, 0, 0.175, 1)` easing timeline:
  1. **Exit Phase**: Obsidian canopy (`#070B14`) and pinned accent blade (`#FF5A1F` to `#1F1F61`) seal the viewport as the route changes.
  2. **Entrance Phase**: The inner accent blade retracts downwards as the canopy lifts to seamlessly reveal the incoming page.

### 3. Lenis Smooth Inertia Scrolling (`components/SmoothScroll.tsx`)
* Studio-grade scroll physics using Lenis normalized across desktop and mobile devices.
* Integrates directly with window history manual scroll restoration and Framer Motion layout triggers.

### 4. Scroll-Driven Reading Scrub Narrative (`components/ReadingScrubText.tsx`)
* Narrative text blocks dynamically illuminate word-by-word as the user scrolls through key brand statements and corporate mandates.

### 5. Industrial Dark Theme & Typography
* **Color Palette**: Deep obsidian backdrop (`#070B14`, `#0D1527`), energetic logistics safety orange (`#FF5A1F`), cool steel borders, and glassmorphic card overlays.
* **Typography Stack**: Google Fonts via `next/font`:
  * **Bebas Neue**: Industrial monument headlines and hero titles.
  * **Barlow Condensed**: Data badges, metrics, and navigation tags.
  * **Outfit & Plus Jakarta Sans**: Clean editorial narrative copy and interactive controls.

---

## 🗺️ Page Architecture & Capabilities

```
expressptl-redesign/
├── / (Home)                # Cinematic preloader, pinned video hero, metrics strip, partners marquee, feedback CTA
├── /operations             # Unified operations hub (Fleet, Corridors, Bole Bulbula, & Tariff Estimator)
│   ├── /fleet              # Route alias -> redirects to /operations#fleet
│   ├── /corridors          # Route alias -> redirects to /operations#corridors
│   └── /calculator         # Route alias -> redirects to /operations#calculator
├── /about                  # 10-section narrative, brand monogram, strategic mandates, executive team
├── /services               # Horizontal slider showcase, 6 service lines & technical modal deep-dives
└── /contact                # Executive dispatch directory, Ambasel HQ & Bole Bulbula interactive map, RFQ form
```

### 🏠 1. Home (`/`)
* **Seamless Hero + About Video Stage**: Sticky 100vh video viewport that smoothly pins into the About preview on scroll.
* **Impact Metrics Strip**: Live key figures: 76 Prime Movers, 2,916 MT Lift, 158,636+ MT Moved, 99.98% Accuracy.
* **Advantages Grid & Services Preview**: Overview of Express PTL's cross-border logistics capabilities.
* **Verified Partner Marquee**: Client trust showcase including UN WFP, Dangote Cement, Ethiopian Customs Commission, TotalEnergies, and maritime agencies.
* **Scale-Block Feedback Section & Footer**: High-impact CTA with live company coordinates and navigational directory.

### ⚙️ 2. Operations & Fleet Hub (`/operations`)
* **Unified Command Center**: Replaced disjointed sub-pages with an all-in-one operations hub featuring quick-jump anchor pills.
* **76-Truck Heavy Fleet Breakdown**:
  * Heavy Prime Movers (6×4, 8×4, 480–540 HP, dual-tank long-range configurations).
  * Goldhofer Heavy Lowbeds & multi-axle modular trailers.
  * Flatbed and high-cube dry freight container haulers.
  * 14,000 m² Bole Bulbula marshalling depot specs, workshop pits, and fuel reserves.
* **Strategic Trade Corridors Inspector**: Route details for Djibouti Port (870 km), Modjo Dry Port (75 km), Galafi Border Station, and Berbera.
* **Interactive Freight Tariff & Transit Estimator**:
  * Real-time calculation based on origin/destination corridor, cargo weight (MT), and equipment type.
  * Instant readout of transit time (hours/days), estimated route distance (km), and indicative pricing.

### 📖 3. About Us (`/about`)
* **10-Section Benchmark Architecture**:
  1. Cover Hero with monumental `E.P.T.L.` typography.
  2. Scroll-driven Intro Reading Scrub.
  3. Our Story scale-block with infinite marquee ticker.
  4. 3 Strategic Mandates (Zero-Disruption Logistics, UN WFP Relief Operations, Direct Brokerage).
  5. Sticky Advantages with dynamic scroll-progress bar.
  6. Corporate Mission scrub.
  7. Monumental Brand Acronym Note Card.
  8. Facts & Milestones matrix.
  9. Executive Leadership Team (Managing Director **Temesgen Yohannes** & Operations Director **Melaku Yenew**).
  10. Scale-block inquiry card.

### 🚚 4. Services (`/services`)
* **Horizontal Slider Showcase**: Slide navigation with progress bar tracking 6 primary service offerings:
  1. *Heavy Haulage & Out-of-Gauge (OOG) Project Cargo*
  2. *Cross-Border Multimodal Freight (Djibouti–Addis Corridor)*
  3. *Construction Machinery & Mobile Crane Rental*
  4. *Import & Export Trading (Agri-commodities & industrial inputs)*
  5. *Licensed AEO Customs Clearance & Port Forwarding*
  6. *Bole Bulbula 14,000 m² Facility & Humanitarian Relief Transport*
* **Interactive Service Modals**: Click-to-open detail sheets with technical specifications, fleet equipment, and transit parameters for every service.

### 📞 5. Contact (`/contact`)
* **Executive Leadership Dispatch**: Direct contact cards for general management and operations.
* **Operational Facilities Directory**: Ambasel Building HQ, Bole Bulbula Depot, Galafi Border Station, and Modjo Dry Port.
* **Interactive Logistics Hubs Map**: Dark-mode map component highlighting corporate headquarters and terminal facilities.
* **Full Freight RFQ Form**: Interactive request form for shippers, project cargo managers, and multimodal tenders.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16.3](https://nextjs.org/) (App Router, Server & Client Components) |
| **UI Library** | [React 19.2](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS |
| **Animation Engine** | [Framer Motion 13](https://www.framer.com/motion/) |
| **Smooth Scrolling** | [Lenis 1.3](https://lenis.darkroom.engineering/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Typography** | `next/font/google` (Bebas Neue, Barlow Condensed, Outfit, Plus Jakarta Sans) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
expressptl-redesign/
├── public/
│   ├── assets/              # High-resolution fleet photography, brand emblems, leadership portraits
│   └── favicon.ico          # Site favicon
├── src/
│   ├── app/
│   │   ├── about/           # About Us page route (/about)
│   │   ├── calculator/      # Redirect -> /operations#calculator
│   │   ├── contact/         # Contact & dispatch page route (/contact)
│   │   ├── corridors/       # Redirect -> /operations#corridors
│   │   ├── fleet/           # Redirect -> /operations#fleet
│   │   ├── operations/      # Operations & Fleet hub (/operations)
│   │   ├── services/        # Services slider showcase (/services)
│   │   ├── globals.css      # Design tokens, keyframes, scrollbar styling
│   │   ├── layout.tsx       # Root layout, metadata, SEO tags, font definitions
│   │   └── page.tsx         # Homepage with preloader & unified hero
│   ├── components/
│   │   ├── about/           # 9 sub-components for About Us sections
│   │   ├── contact/         # 4 sub-components for Contact page (Map, Hero, List, Form)
│   │   ├── operations/      # 5 sub-components for Operations hub (Fleet, Corridors, Calculator)
│   │   ├── services/        # Services slider showcase and modal popup
│   │   ├── ui/              # Reusable UI primitives (buttons, video backgrounds)
│   │   ├── Navbar.tsx       # Desktop & mobile responsive navigation with route sync
│   │   ├── Footer.tsx       # Full-width enterprise footer with coordinates & links
│   │   ├── PageCurtain.tsx  # Dual-layer route curtain transition
│   │   ├── Preloader.tsx    # Monogram preloader animation
│   │   ├── SmoothScroll.tsx # Lenis smooth scroll provider
│   │   └── ReadingScrubText.tsx # Scroll-linked typography scrub
│   └── lib/
│       ├── introSession.ts  # Hydration-safe session storage hook
│       └── utils.ts         # Class name merging utility (clsx + twMerge)
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # Tailwind CSS v4 PostCSS configuration
└── tsconfig.json            # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.18+` or `v20+` recommended
* **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone Repository
```bash
git clone https://github.com/Bemkin/expressptl-redesign.git
cd expressptl-redesign
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

### 5. Linting & Validation
```bash
npm run lint
```

---

## 🌐 Deployment

The project is configured for automated deployments on [Vercel](https://vercel.com/):

1. Connect your GitHub repository to Vercel.
2. Vercel automatically detects Next.js with zero manual configuration.
3. Every commit to `main` triggers an automatic production deployment.

Production URL: **[https://expressptl-redesign.vercel.app](https://expressptl-redesign.vercel.app)**

---

## 📄 Corporate Information & Attribution

* **Entity**: Express Transport & Logistics (Express PTL)
* **Headquarters**: Ambasel Building, 2nd Floor, Addis Ababa, Ethiopia
* **Operations Terminal**: Bole Bulbula, 14,000 m² Facility, Addis Ababa
* **Accreditations**: Ethiopian Customs Commission Authorized Economic Operator (AEO), UN WFP Humanitarian Logistics Carrier
* **Official Website**: [https://expressptl.com](https://expressptl.com)

---

*Engineered with precision for modern logistics operations.*
