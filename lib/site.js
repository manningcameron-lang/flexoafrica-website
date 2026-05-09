// Single source of truth for site content.
// Cam: edit this file to update copy across the site without touching components.

export const site = {
  name: "Flexo Africa",
  legalName: "Flexo Africa (Pty) Ltd",
  tagline: "Trusted flexographic plate partners.",
  description:
    "Premium plates, reliable turnaround, and full job visibility for printers across South Africa.",
  url: "https://flexoafrica.com",
  misUrl: "https://jobs.flexoafrica.com",

  // TBD — Cam to fill these in
  founded: "TBD", // year e.g. "2014"
  yearsExperience: "TBD",
  contact: {
    phone: "TBD",
    email: "TBD", // e.g. "info@flexoafrica.com" or "manning.cameron@gmail.com"
    address: {
      line1: "TBD",
      line2: "TBD",
      city: "Durban",
      province: "KwaZulu-Natal",
      country: "South Africa",
      postalCode: "TBD",
    },
    hours: "Mon to Fri, 08:00 to 17:00",
    mapsQuery: "Durban, KwaZulu-Natal, South Africa",
  },

  stats: [
    { label: "Customers served", value: "50+" },
    { label: "Jobs delivered", value: "3,400+" },
    { label: "Based in", value: "Durban, KZN" },
  ],

  services: [
    {
      title: "Plate Brokerage",
      blurb: "We source the right plate for the job from our supplier partners.",
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
    "Direct relationships with Polyflex and Stallion",
    "Real-time job tracking via our MIS portal",
    "Based in Durban, KZN, serving printers across South Africa",
    "Decades of combined flexographic experience",
  ],

  suppliers: [
    {
      name: "Polyflex",
      blurb:
        "Full range of Polyflex plates from P-45 thou through P-Shave & Gibson. 11 plate types stocked and supported.",
    },
    {
      name: "Stallion",
      blurb:
        "Full range of Stallion plates from S-45 thou through Centillion. 9 plate types stocked and supported.",
    },
  ],

  plateRanges: {
    polyflex: [
      "P-45 thou",
      "P-50 thou",
      "P-67 thou",
      "P-73 thou",
      "P-100 thou",
      "P-112 thou",
      "P-125 thou",
      "P-155 thou",
      "P-200 thou",
      "P-250 thou",
      "P-Shave & Gibson",
    ],
    stallion: [
      "S-45 thou",
      "S-50 thou",
      "S-67 thou",
      "S-73 thou",
      "S-100 thou",
      "S-125 thou",
      "S-155 thou",
      "S-200 thou",
      "Centillion",
    ],
  },

  process: [
    {
      step: "01",
      title: "Submit Artwork",
      blurb: "Send your job specs and artwork through to our team.",
    },
    {
      step: "02",
      title: "We Source + QC",
      blurb: "We pick the right plate from our suppliers and check quality before dispatch.",
    },
    {
      step: "03",
      title: "Track in your portal",
      blurb:
        "Real-time updates on every stage of your job through our MIS at jobs.flexoafrica.com.",
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

  // Founder-led story for About page. Edit freely.
  story:
    "Flexo Africa was started in [TBD year] in Durban, KwaZulu-Natal, with a simple goal. Make sourcing flexographic plates easier, more transparent, and more reliable for printers across South Africa. We work directly with Polyflex and Stallion to broker the right plate for every job, and we built our own management system so customers always know exactly where their job is. Today we serve printers from Cape Town to Johannesburg.",
};
