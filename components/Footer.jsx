import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const a = site.contact.address;

  return (
    <footer className="bg-ink text-white mt-20">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white text-sm">
              FA
            </span>
            <span>{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">{site.tagline}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Site
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white">About</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            <li><Link href="/portal" className="text-white/80 hover:text-white">Client Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{site.contact.phone}</li>
            <li>{site.contact.email}</li>
            <li className="text-white/70">{site.contact.hours}</li>
            <li className="pt-2 text-white/70">
              {a.line1}<br />
              {a.line2}, {a.city}<br />
              {a.province}, {a.country}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
            Customer portal
          </h4>
          <p className="mt-4 text-sm text-white/80">
            Track your jobs in real time on our management system.
          </p>
          <a
            href={site.misUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Sign In to MIS
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-2">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>Built with care in KwaZulu-Natal.</p>
        </div>
      </div>
    </footer>
  );
}
