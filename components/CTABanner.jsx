import Link from "next/link";

export default function CTABanner({
  title = "Ready to streamline your plate ordering?",
  subtitle = "Tell us about your job. We'll get back to you with a quote within one business day.",
  primaryHref = "/contact",
  primaryLabel = "Get a Quote",
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="rounded-2xl bg-ink text-white p-10 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h3>
            <p className="mt-2 text-white/80 max-w-xl">{subtitle}</p>
          </div>
          <Link href={primaryHref} className="btn-primary whitespace-nowrap">
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
