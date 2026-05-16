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
    icon: Sunrise,
    title: "Dawn on the Water",
    text: "Before first light, our fleet departs Winter Harbor. Captains read the tide charts and head to grounds they've known for decades.",
  },
  {
    icon: Anchor,
    title: "Trap to Boat",
    text: "Each trap is hauled by hand. Only lobsters meeting strict size and quality standards are selected — the rest return to the sea.",
  },
  {
    icon: Fish,
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

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="A Day on the Atlantic"
            description="Every lobster tells a story of cold water, careful hands, and respect for the sea."
          />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.12}>
                <article className="text-center">
                  <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center border border-gold/30 bg-gold/5">
                    <step.icon
                      className="text-gold"
                      size={28}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs uppercase tracking-[0.25em] text-burgundy">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {step.text}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={images.boat}
                  alt="Lobster boat on Maine waters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Sustainability
                </p>
                <h2 className="mt-4 font-display text-3xl text-white md:text-4xl">
                  Guardians of the Gulf
                </h2>
                <div className="gold-line my-8" />
                <p className="text-sm leading-relaxed text-white/65">
                  Maine&apos;s lobster fishery is among the world&apos;s most
                  carefully managed. We follow v-notching programs, size limits,
                  and seasonal protections — ensuring healthy stocks for
                  generations to come.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-white/65">
                  When you choose Winter Harbor Red, you support independent
                  fishermen who treat the ocean not as a resource to exhaust,
                  but as a partner to respect.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Bring the Harvest Home
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-white/60">
              Order today and taste the difference of true wild-caught Maine red
              lobster.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/shop" variant="secondary">
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
