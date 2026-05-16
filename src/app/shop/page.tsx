import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/products/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { products } from "@/lib/products";
import { images } from "@/lib/images";
import { Truck, Thermometer, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop premium wild-caught Maine red lobster — live lobster, picked meat, jumbo tails, and gift boxes.",
};

const shippingNotes = [
  {
    icon: Truck,
    title: "Overnight Shipping",
    text: "FedEx Priority overnight to ensure peak freshness upon arrival.",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Packed",
    text: "Insulated containers with gel packs maintain optimal temperature.",
  },
  {
    icon: Clock,
    title: "Order by 2 PM EST",
    text: "Orders placed before 2 PM ship the same business day.",
  },
];

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title="Shop"
        subtitle="Curated offerings from the cold waters of Winter Harbor — wild-caught, never farmed, delivered with care."
        image={images.coast}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <FadeIn className="mx-auto mt-20 max-w-3xl text-center">
            <p className="text-sm text-white/50">
              For restaurant inquiries, custom orders, or gift messaging, please
              contact us at{" "}
              <a
                href="mailto:orders@winterharborlobster.com"
                className="text-gold hover:underline"
              >
                orders@winterharborlobster.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-white/10 bg-harbor-cream/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Shipping & Freshness
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {shippingNotes.map((note, index) => (
              <FadeIn key={note.title} delay={index * 0.1}>
                <div className="luxury-border p-8 text-center">
                  <note.icon
                    className="mx-auto text-gold"
                    size={28}
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-6 font-display text-lg text-white">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/60">{note.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
