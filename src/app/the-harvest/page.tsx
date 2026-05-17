import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { Sunrise, Anchor, Fish } from "lucide-react";

export const metadata: Metadata = {
  title: "The Harvest",
  description:
    "Follow the journey from trap to table — how Winter Harbor Red Lobster is sustainably wild-caught and delivered.",
};

const steps = [
  {
    Icon: Sunrise,
    title: "Dawn on the Water",
    text: "Before first light, our fleet departs Winter Harbor. Captains read the tide charts and head to grounds they've known for decades.",
  },
  {
    Icon: Anchor,
    title: "Trap to Boat",
    text: "Each trap is hauled by hand. Only lobsters meeting strict size and quality standards are selected — the rest return to the sea.",
  },
  {
    Icon: Fish,
    title: "Harbor to Your Table",
    text: "Within hours, selected lobster is graded, packed, and shipped cold — preserving the sweet, firm flesh that defines Maine red.",
  },
];

export default function TheHarvestPage() {
  return (
    <>
      <PageHero
        eyebrow="From Trap to Table"
        title="The Harvest"
        subtitle="Witness the journey of wild-caught Maine red lobster — sustainable, traceable, and handled with generations of expertise."
        image={images.harvest}
      />

      {/* Process steps */}
      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="A Day on the Atlantic"
            description="Every lobster tells a story of cold water, careful hands, and respect for the sea."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.12}>
                <article className="group relative overflow-hidden border border-white/8 bg-harbor-charcoal/30 p-10 text-center transition-all duration-500 hover:border-gold/25">
                  {/* Step number */}
                  <p className="mb-8 font-display text-6xl font-light text-white/5 transition-colors duration-500 group-hover:text-gold/8">
                    0{index + 1}
                  </p>
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-gold/25 bg-gold/5 transition-all duration-500 group-hover:border-gold/50 group-hover:bg-gold/10">
                    <step.Icon
                      className="text-gold transition-transform duration-500 group-hover:scale-110"
                      size={22}
                      strokeWidth={1.25}
                    />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.35em] text-burgundy-light">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-light text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-loose text-white/55">
                    {step.text}
                  </p>
                  {/* Bottom accent */}
                  <div className="mx-auto mt-8 h-px w-0 bg-gold/40 transition-all duration-600 group-hover:w-16" />
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability image + text */}
      <section className="border-y border-white/5 py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -bottom-5 -right-5 h-full w-full border border-gold/12" />
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={images.boat}
                    alt="Lobster boat on Maine waters"
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
                  Sustainability
                </p>
                <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] text-white md:text-5xl">
                  Guardians of
                  <br />
                  <span className="italic text-gold/90">the Gulf</span>
                </h2>
                <div className="my-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-gold" />
                  <div className="h-[5px] w-[5px] rotate-45 bg-gold/80" />
                </div>
                <p className="text-sm leading-loose text-white/60">
                  Maine&apos;s lobster fishery is among the world&apos;s most
                  carefully managed. We follow v-notching programs, size limits,
                  and seasonal protections — ensuring healthy stocks for
                  generations to come.
                </p>
                <p className="mt-5 text-sm leading-loose text-white/60">
                  When you choose Winter Harbor Red, you support independent
                  fishermen who treat the ocean not as a resource to exhaust,
                  but as a partner to respect.
                </p>
              </div>
            </FadeIn>
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
              Bring the Harvest Home
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/55">
              Order today and taste the difference of true wild-caught Maine red
              lobster.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/shop" variant="secondary" showArrow>
                Shop Now
              </Button>
              <Button href="/our-story" variant="outline">
                Our Story
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
