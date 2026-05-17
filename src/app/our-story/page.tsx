import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover the heritage of Winter Harbor Red Lobster — three generations of Maine lobstermen and coastal tradition.",
};

const milestones = [
  {
    year: "1952",
    title: "The First Trap",
    text: "Captain Elias Whitmore sets his first trap in Winter Harbor, beginning a family legacy on these waters.",
  },
  {
    year: "1987",
    title: "Harbor Expansion",
    text: "Our dock grows to welcome a small fleet of independent boats, all committed to sustainable harvest.",
  },
  {
    year: "2015",
    title: "Nationwide Delivery",
    text: "We begin shipping our finest red lobster to homes and restaurants across America.",
  },
  {
    year: "Today",
    title: "A Living Tradition",
    text: "Third-generation lobstermen continue the craft — wild, traceable, and unmistakably Maine.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage & Heart"
        title="Our Story"
        subtitle="Three generations of Winter Harbor families, one unwavering commitment to the finest wild-caught red lobster."
        image={images.story}
      />

      {/* Pull quote */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-gold/40" />
              <div className="h-[5px] w-[5px] rotate-45 bg-gold/60" />
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <p className="font-display text-3xl font-light italic leading-relaxed text-harbor-cream md:text-4xl">
              In Winter Harbor, the lobster isn&apos;t merely a catch —
              it&apos;s a way of life passed from grandfather to father to son.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Image + text */}
      <section className="border-y border-white/5 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 h-full w-full border border-gold/12" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={images.dock}
                    alt="Winter Harbor dock at sunrise"
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold/75">
                  Rooted in Maine
                </p>
                <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-white md:text-5xl">
                  Where the Atlantic
                  <br />
                  <span className="italic text-gold/90">Meets Tradition</span>
                </h2>
                <div className="my-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-gold" />
                  <div className="h-[5px] w-[5px] rotate-45 bg-gold/80" />
                </div>
                <p className="text-sm leading-loose text-white/60">
                  Nestled on the Schoodic Peninsula, Winter Harbor has long been
                  home to some of Maine&apos;s most skilled lobstermen. Our
                  waters run cold and deep — the perfect conditions for the
                  vibrant red lobster prized by chefs and connoisseurs alike.
                </p>
                <p className="mt-5 text-sm leading-loose text-white/60">
                  We built Winter Harbor Red Lobster to share that excellence
                  beyond our harbor — without losing the warmth, authenticity,
                  and personal connection that define our community.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-harbor-charcoal/20 py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/75">
              Timeline
            </p>
            <h2 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
              Generations of Excellence
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-3xl space-y-0">
            {milestones.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div className="group relative flex gap-10 py-10 border-l border-gold/20 pl-10 hover:border-gold/40 transition-colors duration-500">
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-10 h-[9px] w-[9px] rotate-45 border border-gold/50 bg-harbor-dark transition-all duration-500 group-hover:bg-gold/20 group-hover:border-gold" />

                  <span className="font-display text-3xl font-light text-gold/70 shrink-0 w-20 transition-colors duration-500 group-hover:text-gold">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-loose text-white/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold/30" />
              <div className="h-[5px] w-[5px] rotate-45 bg-gold/50" />
              <div className="h-px w-12 bg-gold/30" />
            </div>
            <h2 className="font-display text-4xl font-light text-white md:text-5xl">
              Taste the Heritage
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55">
              Experience wild-caught Maine red lobster — selected, packed, and
              delivered with the care only Winter Harbor can provide.
            </p>
            <div className="mt-10">
              <Button href="/shop" variant="secondary" showArrow>
                Explore the Shop
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
