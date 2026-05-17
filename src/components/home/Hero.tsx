"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={images.hero}
          alt="Premium wild-caught Maine red lobster"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays for warmth and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-harbor-dark/85 via-harbor-dark/50 to-harbor-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-harbor-dark/50 via-transparent to-harbor-dark/20" />
      <div className="absolute inset-0 bg-burgundy/[0.14]" />

      {/* Decorative corner brackets */}
      <div className="pointer-events-none absolute inset-10 hidden lg:block">
        <div className="absolute left-0 top-0 h-16 w-16 border-l border-t border-gold/25" />
        <div className="absolute right-0 top-0 h-16 w-16 border-r border-t border-gold/25" />
        <div className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-gold/25" />
        <div className="absolute bottom-0 right-0 h-16 w-16 border-b border-r border-gold/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 text-center lg:px-8">
        {/* Eyebrow with decorative lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-5"
        >
          <div className="h-px w-14 bg-gold/50" />
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-gold">
            Winter Harbor, Maine · Est. 1952
          </p>
          <div className="h-px w-14 bg-gold/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.38 }}
          className="font-display text-5xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[7rem]"
        >
          The Finest
          <br />
          <span className="italic text-gold">Wild-Caught</span>
          <br />
          Maine Red Lobster
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-20 bg-gold/35" />
          <div className="h-[5px] w-[5px] rotate-45 bg-gold/70" />
          <div className="h-px w-20 bg-gold/35" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mx-auto mt-8 max-w-xl text-base leading-loose text-white/70 md:text-[1.05rem]"
        >
          From the cold Atlantic waters of Winter Harbor — vibrant, sweet, and
          unmistakably wild. A heritage of coastal excellence, delivered with
          care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/shop" variant="secondary">
            Shop the Collection
          </Button>
          <Button href="/our-story" variant="outline">
            Discover Our Story
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator — line pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[8px] uppercase tracking-[0.45em] text-white/25">
          Scroll
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-white/15">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1/2 w-full bg-gradient-to-b from-transparent via-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
