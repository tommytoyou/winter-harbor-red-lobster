import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { DirectFromHarbor } from "@/components/home/DirectFromHarbor";
import { WhyWinterHarbor } from "@/components/home/WhyWinterHarbor";
import { Collection } from "@/components/home/Collection";
import { StorySection } from "@/components/home/StorySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <DirectFromHarbor />
      <WhyWinterHarbor />
      <Collection />
      <StorySection />
    </>
  );
}
