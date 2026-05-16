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
    <section className="border-y border-white/5 bg-harbor-cream/[0.02] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Winter Harbor Red"
          description="Our red lobster is distinguished by the cold Atlantic, wild diet, and the hands that bring it from trap to table."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <article className="group luxury-border h-full bg-harbor-dark/50 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-harbor-dark/80">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center border border-burgundy/40 bg-burgundy/10 transition-colors group-hover:border-gold/50 group-hover:bg-gold/10">
                    <Icon
                      className="text-gold transition-transform duration-500 group-hover:scale-110"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
