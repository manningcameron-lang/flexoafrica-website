import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const loc = site.serviceLocations;

  return (
    <footer className="bg-ink text-white mt-20">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg p-3 inline-block">
            <img
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width="120"
              height="40"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">{site.tagline}</p>
        </div>

        {/* Site */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Site</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="text-white/80 hover:text-white">Home</Link></li>
            <li><Link href="/about" className="text-white/80 hover:text-white">About</Link></li>
            <li><Link href="/services" className="text-white/80 hover:text-white">Services</Link></li>
            <li><Link href="/studio" className="text-white/80 hover:text-white">Studio</Link></li>
            <li><Link href="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            <li><Link href="/policies" className="text-white/80 hover:text-white">Policies</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Products</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/tools" className="text-white/80 hover:text-white">
                Prepress Tools
              </Link>
            </li>
            <li>
              <Link href="/order-plates" className="text-white/80 hover:text-white">
                Order Plates
              </Link>
            </li>
            <li>
              <a
                href={site.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Client Portal
              </a>
            </li>
            <li>
              <a
                href={site.toolsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white"
              >
                Tools sign in
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={`tel:${site.contact.phoneTel}`} className="hover:text-white">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={site.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp: {site.contact.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                {site.contact.email}
              </a>
            </li>
            <li className="text-white/70 pt-2">{site.contact.hours}</li>
            <li className="pt-2 text-white/70">
              {loc.southAfrica.join(" · ")}
            </li>
            <li className="text-white/70">
              {loc.international.join(" · ")}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-2">
          <p>&copy; {year} {site.legalName}. Established {site.founded}.</p>
          <p>Built with care in KwaZulu-Natal.</p>
        </div>
      </div>
    </footer>
  );
}
