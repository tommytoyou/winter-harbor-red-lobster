import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { FadeIn } from "@/components/ui/FadeIn";

export function Collection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curated Selection"
          title="The Collection"
          description="Each offering reflects our commitment to wild-caught excellence — from live lobster to chef-ready preparations."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <Button href="/shop" variant="outline">
            View Full Shop
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
