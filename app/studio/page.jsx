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

/* ─── Mockups ─────────────────────────────────────────────────────────────── */

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
        <StudioImage
          src="https://images.unsplash.com/photo-1585221330389-24fb30535ec7?fm=jpg&q=80&w=1200&auto=format&fit=crop"
          alt="Clean product packaging mock-up on a white surface"
        />
      </div>
    </section>
  );
}

/* ─── 3D Renderings ───────────────────────────────────────────────────────── */

function RenderingsSection() {
  return (
    <section className="section bg-surface-subtle">
      <div className="container-x grid gap-12 md:grid-cols-2 items-center">
        <StudioImage
          src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?fm=jpg&q=80&w=1200&auto=format&fit=crop"
          alt="Photo-realistic 3D render of a cardboard packaging box"
          className="order-last md:order-first"
        />
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

/* ─── Short Digital Runs ──────────────────────────────────────────────────── */

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
        <StudioImage
          src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?fm=jpg&q=80&w=1200&auto=format&fit=crop"
          alt="Industrial digital printing machine in operation"
        />
      </div>
    </section>
  );
}

/* ─── Shared image component ──────────────────────────────────────────────── */

function StudioImage({ src, alt, className = "" }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden aspect-[4/3] bg-surface-subtle ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Page header ─────────────────────────────────────────────────────────── */

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
