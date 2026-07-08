import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "About",
  description: `Learn about ${site.name}, a flexographic plate broker based in Durban, KwaZulu-Natal.`,
};

export default function AboutPage() {
  const a = site.contact.address;
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A plate broker built for printers."
        subtitle={`${site.name} is a flexographic plate brokerage based in Durban, KwaZulu-Natal, serving printers across South Africa.`}
      />

      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 text-2xl font-bold text-ink">Why we started</h2>
          </div>
          <div className="md:col-span-2 prose prose-lg max-w-none">
            <p className="text-ink-muted leading-relaxed text-lg">{site.story}</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface-subtle">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="eyebrow">Experience</span>
            <h2 className="mt-3 text-2xl font-bold text-ink">{site.yearsExperience} years across all substrates</h2>
          </div>
          <div className="md:col-span-2 text-ink-muted text-lg leading-relaxed">
            <p>
              Although Flexo Africa was established in {site.founded}, our team brings over
              two decades of hands-on flexographic experience across every substrate
              you'll find on a press floor. From films and foils to corrugated and
              labels, we've helped printers ship work on all of it.
            </p>
            <p className="mt-4">
              That depth shapes how we work. We know which plate suits which job, where
              QC matters most, and how to flag problems before they reach your press.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="eyebrow">Where we plate</span>
            <h2 className="mt-3 text-2xl font-bold text-ink">Based in Durban, KZN</h2>
          </div>
          <div className="md:col-span-2 text-ink-muted">
            <p>
              Our team is based in Durban, KwaZulu-Natal. We can produce plates in{" "}
              {site.serviceLocations.southAfrica.join(", ")}.
            </p>
            <p className="mt-4">
              Also plating in {site.serviceLocations.international.join(", ")}.
            </p>
            <address className="not-italic mt-4 text-ink">
              {a.city}, {a.province}, {a.country}
            </address>
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to work with us?"
        subtitle="Tell us about your printing operation and we'll come back with a quote."
        primaryLabel="Get a Quote"
      />
    </>
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
