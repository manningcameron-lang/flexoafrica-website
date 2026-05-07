import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Phone, email, address and contact form.`,
};

export default function ContactPage() {
  const a = site.contact.address;
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapsQuery)}&output=embed`;

  return (
    <>
      <section className="bg-surface-subtle border-b border-ink/10">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink max-w-3xl">
            Get in touch.
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl">
            Tell us about your job and we'll come back with a quote within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Phone
              </h3>
              <p className="mt-2 text-lg text-ink">{site.contact.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Email
              </h3>
              <p className="mt-2 text-lg text-ink break-all">{site.contact.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Address
              </h3>
              <address className="mt-2 not-italic text-ink">
                {a.line1 !== "TBD" && <>{a.line1}<br /></>}
                {a.line2}, {a.city}<br />
                {a.province}, {a.country}
              </address>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Hours
              </h3>
              <p className="mt-2 text-ink">{site.contact.hours}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-surface-subtle">
        <div className="container-x">
          <span className="eyebrow">Find us</span>
          <h2 className="mt-3 text-3xl font-bold text-ink">Assagay, KwaZulu-Natal</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-ink/10 bg-white">
            <iframe
              title="Flexo Africa location map"
              src={mapsSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="rounded-2xl bg-ink text-white p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Already a customer?</h3>
              <p className="mt-2 text-white/80 max-w-xl">
                Sign in to your portal to track your jobs in real time.
              </p>
            </div>
            <a
              href={site.misUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Sign In to MIS
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
