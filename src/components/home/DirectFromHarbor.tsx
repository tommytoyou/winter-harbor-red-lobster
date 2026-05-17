import Image from "next/image";
import { Anchor, Ship } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

const features = [
  {
    Icon: Ship,
    title: "Daily Catch",
    description:
      "Lobsters pulled from traps within hours of processing — never held, never compromised in quality.",
  },
  {
    Icon: Anchor,
    title: "Independent Fishermen",
    description:
      "We partner with a small fleet of family-owned boats — stewards of Maine waters for generations.",
  },
];

export function DirectFromHarbor() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
          {/* Image with offset border treatment */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Decorative offset border */}
              <div className="absolute -bottom-5 -right-5 h-full w-full border border-gold/15" />
              {/* Second border */}
              <div className="absolute -bottom-10 -right-10 h-full w-full border border-gold/7" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.harbor}
                  alt="Winter Harbor Maine coastline at dawn"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-harbor-dark/40 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="From Sea to Shore"
              title="Direct from Winter Harbor"
              description="Each morning, independent lobstermen return to our harbor with the day's catch — vibrant red shells glistening in the Atlantic mist. We select only the finest for our discerning clientele."
            />

            <FadeIn delay={0.25} direction="up">
              <ul className="space-y-8">
                {features.map(({ Icon, title, description }, i) => (
                  <li key={title} className="flex gap-6">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center border border-gold/25 bg-gold/5 transition-colors duration-500 hover:border-gold/50 hover:bg-gold/10">
                      <Icon className="text-gold" size={20} strokeWidth={1.25} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-light text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Stat accent */}
            <FadeIn delay={0.4} direction="up">
              <div className="mt-12 flex items-center gap-8 border-t border-white/8 pt-10">
                <div>
                  <p className="font-display text-4xl font-light text-gold">70+</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Years of Heritage
                  </p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="font-display text-4xl font-light text-gold">100%</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Wild-Caught
                  </p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="font-display text-4xl font-light text-gold">1–2</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    Day Delivery
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
