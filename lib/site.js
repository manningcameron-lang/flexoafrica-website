// Single source of truth for site content.
// Cam: edit this file to update copy across the site without touching components.

export const site = {
  name: "Flexo Africa",
  legalName: "Flexo Africa (Pty) Ltd",
  tagline: "Trusted flexographic plate partners.",
  description:
    "Premium plates, reliable turnaround, and full job visibility for printers across South Africa.",
  url: "https://flexoafrica.com",
  // Staff-only MIS, NOT linked from public pages. Staff bookmark this directly.
  misUrl: "https://jobs.flexoafrica.com",
  // Customer-facing Client Portal, LIVE at portal.flexoafrica.com.
  portalUrl: "https://portal.flexoafrica.com",
  // Configurator on the portal (no login required to see a price).
  configuratorUrl: "https://portal.flexoafrica.com/configurator",
  // Prepress Tools portal (subscription product).
  toolsUrl: "https://tools.flexoafrica.com",
  toolsPricingUrl: "https://tools.flexoafrica.com/pricing.html",
  toolsSignupUrl: "https://tools.flexoafrica.com/signup",

  founded: "2024",
  yearsExperience: "20+",
  contact: {
    phone: "+27 72 665 2041",
    phoneTel: "+27726652041", // for tel: links, no spaces
    whatsapp: "+27 64 586 7535",
    whatsappLink: "https://wa.me/27645867535", // international format, no plus, no spaces
    email: "sales@flexoafrica.com",
    emailMailto: "mailto:sales@flexoafrica.com",
    address: {
      city: "Durban",
      province: "KwaZulu-Natal",
      country: "South Africa",
    },
    hours: "Mon to Fri, 08:00 to 17:00",
    mapsQuery: "Durban, KwaZulu-Natal, South Africa",
  },

  // Where we produce and deliver plates. Used on About, Contact, and Footer.
  serviceLocations: {
    southAfrica: ["Durban", "Cape Town", "Gauteng"],
    international: ["Kenya", "Angola", "Zimbabwe", "Mauritius"],
  },

  stats: [
    { label: "Customers served", value: "50+" },
    { label: "Jobs delivered", value: "3,400+" },
    { label: "Years experience", value: "20+" },
    { label: "Based in", value: "Durban, KZN" },
  ],

  services: [
    {
      title: "Plate Brokerage",
      blurb: "We source the right plate for every job, across all substrates.",
      icon: "swap",
    },
    {
      title: "Quality Control",
      blurb: "Every plate is checked before dispatch against our QA checklist.",
      icon: "shield",
    },
    {
      title: "Quick Turnaround",
      blurb: "Standard 3 to 5 working days. Urgent jobs accommodated where possible.",
      icon: "bolt",
    },
  ],

  why: [
    "Over 20 years of experience across all substrates",
    "Real-time job tracking via our Client Portal",
    "Based in Durban, KZN, serving printers across South Africa",
    "Established 2024, building on decades of industry expertise",
  ],

  process: [
    {
      step: "01",
      title: "Submit Artwork",
      blurb: "Send your job specs and artwork through to our team.",
    },
    {
      step: "02",
      title: "We Source + QC",
      blurb: "We pick the right plate for the substrate and run it through QC before dispatch.",
    },
    {
      step: "03",
      title: "Track in your Client Portal",
      blurb:
        "Real-time updates on every stage of your job, from artwork through QC, plate-making, and delivery. Sign in or register on the portal.",
      highlight: true,
    },
    {
      step: "04",
      title: "Delivered",
      blurb: "Plates arrive at your printer with a full audit trail.",
    },
  ],

  qaChecklist: [
    "Artwork resolution check",
    "Bleed and trim verified",
    "Colour separations confirmed",
    "Plate thickness against spec",
    "Surface inspection",
    "Dispatch packaging",
    "Final QA sign-off",
  ],

  studioServices: [
    {
      title: "Mock-ups",
      tagline: "See it before you print it.",
      blurb:
        "Clean, accurate mock-ups of your artwork on pack. Useful for client approvals, artwork sign-off, and presentations before you commit to a print run.",
      icon: "mockup",
    },
    {
      title: "3D Renderings",
      tagline: "Photo-realistic, ready to share.",
      blurb:
        "High-quality 3D renders of your packaging for presentations, catalogues, or social. No physical sample needed, just your artwork and substrate.",
      icon: "cube",
    },
    {
      title: "Short Digital Runs",
      tagline: "Small quantities, no minimums.",
      blurb:
        "Need a short run for a launch, test market, or promotion? We handle digital runs where traditional plate printing isn't the right fit.",
      icon: "stack",
    },
  ],

  // Stand-up zipper pouch sizes for the Studio > Short Digital Runs section.
  // NOTE: S height (~135 mm) still to verify against PackX spec sheet.
  digitalRunPouches: [
    { size: "S",   volume: "250 ml",    height: 135, width: 110, gusset:  50 },
    { size: "M",   volume: "430 ml",    height: 260, width: 130, gusset:  80 },
    { size: "L",   volume: "1,000 ml",  height: 260, width: 160, gusset:  80 },
    { size: "XL",  volume: "1,500 ml",  height: 290, width: 182, gusset:  90 },
    { size: "XXL", volume: "2,800 ml",  height: 299, width: 275, gusset: 110 },
  ],

  // Founder-led story for About page. Edit freely.
  story:
    "Flexo Africa was established in 2024 in Durban, KwaZulu-Natal, building on over 20 years of combined experience working with all substrates. Our goal is simple. Make sourcing flexographic plates easier, more transparent, and more reliable for printers across South Africa. We've built our own management system so customers always know exactly where their job is. Today we serve printers from Cape Town to Johannesburg.",

  /* ─────────────────────────────────────────────────────────────────────
     PREPRESS TOOLS (tools.flexoafrica.com)
     Used by /tools page + SelfServeStrip on Home.
     ────────────────────────────────────────────────────────────────── */
  toolsCount: 15,
  tools: [
    { name: "Ink Report",             blurb: "Full A3 colour separation report from a normalised PDF.",                 icon: "droplet",  href: "https://tools.flexoafrica.com/ink-report.html" },
    { name: "Step & Repeat",          blurb: "Grid, gap, margin, sheet size to a print-ready stepped PDF.",             icon: "grid",     href: "https://tools.flexoafrica.com/step-repeat.html" },
    { name: "Visual Compare",         blurb: "Upload two artwork PDFs and see dimensional + ink differences side by side.", icon: "compare",  href: "https://tools.flexoafrica.com/visual-compare.html" },
    { name: "Barcode Verifier",       blurb: "Auto-verify barcodes against GS1: check digit, quiet zones, flexo colour.", icon: "barcode",  href: "https://tools.flexoafrica.com/barcode-verify.html" },
    { name: "Colour Replace",         blurb: "Swap a colour, spot or visual pixel, with a before/after proof.",         icon: "swatch",   href: "https://tools.flexoafrica.com/colour-replace.html" },
    { name: "Colour Swatch Library",  blurb: "Pantone + house spot colours with CMYK values and ink recipes.",          icon: "palette",  href: "https://tools.flexoafrica.com/colour-swatch.html" },
    { name: "File Preflight",         blurb: "Automatic artwork check against flexo press standards.",                  icon: "shield",   href: "https://tools.flexoafrica.com/preflight.html" },
    { name: "Repeat Calculator",      blurb: "Back-calc sleeve radius and print repeat from plate + tape.",             icon: "ruler",    href: "https://tools.flexoafrica.com/repeat-calculator.html" },
    { name: "Worksmap Creator",       blurb: "Enter bag dimensions and get a to-scale worksmap PDF.",                   icon: "map",      href: "https://tools.flexoafrica.com/worksmap.html" },
    { name: "Print Instruction",      blurb: "Job details, technical specs, colour separations, approval blocks.",      icon: "clipboard",href: "https://tools.flexoafrica.com/print-instruction.html" },
    { name: "ECG Conversion",         blurb: "CMYK to Expanded Colour Gamut with automated channel mapping.",           icon: "channels", href: "https://tools.flexoafrica.com/ecg-conversion.html" },
    { name: "Imposition Tool",        blurb: "Gang multiple labels onto one plate sheet with configurable gutters.",    icon: "grid2",    href: "https://tools.flexoafrica.com/imposition-tool.html" },
    { name: "Ink Mixing Calculator",  blurb: "Target a Pantone, get a base ink ratio with Delta-E tolerance.",          icon: "beaker",   href: "https://tools.flexoafrica.com/ink-mixing-calc.html" },
    { name: "Anilox Volume Calc",     blurb: "Look up BCM by LPI + screen angle, compare anilox specs.",                icon: "gauge",    href: "https://tools.flexoafrica.com/anilox-calc.html" },
    { name: "Ink Calculator",         blurb: "Drop a normalised PDF, get ink needed per colour for your full run.",     icon: "droplet2", href: "https://tools.flexoafrica.com/ink-calc.html" },
  ],
  toolsTiers: [
    {
      name: "Free",
      price: "R0",
      cadence: "forever",
      highlight: false,
      features: ["3 runs per month", "All 15 prepress tools", "Job history (last 50)", "PDF reports"],
      cta: "Start free",
      href: "https://tools.flexoafrica.com/signup",
    },
    {
      name: "Pro",
      price: "R899",
      cadence: "per month",
      highlight: true,
      features: ["60 tool runs per month", "Top-up credit packs when you need more", "All tools + early access", "Full job history", "Email reports", "Priority support"],
      cta: "Upgrade to Pro",
      href: "https://tools.flexoafrica.com/pricing.html",
    },
    {
      name: "Studio",
      price: "R2,499",
      cadence: "per month",
      highlight: false,
      features: ["Everything in Pro", "Unlimited runs", "Team accounts — up to 3 seats", "Custom report branding", "API access", "Dedicated support"],
      cta: "Upgrade to Studio",
      href: "https://tools.flexoafrica.com/pricing.html",
    },
    {
      name: "Enterprise",
      price: "Let's talk",
      cadence: "custom pricing",
      highlight: false,
      features: ["Everything in Studio", "Unlimited seats & sites", "Single sign-on (SSO)", "White-label reports & portal", "Custom tools built for you", "Priority SLA + onboarding"],
      cta: "Contact us",
      href: "https://tools.flexoafrica.com/pricing.html",
    },
  ],

  /* ─────────────────────────────────────────────────────────────────────
     ORDER PLATES ONLINE (portal.flexoafrica.com)
     Used by /order-plates page + SelfServeStrip on Home.
     ────────────────────────────────────────────────────────────────── */
  plateTiers: [
    {
      code: "C",
      name: "Crystal",
      tagline: "Premium HD photopolymer",
      blurb: "Highest resolution. Fine detail labels and premium flexible packaging.",
      thicknesses: "45, 67 thou",
    },
    {
      code: "SE",
      name: "Surface Engineered",
      tagline: "Cleaner ink lay, mid-tier",
      blurb: "Engineered surface for consistent transfer. Fine-line packaging through to corrugated.",
      thicknesses: "45, 67, 100, 112, 125 thou",
    },
    {
      code: "ST",
      name: "Standard",
      tagline: "Everyday digital photopolymer",
      blurb: "Reliable daily production across packaging, labels, and corrugated.",
      thicknesses: "45, 67, 100, 112, 125, 185, 250 thou",
    },
  ],
  turnaround: {
    standard: { label: "Standard", time: "48 to 72", unit: "hours" },
    express:  { label: "Express",  time: "24 to 36", unit: "hours" },
  },
};
