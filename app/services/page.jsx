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
      <Substrates />
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
            With over 20 years of experience across all substrates, we recommend the right
            plate for the work, not the easiest one to source.
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

function Substrates() {
  const items = [
    "Films and foils",
    "Corrugated",
    "Labels and tags",
    "Folding cartons",
    "Paper and board",
    "Specialist substrates",
  ];
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Substrates we cover</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Every substrate you'll find on a press.</h2>
          <p className="mt-3 text-ink-muted">
            We've worked across the full range of flexographic substrates over the years.
            If it prints, we've sourced plates for it.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-md bg-white px-5 py-4 shadow-card"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-sm font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
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
            checklist drives the For Checking stage in our Client Portal, so nothing slips
            through.
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
                <Link
                  href="/portal"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Notify me when it launches
                  <ArrowIcon />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-ink/10 bg-surface-subtle p-6 text-sm text-ink-muted">
          <strong className="text-ink">Want real-time visibility on your jobs?</strong>{" "}
          Our Client Portal is launching soon.{" "}
          <Link href="/portal" className="text-accent font-semibold underline-offset-4 hover:underline">
            Register your interest
          </Link>{" "}
          to be notified.
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
