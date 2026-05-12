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
  // Customer-facing Client Portal — LIVE at portal.flexoafrica.com (deployed 2026-05-11).
  portalUrl: "https://portal.flexoafrica.com",

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
        "Real-time updates on every stage of your job through the upcoming Client Portal. Sign up to be notified when it launches.",
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
    "Color separations confirmed",
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
        "High-quality 3D renders of your packaging for presentations, catalogues, or social. No physical sample needed — just your artwork and substrate.",
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
};
