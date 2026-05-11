import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Client Portal",
  description:
    "Real-time job tracking for Flexo Africa customers, launching soon. Register your interest to be notified.",
};

const features = [
  {
    title: "Real-time job status",
    blurb:
      "See exactly where every plate is, from artwork submission through QC, plate-making, and delivery.",
    icon: "clock",
  },
  {
    title: "All your jobs in one place",
    blurb:
      "Filter, search, and review your full job history. No more chasing emails or phone calls for an update.",
    icon: "list",
  },
  {
    title: "Files and proofs on demand",
    blurb:
      "Download PDFs, approve proofs, and keep your full job record in your portal.",
    icon: "file",
  },
  {
    title: "Notifications when it matters",
    blurb:
      "Optional email or WhatsApp alerts on key stages, so you can plan your press schedule with confidence.",
    icon: "bell",
  },
];

export default function PortalPage() {
  return (
    <>
      <section className="bg-surface-subtle border-b border-ink/10">
        <div className="container-x py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Coming Soon
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-ink">
              The Flexo Africa Client Portal.
            </h1>
            <p className="mt-6 text-lg text-ink-muted max-w-2xl">
              Real-time visibility into every job you place with us. Track status, download
              proofs, and never wonder where your plates are again.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Register your interest
              </Link>
              <a
                href={site.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What's coming</span>
            <h2 className="mt-3 text-3xl font-bold text-ink">
              Built around how printers actually work.
            </h2>
            <p className="mt-3 text-ink-muted">
              We've spent over 20 years inside the flex industry. The Client Portal is
              designed to remove the friction we know slows printers down.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-ink/10 bg-white p-8 shadow-card"
              >
                <FeatureIcon name={f.icon} />
                <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{f.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink text-white">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <span className="eyebrow text-accent">Stay in the loop</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                Be first in line when we launch.
              </h2>
              <p className="mt-4 text-white/80 max-w-md">
                Drop us a line and we'll notify you the moment the Client Portal goes live,
                along with how to get your account set up.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Register your interest
              </Link>
              <a
                href={`mailto:${site.contact.email}?subject=Client%20Portal%20interest`}
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ name }) {
  const common = "h-10 w-10 text-accent";
  if (name === "clock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "list") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "file") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 3v6h6M9 13l3 3 3-3M12 16V9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M18 16v-5a6 6 0 10-12 0v5l-2 3h16l-2-3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 004 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
