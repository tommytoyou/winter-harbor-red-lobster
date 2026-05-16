import Image from "next/image";
import { Anchor, Ship } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";

export function DirectFromHarbor() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.harbor}
                alt="Winter Harbor Maine coastline at dawn"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </FadeIn>

          <div>
            <SectionHeading
              align="left"
              eyebrow="From Sea to Shore"
              title="Direct from Winter Harbor"
              description="Each morning, independent lobstermen return to our harbor with the day's catch — vibrant red shells glistening in the Atlantic mist. We select only the finest for our discerning clientele."
            />

            <FadeIn delay={0.2} direction="up">
              <ul className="mt-10 space-y-8">
                <li className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/5">
                    <Ship className="text-gold" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">
                      Daily Catch
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      Lobsters pulled from traps within hours of processing —
                      never held, never compromised.
                    </p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/5">
                    <Anchor className="text-gold" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white">
                      Independent Fishermen
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      We partner with a small fleet of family-owned boats —
                      stewards of Maine waters for generations.
                    </p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
