"use client";

import { motion } from "framer-motion";

const items = [
  "Wild-Caught",
  "Sustainably Harvested",
  "Winter Harbor, Maine",
  "Est. 1952",
  "Never Farmed",
  "Direct from Harbor",
  "Overnight Delivered",
  "Third-Generation Fishermen",
];

const Diamond = () => (
  <span className="mx-2 inline-block h-[5px] w-[5px] rotate-45 bg-gold/40" />
);

export function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center">
      <span>{item}</span>
      <Diamond />
    </span>
  ));

  return (
    <div className="overflow-hidden border-y border-white/5 bg-burgundy/[0.07] py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex w-max"
      >
        <div className="flex items-center gap-0 text-[9px] font-medium uppercase tracking-[0.4em] text-gold/55">
          {content}
        </div>
        <div
          aria-hidden
          className="flex items-center gap-0 text-[9px] font-medium uppercase tracking-[0.4em] text-gold/55"
        >
          {content}
        </div>
      </motion.div>
    </div>
  );
}
