import { Hero } from "@/components/home/Hero";
import { DirectFromHarbor } from "@/components/home/DirectFromHarbor";
import { WhyWinterHarbor } from "@/components/home/WhyWinterHarbor";
import { Collection } from "@/components/home/Collection";
import { StorySection } from "@/components/home/StorySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DirectFromHarbor />
      <WhyWinterHarbor />
      <Collection />
      <StorySection />
    </>
  );
}
