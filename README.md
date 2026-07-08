# Flexo Africa Website

Marketing site for **flexoafrica.com**. Companion sites:

- **portal.flexoafrica.com** — Client Portal (plate ordering + job tracking)
- **tools.flexoafrica.com** — Prepress Tools (subscription)
- **jobs.flexoafrica.com** — internal MIS (staff bookmark only, not linked publicly)

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Resend (contact form -> sales@flexoafrica.com)
- Vercel (auto-deploys on push to `main`)

## Quick start

```bash
cd "/Users/cameron/Documents/Claude/Projects/Flexo Africa Website"
npm install
cp .env.local.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open http://localhost:3000

## Editing content

Almost all content lives in **`lib/site.js`**. Edit that one file to change:

- Tagline, description, stats
- Services + why-us bullets
- Process steps + QA checklist
- Studio services + digital-run pouches
- Founder story
- Contact details, service locations
- Tools list, tools pricing tiers
- Plate tiers + turnaround times

Page-specific layouts live in `app/<page>/page.jsx`.

## Form (contact / quote)

Uses **Resend** for outbound email. The `/api/contact` route escapes all user
input before sending to `sales@flexoafrica.com`.

To enable locally:

1. Sign up at https://resend.com and verify the flexoafrica.com domain
2. Generate an API key
3. Paste it into `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```
4. Restart `npm run dev`

For production, set `RESEND_API_KEY` in the Vercel project settings.

## Deploy

Push to `main`, Vercel auto-deploys. Manual override:

```bash
vercel --prod
```

Custom domain (`flexoafrica.com`, `www.flexoafrica.com`) is configured in the
Vercel dashboard. DNS lives at Afrihost.

## Project structure

```
app/
  layout.jsx           # root layout, metadata, fonts
  globals.css          # Tailwind + design tokens
  robots.js            # /robots.txt
  sitemap.js           # /sitemap.xml
  page.jsx             # Home
  about/page.jsx
  services/page.jsx
  studio/page.jsx
  tools/page.jsx       # sells tools.flexoafrica.com
  order-plates/page.jsx # sells portal.flexoafrica.com configurator
  contact/page.jsx
  faq/page.jsx
  policies/page.jsx
  portal/page.jsx      # 307-redirects to portal.flexoafrica.com
  api/contact/route.js # Resend email handler
components/
  Header.jsx
  Footer.jsx
  CTABanner.jsx
  ContactForm.jsx
  SelfServeStrip.jsx   # homepage tools + order-plates cards
lib/
  site.js              # ALL content lives here
public/
  images/              # logo
```

## Brand

| Token | Value | Usage |
| --- | --- | --- |
| `ink` | `#0F2E5F` | Primary text, dark sections (navy from wordmark) |
| `accent` | `#DC2626` | CTAs, highlights (red from logo stripe) |
| `surface-subtle` | `#F8FAFC` | Page section backgrounds |
| `brand-blue` | `#1E40AF` | Secondary highlight |
| Font | Inter | Headings + body |

Edit in `tailwind.config.js`.
