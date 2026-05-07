# Flexo Africa Website — v1 Spec

Captured during page-by-page collection on 2026-05-07. This file will move to the new sibling folder `/Users/cameron/Documents/Claude/Projects/Flexo Africa Website/` when we scaffold the project.

---

## Foundations

| Decision | Choice |
| --- | --- |
| Domain | `flexoafrica.com` (root, currently no site) |
| Hosting | Vercel Hobby (free) |
| Stack | Next.js 14 App Router + Tailwind |
| Brand feel | Modern Industrial |
| Page scope | Lean v1: Home, About, Services, Contact, Client Login |
| Primary CTA | Get a Quote |
| Audience | Mix of new prospects + existing customers |
| Project folder | `/Users/cameron/Documents/Claude/Projects/Flexo Africa Website/` |
| Logo | Cam to drop into project `/public` folder |
| Photos | Placeholder/stock for v1, swap later |
| Form backend | Formspree |
| MIS link | jobs.flexoafrica.com (Sign In button in header + footer + dedicated /portal page) |

## Open TBDs (Cam to confirm before build)

- **Founding year** for "since [year]" copy
- **Phone number** to display
- **Public email** to display (default to manning.cameron@gmail.com if no separate one)
- **Physical address** for footer + Contact page + map embed
- **Business hours** (e.g., Mon to Fri 08:00 to 17:00)
- **Tagline** if you'd prefer something other than "Trusted flexographic plate partners."

## Design system (proposed defaults)

**Colors**
- Primary: deep ink (#0F172A) for text and backgrounds
- Accent: bold orange (#F97316) for CTAs and highlights (industrial, energetic)
- Surface: white (#FFFFFF) and soft gray (#F8FAFC)
- Borders: subtle (#E5E7EB)

I'll mock these as the starting palette. Easy to swap once you see them live.

**Typography**
- Headings: Inter (clean, modern, free, same family the MIS uses)
- Body: Inter
- Sizes: standard Tailwind type scale

**Layout**
- Max width 1200px, generous white space
- Sticky header with logo + nav + Sign In button
- Footer with contact, links, MIS login

---

## Page 1: Home

**Header (every page)**
- Logo (left)
- Nav: Home, About, Services, Contact (center)
- "Sign In" button linking to jobs.flexoafrica.com (right, accent color)

**Hero**
- Headline: **Trusted flexographic plate partners.**
- Sub: Premium plates, reliable turnaround, and full job visibility for printers across South Africa.
- Two CTAs: "Get a Quote" (primary) + "See Services" (secondary)
- Background: image of plates / printing in action

**Trust strip**
- 50+ customers served
- 3,400+ jobs delivered
- Polyflex & Stallion supplier partner
- KZN-based since [TBD year]

**What we do (3 cards)**
1. **Plate Brokerage** — we source the right plate for the job.
2. **Quality Control** — every plate checked before dispatch.
3. **Quick Turnaround** — clear ETAs, no surprises.

**Why Flexo Africa** (4 bullets)
- Direct relationships with Polyflex and Stallion
- Real-time job tracking via our MIS portal
- Based in Assagay, KZN, serving printers across South Africa
- [TBD] years of flexographic experience

**CTA banner**
- "Ready to streamline your plate ordering?"
- Primary button: Get a Quote

**Footer (every page)**
- Logo + 1-line tagline
- Quick links: Home, About, Services, Contact, Sign In to Portal
- Contact: phone, email, address
- Copyright + year

---

## Page 2: About

**Header** — "About Flexo Africa" + intro line.

**Our Story** — founder-led, first-person paragraph in Cam's voice. I'll draft a starter, you tweak. Will reference founding year (TBD), Assagay KZN, why you started.

**Based in Assagay, KZN** — paragraph + address (no map on this page, map lives on Contact).

**Our Suppliers** — short blurb each:
- **Polyflex** — full range from P-45 thou through P-Shave & Gibson, 11 plate types stocked.
- **Stallion** — full range from S-45 thou through Centillion, 9 plate types stocked.

**No team section** in v1.

**CTA banner** — Get a Quote / Sign in to MIS.

---

## Page 3: Services

**Header** — title + intro line.

**Plate Brokerage section**
- Marketing-led copy with light technical detail
- What you do, why it matters, who you partner with

**Plate Types grid**
- Polyflex range listed by name only (P-45 thou, P-50 thou, P-Shave & Gibson, etc., 11 total)
- Stallion range listed by name only (S-45 thou through Centillion, 9 total)
- No rates published

**Quality Control**
- Visual checklist of what gets checked before dispatch
- Builds on the QA checklist already configured in the MIS

**Turnaround**
- "Standard turnaround 3 to 5 working days, urgent jobs accommodated where possible."

**Process (4 steps)**
1. **Submit Artwork** — send your job specs.
2. **We Source + QC** — right plate, quality checked.
3. **Track in your portal** — real-time updates via the MIS at jobs.flexoafrica.com (screenshot + Sign In button).
4. **Delivered** — to your printer with full audit trail.

**CTA banner** — Request a Quote.

---

## Page 4: Contact

**Header** — "Get in touch" + 1-line intro.

**Two-column layout**

Left: **Quote / Contact form** (Formspree backend)
- Name (required)
- Company (required)
- Email (required)
- Phone (optional)
- Message (required)
- Submit button

Right: **Direct contact**
- Phone: [TBD]
- Email: [TBD]
- Address: [TBD]
- Hours: [TBD]

**Map embed**
- Google Maps iframe pinned to your Assagay address

**CTA strip**
- "Already a customer? Sign in to your portal" + Sign In button

---

## Page 5: Client Portal (`/portal`)

**Premise** — MIS is internal staff only for now. Page is a clean staff sign-in landing.

**Layout**
- Header: "Sign in to the Flexo Africa MIS"
- 1-line description: "Internal job tracking system for Flexo Africa staff."
- Big primary button: **Sign In** (links to https://jobs.flexoafrica.com)
- Secondary link: "Forgot password?" (links to MIS forgot-password flow)
- Small footer note: "Customer access coming soon. Contact us if you'd like to discuss visibility into your jobs."

---

## Build plan (after sign-off)

**Stage 1 — Scaffold + design system** (~30 min)
- Create Next.js 14 app in `/Users/cameron/Documents/Claude/Projects/Flexo Africa Website/`
- Install Tailwind, set up design tokens, fonts
- Build shared Header + Footer components
- Build empty page shells

**Stage 2 — Build pages**
- Home, About, Services, Contact, Client Login per spec
- Wire Formspree
- Add Google Map embed

**Stage 3 — Deploy + DNS cutover**
- Push to Vercel via `vercel --prod`
- Add `flexoafrica.com` and `www.flexoafrica.com` as domains in Vercel
- Update Afrihost DNS: A record + CNAME for www → Vercel
- Verify HTTPS via Vercel auto-issued cert

**Stage 4 — Verification + handover**
- Walk site live together
- Test MIS Sign In flow end-to-end
- Lighthouse / a11y check
- Document how to edit content (one short README)

---

## Risk + cost summary

| Item | Cost | Risk |
| --- | --- | --- |
| Vercel Hobby | R0/mo | Free tier limits should be fine; same as MIS |
| Domain | Already paid via Afrihost | None |
| Formspree free | R0/mo | 50 submissions/month limit; upgrade if you exceed |
| DNS cutover | None | Brief propagation window during cutover (cache may delay <1hr) |

No risky decisions. Total ongoing cost: R0/month for v1.
