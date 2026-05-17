"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Anchor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-harbor-dark/95 py-4 shadow-lg shadow-black/30 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent py-7"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand mark */}
        <Link href="/" className="group flex items-center gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-gold/40 transition-all duration-500 group-hover:border-gold/80 group-hover:bg-gold/5">
            <Anchor
              size={15}
              strokeWidth={1.25}
              className="text-gold transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="leading-none">
            <span className="block font-display text-[13px] font-normal tracking-[0.35em] uppercase text-white transition-colors duration-300 group-hover:text-gold/90">
              Winter Harbor
            </span>
            <span className="mt-0.5 block text-[9px] tracking-[0.5em] text-gold/60 uppercase font-sans">
              Red Lobster · Est. 1952
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group/link relative text-[10px] uppercase tracking-[0.25em] text-white/65 transition-colors duration-300 hover:text-gold"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-400 group-hover/link:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/shop" variant="secondary">
            Inquire Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-8 w-8 items-center justify-center text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col bg-harbor-dark lg:hidden"
          >
            {/* Top border accent */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
              {/* Logo in drawer */}
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-gold/30">
                  <Anchor size={16} strokeWidth={1.25} className="text-gold" />
                </div>
                <div className="leading-none">
                  <span className="block font-display text-sm tracking-[0.35em] uppercase text-white">
                    Winter Harbor
                  </span>
                  <span className="mt-0.5 block text-[9px] tracking-[0.5em] text-gold/60 uppercase font-sans">
                    Red Lobster · Est. 1952
                  </span>
                </div>
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-3xl font-light text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-12"
              >
                <Link
                  href="/shop"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center bg-gold px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-harbor-dark transition-all hover:bg-gold/90"
                >
                  Inquire Now
                </Link>
              </motion.div>
            </div>

            {/* Bottom accent */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
