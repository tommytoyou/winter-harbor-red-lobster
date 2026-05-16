import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function StorySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-burgundy/5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn direction="right">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-light text-white md:text-4xl lg:text-5xl">
                The Lobstermen of Winter Harbor
              </h2>
              <div className="gold-line my-8" />
              <blockquote className="border-l-2 border-gold pl-6">
                <p className="font-display text-xl italic leading-relaxed text-harbor-cream md:text-2xl">
                  &ldquo;The sea gives us everything. We take only what&apos;s
                  right, and we bring it home with pride — that&apos;s the
                  Winter Harbor way.&rdquo;
                </p>
                <footer className="mt-6 text-sm text-white/50">
                  — Captain James Whitmore, Third Generation
                </footer>
              </blockquote>
              <p className="mt-8 text-sm leading-relaxed text-white/60">
                For over seventy years, families in Winter Harbor have hauled
                traps from these waters. We honor that legacy by connecting you
                directly to the men and women who know every cove, every tide,
                and every lobster by name.
              </p>
              <div className="mt-10">
                <Button href="/our-story" variant="primary">
                  Read Our Story
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.fisherman}
                alt="Maine lobsterman at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
