import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { FadeIn } from "@/components/ui/FadeIn";

export function Collection() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Selection"
          title="The Collection"
          description="Each offering reflects our commitment to wild-caught excellence — from live lobster to chef-ready preparations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <FadeIn className="mt-16 flex flex-col items-center gap-4">
          <Button href="/shop" variant="outline" showArrow>
            View Full Shop
          </Button>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Free overnight shipping on orders over $150
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
