import Link from "next/link";
import { site } from "@/lib/site";

/**
 * SelfServeStrip
 * Two-card section on the homepage between WhatWeDo and WhyUs.
 * Left card: Prepress Tools subscription (tools.flexoafrica.com).
 * Right card: Order plates online (portal.flexoafrica.com).
 */
export default function SelfServeStrip() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Two more ways to work with us</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-ink">
            Self-serve tools and plate ordering.
          </h2>
          <p className="mt-3 text-ink-muted">
            Prefer to do it yourself? Use our prepress toolkit in your browser,
            or configure and order plates online with live ZAR pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card A — Prepress Tools */}
          <div className="relative rounded-xl bg-white p-8 shadow-card border-l-4 border-accent">
            <span className="eyebrow">Self-serve</span>
            <h3 className="mt-3 text-2xl font-bold text-ink">
              Prepress tools for flexo studios.
            </h3>
            <p className="mt-3 text-ink-muted">
              {site.toolsCount}+ tools for ink coverage, step &amp; repeat, barcode
              verification, preflight, and more. Runs in your browser. Start free.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li className="flex items-start gap-2"><Check /> From R0/mo, 3 free runs</li>
              <li className="flex items-start gap-2"><Check /> All {site.toolsCount} tools on every plan</li>
              <li className="flex items-start gap-2"><Check /> Used by South African converters</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tools" className="btn-primary">Explore Tools</Link>
              <a
                href={site.toolsSignupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Start free
              </a>
            </div>
          </div>

          {/* Card B — Order Plates Online */}
          <div className="relative rounded-xl bg-white p-8 shadow-card border-l-4 border-brand-blue">
            <span className="eyebrow">Self-serve</span>
            <h3 className="mt-3 text-2xl font-bold text-ink">
              Order plates online with live pricing.
            </h3>
            <p className="mt-3 text-ink-muted">
              Three plate tiers, fourteen specs. Live ZAR pricing in the
              configurator. Standard 48 to 72 hour turnaround, Express 24 to 36.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink">
              <li className="flex items-start gap-2"><Check /> Crystal, Surface Engineered, Standard</li>
              <li className="flex items-start gap-2"><Check /> Live order tracking end-to-end</li>
              <li className="flex items-start gap-2"><Check /> No login needed to see a price</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/order-plates" className="btn-dark">Order Plates</Link>
              <a
                href={site.configuratorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Configure a plate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-none text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}
