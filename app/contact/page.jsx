import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Phone, WhatsApp, email and Durban-based contact details.`,
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
            Reach us by WhatsApp, email or phone, whichever suits you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard
              icon={<WhatsAppIcon />}
              eyebrow="Fastest"
              title="WhatsApp"
              detail={site.contact.whatsapp}
              ctaLabel="Open WhatsApp"
              href={site.contact.whatsappLink}
              external
              highlight
            />
            <ContactCard
              icon={<MailIcon />}
              eyebrow="For quotes"
              title="Email Sales"
              detail={site.contact.email}
              ctaLabel="Send an email"
              href={`mailto:${site.contact.email}?subject=Quote%20request`}
            />
            <ContactCard
              icon={<PhoneIcon />}
              eyebrow="Office"
              title="Phone"
              detail={site.contact.phone}
              ctaLabel="Call us"
              href={`tel:${site.contact.phoneTel}`}
            />
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 rounded-2xl border border-ink/10 bg-surface-subtle p-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Hours
              </h3>
              <p className="mt-2 text-ink">{site.contact.hours}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">
                Based in
              </h3>
              <p className="mt-2 text-ink">
                {a.city}, {a.province}, {a.country}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Delivering plates to printers across South Africa.
              </p>
            </div>
          </div>
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
                Sign in to your Client Portal to track your jobs in real time, from
                artwork to delivery.
              </p>
            </div>
            <a
              href={site.portalUrl}
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

function ContactCard({ icon, eyebrow, title, detail, ctaLabel, href, external, highlight }) {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <div
      className={`rounded-xl border p-8 shadow-card ${
        highlight ? "border-brand-green/30 bg-white" : "border-ink/10 bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
          {eyebrow}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-muted break-all">{detail}</p>
      <a
        href={href}
        {...linkProps}
        className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
          highlight ? "text-brand-green hover:underline" : "text-accent hover:underline"
        }`}
      >
        {ctaLabel} <ArrowIcon />
      </a>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-8 w-8 text-brand-green" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2C10.7 31.3 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.3c-2.5 0-4.9-.7-7-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.3 21 2.7 18.5 2.7 16 2.7 8.7 8.7 2.7 16 2.7S29.3 8.7 29.3 16 23.3 29.3 16 29.3zm7.7-9.9c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-.9.2-.3.4-1.1 1.4-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.2-1.1-2.1-2.5-2.3-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1c0 1.8 1.3 3.6 1.5 3.8.2.3 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
