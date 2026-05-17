import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { images } from "@/lib/images";

export function StorySection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      {/* Warm tinted overlay across section */}
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy/[0.07] via-transparent to-harbor-dark" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-28">
          {/* Text content */}
          <FadeIn direction="right">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.45em] text-gold/75">
              Our Story
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-6xl">
              The Lobstermen
              <br />
              <span className="italic text-gold/90">of Winter Harbor</span>
            </h2>

            {/* Ornamental divider */}
            <div className="my-8 flex items-center gap-3">
              <div className="h-px w-12 bg-gold" />
              <div className="h-[5px] w-[5px] rotate-45 bg-gold/80" />
            </div>

            {/* Blockquote */}
            <blockquote className="relative pl-7">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
              <p className="font-display text-2xl font-light italic leading-relaxed text-harbor-cream md:text-3xl">
                &ldquo;The sea gives us everything. We take only what&apos;s
                right, and we bring it home with pride — that&apos;s the Winter
                Harbor way.&rdquo;
              </p>
              <footer className="mt-7 flex items-center gap-4">
                <div className="h-px w-8 bg-gold/40" />
                <cite className="text-[10px] not-italic uppercase tracking-[0.3em] text-white/40">
                  Captain James Whitmore, Third Generation
                </cite>
              </footer>
            </blockquote>

            <p className="mt-8 text-sm leading-loose text-white/55">
              For over seventy years, families in Winter Harbor have hauled
              traps from these waters. We honor that legacy by connecting you
              directly to the men and women who know every cove, every tide, and
              every lobster by name.
            </p>

            <div className="mt-10">
              <Button href="/our-story" variant="primary" showArrow>
                Read Our Story
              </Button>
            </div>
          </FadeIn>

          {/* Image with decorative border */}
          <FadeIn direction="left" delay={0.15}>
            <div className="relative">
              <div className="absolute -bottom-5 -left-5 h-full w-full border border-gold/12" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.fisherman}
                  alt="Maine lobsterman at work"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-harbor-dark/50 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/8" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
