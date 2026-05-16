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

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <p className="font-display text-2xl font-light leading-relaxed text-harbor-cream md:text-3xl">
              In Winter Harbor, the lobster isn&apos;t merely a catch — it&apos;s
              a way of life passed from grandfather to father to son.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.dock}
                  alt="Winter Harbor dock at sunrise"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Rooted in Maine
                </p>
                <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                  Where the Atlantic Meets Tradition
                </h2>
                <div className="gold-line my-8" />
                <p className="text-sm leading-relaxed text-white/65">
                  Nestled on the Schoodic Peninsula, Winter Harbor has long
                  been home to some of Maine&apos;s most skilled lobstermen. Our
                  waters run cold and deep — the perfect conditions for the
                  vibrant red lobster prized by chefs and connoisseurs alike.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/65">
                  We built Winter Harbor Red Lobster to share that excellence
                  beyond our harbor — without losing the warmth, authenticity,
                  and personal connection that define our community.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-harbor-cream/[0.02] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Timeline
            </p>
            <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
              Generations of Excellence
            </h2>
          </FadeIn>

          <div className="mx-auto max-w-3xl space-y-12">
            {milestones.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div className="flex gap-8 border-l border-gold/30 pl-8">
                  <span className="font-display text-2xl text-gold">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Taste the Heritage
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-white/60">
              Experience wild-caught Maine red lobster — selected, packed, and
              delivered with the care only Winter Harbor can provide.
            </p>
            <div className="mt-10">
              <Button href="/shop" variant="secondary">
                Explore the Shop
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
