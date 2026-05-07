import { site } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata = {
  title: "About",
  description: `Learn about ${site.name}, a flexographic plate broker based in Assagay, KwaZulu-Natal.`,
};

export default function AboutPage() {
  const a = site.contact.address;
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A plate broker built for printers."
        subtitle={`${site.name} is a flexographic plate brokerage based in Assagay, KwaZulu-Natal, serving printers across South Africa.`}
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
            <span className="eyebrow">Our suppliers</span>
            <h2 className="mt-3 text-2xl font-bold text-ink">Direct relationships</h2>
            <p className="mt-3 text-ink-muted text-sm">
              We partner directly with two of South Africa's best-known flexographic plate
              manufacturers. That means consistent quality and reliable lead times.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
            {site.suppliers.map((s) => (
              <div key={s.name} className="rounded-xl bg-white p-8 shadow-card">
                <h3 className="text-xl font-semibold text-ink">{s.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="eyebrow">Where we are</span>
            <h2 className="mt-3 text-2xl font-bold text-ink">Based in Assagay, KZN</h2>
          </div>
          <div className="md:col-span-2 text-ink-muted">
            <p>
              Our team is based in Assagay, KwaZulu-Natal, between Hillcrest and Cato Ridge.
              We deliver plates to printers across South Africa.
            </p>
            <address className="not-italic mt-4 text-ink">
              {a.line1 !== "TBD" && <>{a.line1}<br /></>}
              {a.line2}, {a.city}<br />
              {a.province}, {a.country}
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
