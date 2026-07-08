import Link from "next/link";
import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Order Flexo Plates Online with Live Pricing",
  description:
    "Order flexographic plates online with live ZAR pricing and live tracking. Three tiers, fourteen specs, Standard 48-72 hour or Express 24-36 hour turnaround.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Flexographic plate manufacturing",
  provider: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Angola" },
    { "@type": "Country", name: "Zimbabwe" },
    { "@type": "Country", name: "Mauritius" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plate tiers",
    itemListElement: site.plateTiers.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name: t.name, description: t.blurb },
      url: site.configuratorUrl,
    })),
  },
};

export default function OrderPlatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Tiers />
      <Turnaround />
      <HowItWorks />
      <SelfServeVsQuote />

      <CTABanner
        title="Get a price for your next plate, in seconds."
        subtitle="Configure the plate, see live ZAR pricing, order when you're ready."
        primaryHref={site.configuratorUrl}
        primaryLabel="Configure a plate"
      />
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-surface-subtle border-b border-ink/10">
      <div className="container-x py-20 sm:py-24">
        <span className="eyebrow">Order online</span>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink max-w-3xl">
          Order plates with live pricing and live tracking.
        </h1>
        <p className="mt-4 text-lg text-ink-muted max-w-2xl">
          Three plate tiers, fourteen specs. Standard {site.turnaround.standard.time} hour, Express {site.turnaround.express.time} hour turnaround.
          Get a price in seconds. No login needed for a quote.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.configuratorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Configure your plate
          </a>
          <a
            href={`${site.portalUrl}/login`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Sign in
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Three plate tiers ───────────────────────────────────────────────── */

function Tiers() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Plate tiers</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            Three tiers, fourteen specs.
          </h2>
          <p className="mt-3 text-ink-muted">
            Pick by tier and thickness in the configurator. Crystal for premium HD.
            Surface Engineered for cleaner ink lay. Standard for daily production.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.plateTiers.map((tier) => (
            <div key={tier.name} className="rounded-xl border border-ink/10 bg-white p-8 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white font-bold">
                  {tier.code}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
                  <p className="text-xs text-ink-muted uppercase tracking-widest">{tier.tagline}</p>
                </div>
              </div>
              <p className="mt-5 text-sm text-ink-muted leading-relaxed">{tier.blurb}</p>
              <div className="mt-5 rounded-md bg-surface-subtle px-4 py-3 text-xs">
                <span className="font-semibold text-ink">Thicknesses:</span>{" "}
                <span className="text-ink-muted">{tier.thicknesses}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Turnaround ──────────────────────────────────────────────────────── */

function Turnaround() {
  const t = site.turnaround;
  return (
    <section className="section bg-ink text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent">Turnaround</span>
          <h2 className="mt-3 text-3xl font-bold">Fast, whichever you pick.</h2>
          <p className="mt-3 text-white/80">
            The clock starts when we have your file and your proof approval.
            Need it faster? Add Express at checkout.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 border border-white/10 p-8">
            <p className="text-sm text-white/60 uppercase tracking-widest">{t.standard.label}</p>
            <p className="mt-2 text-5xl font-bold">{t.standard.time}</p>
            <p className="mt-1 text-white/70">{t.standard.unit}</p>
          </div>
          <div className="rounded-xl bg-accent/20 border border-accent/40 p-8">
            <p className="text-sm text-accent uppercase tracking-widest font-semibold">{t.express.label}</p>
            <p className="mt-2 text-5xl font-bold">{t.express.time}</p>
            <p className="mt-1 text-white/70">{t.express.unit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How it works ────────────────────────────────────────────────────── */

function HowItWorks() {
  const steps = [
    { step: "01", title: "Configure", blurb: "Pick tier, thickness, dimensions. See live pricing." },
    { step: "02", title: "Approve proof", blurb: "Review the proof we generate from your artwork." },
    { step: "03", title: "We produce + QC", blurb: "Manufactured and run through our QC checklist before dispatch." },
    { step: "04", title: "Track + deliver", blurb: "Watch every stage in the portal until plates arrive." },
  ];
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Order to delivery, tracked end to end.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-ink/10 bg-white p-6 shadow-card">
              <div className="text-sm font-semibold text-accent">{s.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Self-serve vs Talk to us (cannibalisation guard) ────────────────── */

function SelfServeVsQuote() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Which path suits you?</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            Self-serve or talk to us. Both work.
          </h2>
          <p className="mt-3 text-ink-muted">
            Some jobs are perfect for the configurator. Others deserve a phone
            call. Here's how to decide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-card border-l-4 border-accent">
            <h3 className="text-lg font-semibold text-ink">Order online</h3>
            <p className="mt-1 text-sm text-ink-muted uppercase tracking-widest">Self-serve, instant price</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li className="flex items-start gap-2"><Dot /> Known spec (tier, thickness, dimensions)</li>
              <li className="flex items-start gap-2"><Dot /> Repeat patterns you order regularly</li>
              <li className="flex items-start gap-2"><Dot /> Urgent jobs where email would slow you down</li>
              <li className="flex items-start gap-2"><Dot /> You want a live price to sign off internally</li>
            </ul>
            <a
              href={site.configuratorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              Open configurator
            </a>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-card border-l-4 border-brand-blue">
            <h3 className="text-lg font-semibold text-ink">Talk to us</h3>
            <p className="mt-1 text-sm text-ink-muted uppercase tracking-widest">A human quote by email</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              <li className="flex items-start gap-2"><Dot /> Custom substrates or unusual specs</li>
              <li className="flex items-start gap-2"><Dot /> Large jobs where volume pricing matters</li>
              <li className="flex items-start gap-2"><Dot /> First-time job, you want advice on plate choice</li>
              <li className="flex items-start gap-2"><Dot /> Anything Studio (mock-ups, renders, digital)</li>
            </ul>
            <Link href="/contact" className="btn-dark mt-6 inline-flex">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />;
}
