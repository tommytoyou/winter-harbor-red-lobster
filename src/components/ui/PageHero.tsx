"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
}

export function PageHero({ title, subtitle, image, eyebrow }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[55vh] items-end overflow-hidden md:min-h-[65vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-harbor-dark via-harbor-dark/55 to-harbor-dark/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-harbor-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-burgundy/[0.10]" />

      {/* Decorative corner lines */}
      <div className="pointer-events-none absolute inset-8 hidden lg:block">
        <div className="absolute left-0 top-0 h-12 w-12 border-l border-t border-gold/20" />
        <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-gold/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 lg:px-8 lg:pb-28">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-gold/50" />
            <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-gold">
              {eyebrow}
            </p>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="font-display text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
