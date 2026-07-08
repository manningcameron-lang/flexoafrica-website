import Link from "next/link";
import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";
import SelfServeStrip from "@/components/SelfServeStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <SelfServeStrip />
      <WhyUs />
      <StudioTeaser />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-surface via-surface-subtle to-surface">
      <div className="container-x relative py-24 sm:py-32 z-10">
        <div className="max-w-3xl">
          <span className="eyebrow">Flexographic plate brokerage</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-ink">
            {site.tagline}
          </h1>
          <p className="mt-6 text-lg text-ink-muted max-w-2xl">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              See Services
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative logo on the right (desktop only) */}
      <div className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <img
          src="/images/logo.png"
          alt=""
          aria-hidden="true"
          className="h-[420px] w-auto opacity-15"
        />
      </div>

      {/* Soft color wash */}
      <div className="pointer-events-none absolute -right-24 top-1/4 hidden lg:block">
        <div className="h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute right-1/3 bottom-0 hidden lg:block">
        <div className="h-[260px] w-[260px] rounded-full bg-brand-blue/10 blur-3xl" />
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-surface-subtle">
      <div className="container-x py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-ink">{s.value}</div>
              <div className="text-xs sm:text-sm text-ink-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink">
            End-to-end plate delivery for printers.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-ink/10 bg-white p-8 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <ServiceIcon name={s.icon} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section bg-ink text-white">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow text-accent">Why Flexo Africa</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Built around the printer's reality.
          </h2>
          <p className="mt-4 text-white/70 max-w-md">
            We started Flexo Africa because plate ordering felt opaque and unreliable. So we
            fixed it. Direct supplier relationships, careful QC, and our own job-tracking
            system mean you always know what's coming and when.
          </p>
        </div>
        <ul className="space-y-4">
          {site.why.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StudioTeaser() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Studio services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink">
            Mock-ups, renderings, and short runs.
          </h2>
          <p className="mt-3 text-ink-muted">
            Need to visualise artwork before print, or a small quantity run that doesn't
            justify a full plate job? We cover that too.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.studioServices.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-ink/10 bg-white p-8 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <StudioIcon name={s.icon} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/studio" className="btn-secondary inline-flex">
            Explore Studio Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function StudioIcon({ name }) {
  const cls = "h-10 w-10 text-accent";
  if (name === "mockup") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M6 7h7M6 10h5" strokeLinecap="round" />
        <rect x="15" y="6" width="4" height="6" rx="0.5" />
      </svg>
    );
  }
  if (name === "cube") {
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M12 3l9 4.5v9L12 21l-9-4.5v-9L12 3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v18M21 7.5L12 12l-9-4.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // stack
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 9h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 7h14" strokeLinecap="round" />
      <path d="M2 5h14" strokeLinecap="round" />
      <path d="M9 13h6M9 16h4" strokeLinecap="round" />
    </svg>
  );
}

function ServiceIcon({ name }) {
  const common = "h-10 w-10 text-accent";
  if (name === "swap") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 7h11l-3-3M17 17H6l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-1 h-5 w-5 flex-none text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}
