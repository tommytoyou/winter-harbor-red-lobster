"use client";

import {
  Award,
  Flame,
  Leaf,
  MapPin,
  Truck,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { highlights } from "@/lib/products";

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  leaf: Leaf,
  "map-pin": MapPin,
  waves: Waves,
  award: Award,
  truck: Truck,
};

export function WhyWinterHarbor() {
  return (
    <section className="relative border-y border-white/5 bg-harbor-charcoal/30 py-28 md:py-40">
      {/* Subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Winter Harbor Red"
          description="Our red lobster is distinguished by the cold Atlantic, wild diet, and the hands that bring it from trap to table."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            const num = String(index + 1).padStart(2, "0");
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="group relative overflow-hidden border border-white/8 bg-harbor-dark/60 p-8 transition-all duration-600 hover:border-gold/25 hover:bg-harbor-dark/90">
                  {/* Radial glow on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-600 group-hover:opacity-100">
                    <div className="absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gold/5 blur-2xl" />
                  </div>

                  {/* Number accent */}
                  <p className="mb-5 font-display text-5xl font-light text-white/6 transition-colors duration-500 group-hover:text-gold/10">
                    {num}
                  </p>

                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-burgundy/35 bg-burgundy/8 transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/8">
                    <Icon
                      className="text-gold transition-transform duration-500 group-hover:scale-110"
                      size={20}
                      strokeWidth={1.25}
                    />
                  </div>

                  <h3 className="font-display text-xl font-light text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-px w-0 bg-gold/50 transition-all duration-600 group-hover:w-12" />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
