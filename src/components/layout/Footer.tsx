import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-harbor-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl text-white">
              <span className="mr-2">🦞</span>
              Winter Harbor <span className="text-gold">Red Lobster</span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              Premium wild-caught Maine red lobster from the pristine waters of
              Winter Harbor. Heritage, authenticity, and coastal luxury —
              delivered to your table.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Winter Harbor, Maine 04693</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href="tel:+12075550123" className="hover:text-gold">
                  (207) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold" />
                <a
                  href="mailto:orders@winterharborlobster.com"
                  className="hover:text-gold"
                >
                  orders@winterharborlobster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {year} Winter Harbor Red Lobster. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Wild-caught · Sustainably harvested · Never farmed
          </p>
        </div>
      </div>
    </footer>
  );
}
