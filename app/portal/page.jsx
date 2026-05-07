import { site } from "@/lib/site";

export const metadata = {
  title: "Client Portal",
  description: "Sign in to the Flexo Africa management information system.",
};

export default function PortalPage() {
  return (
    <section className="min-h-[70vh] flex items-center bg-surface-subtle">
      <div className="container-x py-16">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 shadow-card text-center">
          <span className="eyebrow">Staff portal</span>
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Sign in to the Flexo Africa MIS
          </h1>
          <p className="mt-4 text-ink-muted">
            Internal job tracking system for the Flexo Africa team.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={site.misUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Sign In
            </a>
            <a
              href={`${site.misUrl}/forgot-password`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted hover:text-ink underline-offset-4 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <div className="mt-10 rounded-md bg-surface-subtle px-4 py-3 text-xs text-ink-muted">
            Customer access coming soon. <a href="/contact" className="text-accent font-semibold underline-offset-4 hover:underline">Contact us</a> if you'd like to discuss visibility into your jobs.
          </div>
        </div>
      </div>
    </section>
  );
}
