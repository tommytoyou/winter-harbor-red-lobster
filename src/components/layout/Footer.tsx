import Link from "next/link";
import { Mail, MapPin, Phone, Anchor } from "lucide-react";
import { navLinks } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-harbor-dark">
      {/* Thin gold top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/30 transition-all duration-500 group-hover:border-gold/60 group-hover:bg-gold/5">
                <Anchor
                  size={15}
                  strokeWidth={1.25}
                  className="text-gold"
                />
              </div>
              <div className="leading-none">
                <span className="block font-display text-[13px] tracking-[0.35em] uppercase text-white">
                  Winter Harbor
                </span>
                <span className="mt-0.5 block text-[9px] tracking-[0.5em] text-gold/55 uppercase font-sans">
                  Red Lobster · Est. 1952
                </span>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-loose text-white/50">
              Premium wild-caught Maine red lobster from the pristine waters of
              Winter Harbor. Heritage, authenticity, and coastal luxury —
              delivered to your table.
            </p>

            {/* Tagline */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gold/40" />
              <p className="text-[9px] uppercase tracking-[0.35em] text-gold/50 italic font-display">
                Where the Atlantic Meets Excellence
              </p>
            </div>
          </div>

          {/* Nav column */}
          <div>
            <h3 className="mb-7 text-[9px] font-medium uppercase tracking-[0.35em] text-gold/70">
              Explore
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold/50 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-7 text-[9px] font-medium uppercase tracking-[0.35em] text-gold/70">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold/70" strokeWidth={1.5} />
                <span>Winter Harbor, Maine 04693</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-gold/70" strokeWidth={1.5} />
                <a href="tel:+12075550123" className="transition-colors hover:text-gold">
                  (207) 555-0123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-gold/70" strokeWidth={1.5} />
                <a
                  href="mailto:orders@winterharborlobster.com"
                  className="transition-colors hover:text-gold"
                >
                  orders@winterharborlobster.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-white/8 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-[10px] text-white/30 tracking-wide">
              © {year} Winter Harbor Red Lobster. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-5 bg-gold/20" />
              <p className="text-[10px] text-white/30 tracking-wide">
                Wild-caught · Sustainably harvested · Never farmed
              </p>
              <div className="h-px w-5 bg-gold/20" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
