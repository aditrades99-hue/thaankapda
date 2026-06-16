# Product Requirements Document (PRD)
## Maruti Textile Empire — 3D Landing Page & WhatsApp Sales Funnel

| | |
|---|---|
| **Client** | Maruti Textile Empire, Kathmandu, Nepal |
| **Agency / Designer** | Addigen Agency |
| **Lead Developer** | Aditya Kumar Sablaka (operating as "builtwithadi") |
| **Document Version** | 1.0 |
| **Date** | June 14, 2026 |
| **Status** | Draft — for client sign-off |

---

## 1. Executive Summary

Maruti Textile Empire requires a premium, single-page 3D web experience that converts visitors into WhatsApp leads. The site combines luxury visual design (3D fabric scene, glassmorphism, gold/maroon palette), a wholesale/retail price calculator, an AI fabric-stylist chatbot, and a social-proof layer pulled from Instagram and Facebook. Every interactive path terminates in a pre-filled WhatsApp message to the sales team. This PRD translates the existing "Master Build Prompt (Elite 2.0)" into a structured specification that can be used for planning, scoping, QA, and legal sign-off.

---

## 2. Business Objectives

1. Increase the volume and quality of WhatsApp inquiries from both retail and wholesale customers.
2. Position Maruti Textile Empire as a premium textile destination, distinct from generic local competitors.
3. Reduce friction between "interest" and "contact" — every product, category, and AI conversation should end in a one-tap WhatsApp handoff.
4. Improve discoverability on Google Search and Google Maps for fabric-related searches in Kathmandu.
5. Create a reusable content engine (Reels, posts, testimonials) that keeps the site feeling alive without manual updates.

---

## 3. Target Audience / User Personas

| Persona | Description | Primary Need |
|---|---|---|
| **Retail Shopper** | Individual in Kathmandu looking for sarees, dupattas, or dress material | Browse styles, see price per metre, message for availability |
| **Wholesale Buyer** | Tailor, boutique owner, or reseller | Bulk pricing tiers, fast quote via WhatsApp |
| **Diaspora / Out-of-valley Customer** | Researching before visiting or ordering remotely | Trust signals (reviews, location, hours), delivery info |
| **Window Shopper** | Found the brand via Instagram, browsing casually | Visual delight, AI stylist guidance, low-pressure CTAs |

---

## 4. Scope of Work

### 4.1 In Scope
- Single-page (App Router) marketing site with the sections defined in the Master Build Prompt (Hero, Categories, Calculator, Hot Products, Reels, Trust/Social Proof, Why Us, Store Locator, Footer).
- 3D hero scene (React Three Fiber) with CSS fallback.
- Wholesale/retail price calculator with WhatsApp deeplink generation.
- AI chatbot (Claude API) with lead-capture flow.
- Server-side Instagram Reels/Posts proxy via official Meta Graph API.
- WhatsApp Floating Action Button and Intent Modal on all conversion points.
- Legal pages (Terms, Privacy, Cookies) and footer attribution.
- Performance, security, and accessibility implementation per Parts 7–8 of the Master Build Prompt.

### 4.2 Out of Scope (unless separately contracted)
- Full e-commerce checkout / online payment processing.
- Inventory management or stock-sync with a physical POS system.
- Native mobile app.
- Multi-vendor or marketplace functionality.
- Ongoing content creation (photography, reels) — site only *displays* existing content via API.

---

## 5. Functional Requirements

| ID | Requirement | Source (Master Prompt) | Acceptance Criteria |
|---|---|---|---|
| FR-1 | Preloader animation, shown once per session | Part 3 | Loads <3s, does not reappear on internal navigation, skippable via reduced-motion |
| FR-2 | Sticky navbar with glass-on-scroll transition | Part 4.1 | Transparent over hero, glass panel after 80px scroll, WhatsApp CTA always visible |
| FR-3 | 3D hero with scroll-driven camera + CSS fallback | Part 4.2 | Fallback renders within 100ms; 3D loads via dynamic import without blocking LCP |
| FR-4 | Bento-grid category section with hover tilt | Part 4.3 | All categories link to Intent Modal → WhatsApp |
| FR-5 | Wholesale/Retail toggle + live price calculator | Part 4.4 | Tiered discounts apply correctly at 20m/50m/100m+; WA message reflects live total |
| FR-6 | Hot Products grid with texture magnifier | Part 4.5 | Each card opens Intent Modal before WhatsApp redirect |
| FR-7 | Shoppable Reels strip (server-cached) | Part 4.6 | Data fetched via secure `/api/reels`, ISR revalidation hourly, no client-exposed tokens |
| FR-8 | Trust section: stats, testimonials, Instagram grid | Part 4.7 | Testimonials sourced only with consent (see Section 9) |
| FR-9 | "Why Maruti" feature grid | Part 4.8 | Static content, fully responsive |
| FR-10 | Store locator with map + contact card | Part 4.9 | Address/phone/hours match verified business listing |
| FR-11 | Footer with attribution, legal links, socials | Part 4.10 + Addendum Part 12 | Includes mandatory attribution block (see Legal Package §9) |
| FR-12 | WhatsApp FAB (always visible) | Part 5.1 | Opens `wa.me` link with sanitized, encoded message |
| FR-13 | AI Chatbot with lead capture | Part 5.2 | Collects Name/Fabric/Qty, never answers off-topic queries, image upload optional |
| FR-14 | Intent Modal on every product/category click | Part 5.3 | Cannot be bypassed; "Go Back" closes without redirect |
| FR-15 | Custom cursor + magnetic CTAs (desktop only) | Part 5.4 | Disabled on touch / `pointer: coarse` |
| FR-16 | Cookie consent banner | Addendum Part 12.1 | Blocks analytics scripts until consent given |
| FR-17 | Legal pages (Terms, Privacy, Cookies) | Addendum Part 12.2 | Linked from footer on every page |

---

## 6. Non-Functional Requirements

### 6.1 Performance (Core Web Vitals targets)
- LCP < 1.8s, INP < 50ms, CLS < 0.05, TTFB < 200ms.
- Lighthouse: ≥ 95 mobile, 100 desktop.

### 6.2 Security
- OWASP Top 10 baseline: input sanitization (DOMPurify), CSP headers, rate limiting on API routes, no secrets in client bundle.
- All WhatsApp/Instagram/Anthropic API keys server-side only.

### 6.3 Accessibility
- WCAG 2.1 AA contrast (4.5:1 minimum on text).
- Full keyboard navigation, ARIA labels on icon buttons, `prefers-reduced-motion` respected.

### 6.4 Browser / Device Support
- Latest two versions of Chrome, Safari, Edge, Firefox.
- iOS Safari and Android Chrome (priority — most WhatsApp traffic is mobile).
- Graceful 3D fallback on low-end Android devices.

### 6.5 SEO & Localization
- LocalBusiness JSON-LD, OG/Twitter meta, sitemap, robots.txt.
- Optional English ⇄ Nepali toggle (see Master Prompt Addendum, Part 11.1).

---

## 7. Technical Architecture

- **Framework:** Next.js 14 (App Router, React Server Components).
- **3D:** React Three Fiber + Drei + Postprocessing, dynamically imported, client-only.
- **Styling/Motion:** Tailwind CSS, Framer Motion, Lenis smooth scroll.
- **AI:** Claude API (model: `claude-sonnet-4-6`) via server-side `/api/chat` route.
- **Social Data:** Meta Graph API via `/api/reels` and `/api/instagram-posts`, cached with ISR.
- **Hosting:** Vercel (Edge Functions, ISR, Analytics).
- **Secrets:** Vercel Environment Variables (server-side only).

---

## 8. Design System Reference

- **Palette:** Royal Maroon `#6B1A1A`, Emerald `#1A5C3A`, Navy `#0F1E45`, Silk `#FAF4EC`, Gold `#C9A84C` (see Master Prompt Part 2.2 for full token list).
- **Typography:** Cormorant Garamond (display), DM Sans (body), Italiana (accent).
- **Motion:** Standard fade-up/stagger/glass-reveal variants (Master Prompt Part 2.4).

---

## 9. Data Sourcing & Compliance Notes

> **Important — flagged for client and agency review.**

1. **Social media data ingestion (Master Prompt Part 1):** Content from Instagram and Facebook must be retrieved through the **official Meta Graph API** under a registered Meta Developer App owned by Maruti Textile Empire, **not** by scraping public profile pages. Direct scraping may violate Meta's Platform Terms and could result in account restrictions.
2. **Testimonials / Reviews:** Before publishing customer names, photos, or quoted reviews on the site, obtain explicit consent from each customer, or use only reviews already public on Google Business with attribution to the reviewer's public Google profile name.
3. **Product imagery:** Confirm Maruti Textile Empire owns or has a license to use all product photography pulled from social channels (i.e., the images were taken by or for the business, not reposted from a third-party supplier without permission).
4. **AI Chatbot data:** Any personal data collected (name, phone intent, fabric preference) must be disclosed in the Privacy Policy and not retained longer than necessary for the inquiry.

---

## 10. Success Metrics (KPIs)

| Metric | Target |
|---|---|
| WhatsApp click-through rate (sessions → WA click) | ≥ 8% |
| AI chatbot lead-capture completion rate | ≥ 30% of chatbot sessions |
| Average session duration | ≥ 1m 30s |
| Lighthouse Performance (mobile) | ≥ 95 |
| Bounce rate | < 45% |
| Organic search impressions (Google Search Console, 90 days) | +50% vs. baseline |

---

## 11. Indicative Timeline

| Phase | Duration | Output |
|---|---|---|
| Discovery & Data Ingestion | Week 1 | Verified business info, asset library, content tone guide |
| Design System & Wireframes | Week 1–2 | Approved palette, typography, section layouts |
| 3D Hero & Core Sections Build | Week 2–4 | Hero, Categories, Calculator, Hot Products |
| AI Chatbot + Social Proof Integration | Week 4–5 | Working chatbot, Reels/Posts proxy |
| Performance, Security, Accessibility Pass | Week 5–6 | Lighthouse 95+/100, CSP active, a11y audit clean |
| Legal Pages, QA, Client Review | Week 6 | Terms/Privacy/Cookies live, full QA checklist signed off |
| Launch & Post-Launch Monitoring | Week 7 | Live on custom domain, analytics + Search Console configured |

*(Timeline is indicative; final schedule to be agreed between Addigen Agency and Maruti Textile Empire.)*

---

## 12. Roles & Responsibilities

| Responsibility | Addigen Agency / builtwithadi | Maruti Textile Empire |
|---|---|---|
| Design system, code, 3D scene, AI integration | ✅ | |
| Hosting account, domain, environment variables | Configures | Owns / pays for |
| Meta Developer App & Graph API token | Assists setup | Owns account |
| Business info accuracy (address, hours, phone) | | ✅ Provides & verifies |
| Product photography / Reels content | | ✅ Provides |
| Legal review of final agreements | Provides drafts | ✅ Engages local counsel |
| Post-launch content updates | Optional (separate SOW) | ✅ |

---

## 13. Ownership, IP & Licensing Summary

Full legal terms are provided in the companion document **"Legal & Licensing Package."** In summary:

- All custom code, design assets, and copy created for this project are assigned to **Maruti Textile Empire** upon final payment, per the Software Development & IP Assignment Agreement.
- **Addigen Agency / builtwithadi** retains the right to display the project in its portfolio and to a small attribution credit in the site footer, unless otherwise negotiated.
- Open-source libraries used (Next.js, React, Three.js, Tailwind, Framer Motion, etc.) remain under their respective licenses (MIT/Apache/OFL) — see Legal Package §6.
- "Maruti Textile Empire" name, logo, and brand assets remain the sole property of the client.

---

## 14. Risks & Assumptions

| Risk | Mitigation |
|---|---|
| 3D scene impacts performance on low-end devices | Mandatory CSS fallback shown within 100ms; 3D lazy-loaded |
| Social media scraping breaches platform terms | Use official Graph API only (see Section 9) |
| AI chatbot gives off-brand or incorrect answers | System prompt restricts scope to fabrics/business; human handoff via WhatsApp always available |
| Business info (address/phone/hours) changes after launch | Centralize in a single config file for easy updates |
| Client does not have rights to all Instagram imagery | Confirm ownership before publishing (Section 9) |

---

## 15. Appendix — Glossary

- **ISR:** Incremental Static Regeneration (Next.js caching strategy).
- **RSC:** React Server Components.
- **CSP:** Content Security Policy.
- **WA Deeplink:** A `wa.me/<number>?text=<message>` URL that opens WhatsApp with a pre-filled message.
- **Intent Modal:** A confirmation dialog shown before redirecting a user to WhatsApp.
