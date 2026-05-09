import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Phone, WhatsApp, email, address and contact form.`,
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
              <p className="mt-2 text-lg">
                <a
                  href={`tel:${site.contact.phoneTel}`}
                  className="text-ink hover:text-accent"
                >
                  {site.contact.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                WhatsApp
              </h3>
              <p className="mt-2 text-lg">
                <a
                  href={site.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink hover:text-brand-green"
                >
                  <WhatsAppIcon />
                  {site.contact.whatsapp}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Email
              </h3>
              <p className="mt-2 text-lg">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-ink hover:text-accent break-all"
                >
                  {site.contact.email}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Address
              </h3>
              <address className="mt-2 not-italic text-ink">
                {a.line1 !== "TBD" && <>{a.line1}<br /></>}
                {a.city}, {a.province}<br />
                {a.country}
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
          <h2 className="mt-3 text-3xl font-bold text-ink">Durban, KwaZulu-Natal</h2>
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
                Sign in to your Client Portal to track your jobs in real time.
              </p>
            </div>
            <a
              href={site.misUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Open Client Portal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand-green"
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2C10.7 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.3c-2.5 0-4.9-.7-7-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.3 21 2.7 18.5 2.7 16 2.7 8.7 8.7 2.7 16 2.7S29.3 8.7 29.3 16 23.3 29.3 16 29.3zm7.7-9.9c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-.9.2-.3.4-1.1 1.4-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.2-1.1-2.1-2.5-2.3-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1c0 1.8 1.3 3.6 1.5 3.8.2.3 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
    </svg>
  );
}
