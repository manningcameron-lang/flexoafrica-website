import Link from "next/link";
import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Studio Services",
  description:
    "Mock-ups, 3D renderings, and short digital runs from Flexo Africa. Get a quote today.",
};

export default function StudioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio services"
        title="More than just plates."
        subtitle="We offer mock-ups, 3D renderings, and short digital runs to support your artwork and pre-press workflow."
      />
      <MockupsSection />
      <RenderingsSection />
      <DigitalRunsSection />
      <CTABanner primaryLabel="Get a Quote" />
    </>
  );
}

function MockupsSection() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 md:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Mock-ups</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            See it before you print it.
          </h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            Clean, accurate mock-ups of your artwork on pack. Useful for client
            approvals, artwork sign-off, and presentations before you commit to
            a print run.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get a Quote
          </Link>
        </div>
        <Placeholder icon="mockup" label="Mock-up preview" />
      </div>
    </section>
  );
}

function RenderingsSection() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x grid gap-12 md:grid-cols-2 items-center">
        <Placeholder icon="cube" label="3D rendering preview" className="order-last md:order-first" />
        <div>
          <span className="eyebrow">3D Renderings</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            Photo-realistic, ready to share.
          </h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            High-quality 3D renders of your packaging for presentations,
            catalogues, or social. No physical sample needed — just your artwork
            and substrate.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function DigitalRunsSection() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 md:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Short Digital Runs</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            Small quantities, no minimums.
          </h2>
          <p className="mt-4 text-ink-muted text-lg leading-relaxed">
            Need a short run for a launch, test market, or promotion? We handle
            digital runs where traditional plate printing isn't the right fit.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get a Quote
          </Link>
        </div>
        <Placeholder icon="stack" label="Digital run preview" />
      </div>
    </section>
  );
}

function Placeholder({ icon, label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-ink/5 via-accent/5 to-brand-blue/10 border border-ink/10 aspect-[4/3] ${className}`}
      aria-label={label}
    >
      <PlaceholderIcon name={icon} />
    </div>
  );
}

function PlaceholderIcon({ name }) {
  const cls = "h-20 w-20 text-ink/20";
  if (name === "mockup") {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="6" y="8" width="52" height="36" rx="3" />
        <rect x="10" y="12" width="44" height="28" rx="1" />
        <path d="M26 44v6M38 44v6M20 50h24" strokeLinecap="round" />
        <path d="M16 20h20M16 25h16M16 30h12" strokeLinecap="round" />
        <rect x="38" y="18" width="12" height="16" rx="1" />
      </svg>
    );
  }
  if (name === "cube") {
    return (
      <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M32 8L56 20v24L32 56 8 44V20L32 8z" />
        <path d="M32 8v48M56 20L32 32 8 20" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={cls} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="14" y="22" width="36" height="28" rx="2" />
      <path d="M10 18h36a2 2 0 012 2v0" strokeLinecap="round" />
      <path d="M6 14h36a2 2 0 012 2v0" strokeLinecap="round" />
      <path d="M20 30h16M20 36h12" strokeLinecap="round" />
    </svg>
  );
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-surface-subtle border-b border-ink/10">
      <div className="container-x py-20 sm:py-24">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-ink-muted max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
