# Flexo Africa Website

Marketing site for **flexoafrica.com**. Pairs with the MIS at jobs.flexoafrica.com.

## Quick start

```bash
cd "/Users/cameron/Documents/Claude/Projects/Flexo Africa Website"
npm install
cp .env.local.example .env.local   # then fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT
npm run dev
```

Open http://localhost:3000

## Editing content

Almost all content lives in **`lib/site.js`**. Edit that one file to change:

- Tagline, description
- Stats on the home page
- Services, why-us bullets
- Supplier blurbs
- Plate ranges (Polyflex 11 + Stallion 9)
- Process steps
- QA checklist
- Founder story (About page)
- Contact details (phone, email, address, hours)

Page-specific layouts live in `app/<page>/page.jsx`.

## TBDs to fill in `lib/site.js`

- `founded` year
- `yearsExperience`
- `contact.phone`
- `contact.email`
- `contact.address.line1` and `postalCode`

## Logo

Drop your logo file in `public/images/logo.svg` (or .png). Then in `components/Header.jsx`
and `components/Footer.jsx`, replace the `LogoMark` placeholder with `<img src="/images/logo.svg" />`.

## Form (contact / quote)

Uses **Formspree** for submissions. To enable:

1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create a new form, copy the form endpoint URL
3. Paste it into `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
4. Restart `npm run dev`

## Deploy to Vercel

```bash
# from the project folder
vercel link    # links to Vercel project (first time only)
vercel --prod  # deploys to production
```

After first deploy, configure the custom domain in the Vercel dashboard
(Settings → Domains → add `flexoafrica.com` and `www.flexoafrica.com`),
then update DNS records at Afrihost per Vercel's instructions.

## Project structure

```
app/
  layout.jsx          # root layout, metadata, fonts
  globals.css         # Tailwind + design tokens
  page.jsx            # Home
  about/page.jsx
  services/page.jsx
  contact/page.jsx
  portal/page.jsx     # MIS sign-in landing
components/
  Header.jsx          # sticky nav with Sign In button
  Footer.jsx
  CTABanner.jsx       # reusable Get a Quote banner
  ContactForm.jsx     # Formspree-backed form
lib/
  site.js             # ALL content lives here
public/
  images/             # drop your logo here
```

## Brand

| Token | Value | Usage |
| --- | --- | --- |
| `ink` | `#0F172A` | Primary text, dark sections |
| `accent` | `#F97316` | CTAs, highlights |
| `surface-subtle` | `#F8FAFC` | Page section backgrounds |
| Font | Inter | Headings + body |

Edit in `tailwind.config.js`.
