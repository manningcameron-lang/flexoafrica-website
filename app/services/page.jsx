import Link from "next/link";
import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "Services",
  description:
    "Flexographic plate brokerage, quality control and quick turnaround for printers across South Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Plates sourced, checked, and delivered."
        subtitle="We broker the right plate for the job, run it through QC, and give you full visibility from artwork to delivery."
      />

      <Brokerage />
      <PlateRanges />
      <QualityControl />
      <Turnaround />
      <Process />
      <CTABanner primaryLabel="Request a Quote" />
    </>
  );
}

function Brokerage() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <span className="eyebrow">Plate brokerage</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">The right plate, every time.</h2>
        </div>
        <div className="md:col-span-2 text-ink-muted text-lg leading-relaxed">
          <p>
            Picking a flexographic plate isn't just about brand. The right thickness,
            durometer, and finish for the substrate and print run can make or break a job.
            We've spent years learning what works for which combinations, and we work with
            both Polyflex and Stallion so we're never tied to a single vendor.
          </p>
          <p className="mt-4">
            Send us your artwork and substrate. We'll come back with a recommendation
            and pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlateRanges() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Plate types</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Full ranges from both suppliers</h2>
          <p className="mt-3 text-ink-muted">
            We stock and supply the full range of plates from Polyflex and Stallion. If you
            don't see what you need, ask us. Custom and specialist sizes are available.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PlateCard title="Polyflex" items={site.plateRanges.polyflex} />
          <PlateCard title="Stallion" items={site.plateRanges.stallion} />
        </div>
      </div>
    </section>
  );
}

function PlateCard({ title, items }) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-card">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-muted">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QualityControl() {
  return (
    <section className="section">
      <div className="container-x grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <span className="eyebrow">Quality control</span>
          <h2 className="mt-3 text-2xl font-bold text-ink">Checked before it leaves us.</h2>
          <p className="mt-3 text-ink-muted text-sm">
            Every plate runs through a structured QC checklist before dispatch. The same
            checklist drives the For Checking stage in our MIS, so nothing slips through.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-2 sm:grid-cols-2">
          {site.qaChecklist.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-md bg-surface-subtle px-4 py-3">
              <CheckIcon />
              <span className="text-sm text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Turnaround() {
  return (
    <section className="section bg-ink text-white">
      <div className="container-x grid gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow text-accent">Turnaround</span>
          <h2 className="mt-3 text-3xl font-bold">Fast where it matters.</h2>
        </div>
        <div className="text-white/80 text-lg leading-relaxed">
          <p>
            Standard turnaround is 3 to 5 working days from artwork sign-off to dispatch.
            Urgent jobs are accommodated where possible. We'll tell you up front what's
            realistic for your specific job.
          </p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Our process</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">From artwork to your printer.</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.process.map((step) => (
            <div
              key={step.step}
              className={`rounded-xl p-8 ${
                step.highlight
                  ? "bg-brand-blue text-white shadow-cardHover"
                  : "bg-white border border-ink/10 shadow-card"
              }`}
            >
              <div className={`text-sm font-semibold ${step.highlight ? "text-white/80" : "text-accent"}`}>
                {step.step}
              </div>
              <h3 className={`mt-2 text-lg font-semibold ${step.highlight ? "text-white" : "text-ink"}`}>
                {step.title}
              </h3>
              <p className={`mt-2 text-sm ${step.highlight ? "text-white/90" : "text-ink-muted"}`}>
                {step.blurb}
              </p>
              {step.highlight && (
                <a
                  href={site.misUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Open the MIS
                  <ArrowIcon />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-ink/10 bg-surface-subtle p-6 text-sm text-ink-muted">
          <strong className="text-ink">Already a customer?</strong> Sign in to your portal at{" "}
          <a href={site.misUrl} className="text-accent font-semibold underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">
            jobs.flexoafrica.com
          </a>{" "}
          to track your jobs in real time.
        </div>
      </div>
    </section>
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
        {subtitle && <p className="mt-4 text-lg text-ink-muted max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-none text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 011.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
