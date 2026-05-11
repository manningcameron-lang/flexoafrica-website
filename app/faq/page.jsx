import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description: `Common questions about ${site.name}: turnaround, substrates, quotes, quality control, delivery, payment.`,
};

const faqs = [
  {
    q: "What's your typical turnaround time?",
    a: "Standard turnaround is 3 to 5 working days from artwork sign-off to dispatch. Urgent jobs are accommodated where possible. We'll give you a realistic timeline up front for your specific job.",
  },
  {
    q: "What substrates do you supply plates for?",
    a: "All of them. Films, foils, corrugated, labels and tags, folding cartons, paper and board, and specialist substrates. Over 20 years of experience across the full range.",
  },
  {
    q: "How do I send my artwork?",
    a: "Email your files to sales@flexoafrica.com or send via WhatsApp. We accept the usual print-ready formats (PDF, AI, EPS, TIFF). If your file is too large, we'll set up a secure transfer.",
  },
  {
    q: "How do I get a quote?",
    a: "WhatsApp us, email sales@flexoafrica.com, or use the Contact page. Tell us about the substrate, run length, plate size, and deadline. We'll come back to you within one business day.",
  },
  {
    q: "How do you handle quality control?",
    a: "Every plate runs through a structured QC checklist before dispatch: artwork resolution, bleed and trim, colour separations, plate thickness against spec, surface inspection, dispatch packaging, and a final sign-off. Nothing leaves us until it's checked.",
  },
  {
    q: "Where do you deliver?",
    a: "We're based in Durban, KwaZulu-Natal, and deliver to printers across South Africa. From Cape Town to Johannesburg and everywhere in between.",
  },
  {
    q: "How will I track my job?",
    a: "Our Client Portal is launching soon. It will give you real-time visibility on every stage of your job, from artwork through QC, plate-making, and delivery. Register your interest on the Client Portal page to be notified when it goes live.",
  },
  {
    q: "What payment terms do you offer?",
    a: "Standard 30-day terms for established customers. New customers may be asked for payment up front or partial payment on the first job. Get in touch to discuss your specific situation.",
  },
  {
    q: "Are you Flexo Africa (Pty) Ltd?",
    a: "Yes. We were established in 2024, building on over 20 years of combined experience in the flexographic industry. The business is based in Durban, KZN.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-surface-subtle border-b border-ink/10">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow">FAQ</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink max-w-3xl">
            Common questions, answered.
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl">
            Quick answers to the things printers ask us most. If you don't see your
            question here,{" "}
            <Link href="/contact" className="text-accent font-semibold underline-offset-4 hover:underline">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <dl className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white shadow-card">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group p-6 sm:p-8 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                  <dt className="text-base sm:text-lg font-semibold text-ink">{item.q}</dt>
                  <span className="mt-1 flex-none rounded-full bg-accent/10 p-1 text-accent transition-transform group-open:rotate-45">
                    <PlusIcon />
                  </span>
                </summary>
                <dd className="mt-4 text-ink-muted leading-relaxed">{item.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="rounded-2xl bg-ink text-white p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-white/80 max-w-xl">
                WhatsApp us, send an email, or fill in the contact form. We'll come back
                to you within one business day.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={site.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap"
              >
                WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlusIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
    </svg>
  );
}
