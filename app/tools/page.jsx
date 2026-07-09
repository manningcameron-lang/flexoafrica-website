import Link from "next/link";
import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Prepress Tools for Flexo Studios",
  description:
    "Flexo Africa Prepress Tools: 15+ browser-based tools for ink coverage, step & repeat, barcode verification, preflight, and more. Start free.",
};

// JSON-LD for SoftwareApplication + tier Offers.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flexo Africa Prepress Tools",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (browser-based)",
  url: site.toolsUrl,
  provider: {
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
  },
  offers: [
    { "@type": "Offer", name: "Free",   price: "0",    priceCurrency: "ZAR", url: site.toolsSignupUrl },
    { "@type": "Offer", name: "Pro",    price: "899",  priceCurrency: "ZAR", url: site.toolsPricingUrl },
    { "@type": "Offer", name: "Studio", price: "2499", priceCurrency: "ZAR", url: site.toolsPricingUrl },
    {
      "@type": "Offer",
      name: "Enterprise",
      url: site.toolsPricingUrl,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "ZAR",
        minPrice: "7499",
        valueAddedTaxIncluded: false,
      },
    },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Prepress tools"
        title="Flexo prepress tools, in your browser."
        subtitle={`${site.toolsCount} purpose-built tools for ink coverage, step & repeat, preflight, barcode verification, and the rest of the daily studio grind. Start free.`}
        ctaLabel="Start free"
        ctaHref={site.toolsSignupUrl}
        ctaSecondaryLabel="See pricing"
        ctaSecondaryHref="#pricing"
      />

      <ToolGrid />
      <Personas />
      <Pricing />
      <ToolsFaq />

      <CTABanner
        title="Start with 3 free runs this month."
        subtitle="No card. No trial expiry. Upgrade when you're ready."
        primaryHref={site.toolsSignupUrl}
        primaryLabel="Start free"
      />
    </>
  );
}

/* ─── Tool grid ────────────────────────────────────────────────────────── */

function ToolGrid() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">The toolkit</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">
            Everything a flexo studio needs.
          </h2>
          <p className="mt-3 text-ink-muted">
            One login. {site.toolsCount} tools. No installers, no license servers,
            no waiting for IT to approve a plugin.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.tools.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-ink/10 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="flex items-start gap-4">
                <ToolIcon name={t.icon} />
                <div>
                  <h3 className="font-semibold text-ink">{t.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{t.blurb}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Personas ────────────────────────────────────────────────────────── */

function Personas() {
  const items = [
    {
      title: "Prepress operator",
      blurb: "Ink coverage, preflight, colour separations, and step & repeat without leaving the browser. Faster than firing up the workstation.",
    },
    {
      title: "Studio manager",
      blurb: "Team-wide access, job history, and priority support. Consistent output across every operator on the desk.",
    },
    {
      title: "Packaging brand",
      blurb: "Quick sanity checks on artwork before you send to print. Verify barcodes, check bleed, spot mistakes before they cost you.",
    },
  ];
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Built for</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Who uses the toolkit.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((p) => (
            <div key={p.title} className="rounded-xl bg-white p-6 shadow-card">
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{p.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing preview ─────────────────────────────────────────────────── */

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Simple plans, monthly.</h2>
          <p className="mt-3 text-ink-muted">
            All prepress tools are on every plan. Upgrade for more runs, team
            accounts, priority support, and custom enterprise plans.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.toolsTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-ink text-white shadow-cardHover"
                  : "bg-white border border-ink/10 shadow-card"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <h3 className={`text-lg font-semibold ${tier.highlight ? "text-white" : "text-ink"}`}>
                {tier.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-ink"}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ${tier.highlight ? "text-white/70" : "text-ink-muted"}`}>
                  {tier.cadence}
                </span>
              </div>
              <ul className={`mt-6 space-y-2 text-sm ${tier.highlight ? "text-white/90" : "text-ink"}`}>
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <TickIcon accent={!tier.highlight} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.highlight
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-ink text-white hover:bg-ink-soft"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.toolsPricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            See full feature comparison &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────── */

function ToolsFaq() {
  const items = [
    {
      q: "What counts as a run?",
      a: "Every time you generate a report, PDF, or output from a tool. Uploading files and browsing history is free.",
    },
    {
      q: "Can I cancel any time?",
      a: "Yes. Cancel from your account page. You keep access until the end of the paid period.",
    },
    {
      q: "Do my colleagues need their own account?",
      a: "Free and Pro plans are single-seat. Studio includes team accounts for up to 3 seats. Enterprise has unlimited seats plus SSO for larger teams.",
    },
    {
      q: "Do you offer annual pricing?",
      a: "Yes. Annual pricing is two months free. See the pricing page for the exact numbers.",
    },
  ];
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Common questions</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Before you sign up.</h2>
        </div>
        <dl className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white shadow-card">
          {items.map((f) => (
            <details key={f.q} className="group p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <dt className="text-base sm:text-lg font-semibold text-ink">{f.q}</dt>
                <span className="mt-1 flex-none rounded-full bg-accent/10 p-1 text-accent transition-transform group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>
              <dd className="mt-4 text-ink-muted leading-relaxed">{f.a}</dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ─── Page header ─────────────────────────────────────────────────────── */

function PageHeader({ eyebrow, title, subtitle, ctaLabel, ctaHref, ctaSecondaryLabel, ctaSecondaryHref }) {
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
        {(ctaLabel || ctaSecondaryLabel) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {ctaLabel && (
              <a
                href={ctaHref}
                target={ctaHref?.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-primary"
              >
                {ctaLabel}
              </a>
            )}
            {ctaSecondaryLabel && (
              <a href={ctaSecondaryHref} className="btn-secondary">
                {ctaSecondaryLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────── */

function TickIcon({ accent }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 flex-none ${accent ? "text-accent" : "text-white"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
    </svg>
  );
}

function ToolIcon({ name }) {
  // Simple SVG glyphs. Kept minimal on purpose. All accent-tinted.
  const cls = "h-10 w-10 flex-none text-accent";
  const svg = (paths) => (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      {paths}
    </svg>
  );
  switch (name) {
    case "droplet":  return svg(<path d="M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z" strokeLinecap="round" strokeLinejoin="round" />);
    case "droplet2": return svg(<><path d="M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 14a3 3 0 003 3" strokeLinecap="round" /></>);
    case "grid":     return svg(<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>);
    case "grid2":    return svg(<><rect x="3" y="3" width="18" height="6" rx="1" /><rect x="3" y="11" width="18" height="4" rx="1" /><rect x="3" y="17" width="18" height="4" rx="1" /></>);
    case "compare":  return svg(<><path d="M12 3v18" strokeLinecap="round" /><path d="M4 7l4-2v14l-4-2z" /><path d="M20 7l-4-2v14l4-2z" /></>);
    case "barcode":  return svg(<><path d="M4 5v14M7 5v14M9 5v14M12 5v14M14 5v10M17 5v14M20 5v14" strokeLinecap="round" /></>);
    case "swatch":   return svg(<><rect x="3" y="10" width="18" height="10" rx="1" /><path d="M6 10V6a1 1 0 011-1h4a1 1 0 011 1v4" /></>);
    case "palette":  return svg(<><path d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2s-.5-2 0-3 1.5-1 3-1c2.5 0 4-1.5 4-4a9 9 0 00-9-8z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="7.5" cy="10.5" r="1" fill="currentColor" /><circle cx="12" cy="7" r="1" fill="currentColor" /><circle cx="16" cy="10" r="1" fill="currentColor" /></>);
    case "shield":   return svg(<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></>);
    case "ruler":    return svg(<><path d="M3 15l12-12 6 6-12 12z" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 10l2 2M11 7l2 2M14 4l2 2" strokeLinecap="round" /></>);
    case "map":      return svg(<><path d="M9 4l6 2 6-2v14l-6 2-6-2-6 2V6l6-2z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 4v16M15 6v16" /></>);
    case "clipboard":return svg(<><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4h6v3H9z" /><path d="M9 11h6M9 15h4" strokeLinecap="round" /></>);
    case "channels": return svg(<><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" /><circle cx="8" cy="6" r="1.5" fill="currentColor" /><circle cx="14" cy="12" r="1.5" fill="currentColor" /><circle cx="10" cy="18" r="1.5" fill="currentColor" /></>);
    case "beaker":   return svg(<><path d="M9 3h6M10 3v6L5 20a1 1 0 001 1h12a1 1 0 001-1l-5-11V3" strokeLinecap="round" strokeLinejoin="round" /></>);
    case "gauge":    return svg(<><path d="M4 15a8 8 0 0116 0" strokeLinecap="round" /><path d="M12 15l4-4" strokeLinecap="round" /><circle cx="12" cy="15" r="1" fill="currentColor" /></>);
    default:         return svg(<circle cx="12" cy="12" r="8" />);
  }
}
