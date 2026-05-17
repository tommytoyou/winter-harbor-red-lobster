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
    Icon: Truck,
    title: "Overnight Shipping",
    text: "FedEx Priority overnight to ensure peak freshness upon arrival.",
  },
  {
    Icon: Thermometer,
    title: "Cold Chain Packed",
    text: "Insulated containers with gel packs maintain optimal temperature.",
  },
  {
    Icon: Clock,
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

      <section className="py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <FadeIn className="mx-auto mt-20 max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-gold/30" />
              <div className="h-[5px] w-[5px] rotate-45 bg-gold/40" />
              <div className="h-px w-10 bg-gold/30" />
            </div>
            <p className="text-sm text-white/45">
              For restaurant inquiries, custom orders, or gift messaging, please
              contact us at{" "}
              <a
                href="mailto:orders@winterharborlobster.com"
                className="text-gold transition-colors hover:text-gold-light underline-offset-4 hover:underline"
              >
                orders@winterharborlobster.com
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Shipping notes */}
      <section className="border-t border-white/8 bg-harbor-charcoal/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/70">
              Freshness Guaranteed
            </p>
            <h2 className="mt-4 font-display text-3xl font-light text-white md:text-4xl">
              Shipping & Handling
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {shippingNotes.map((note, index) => (
              <FadeIn key={note.title} delay={index * 0.1}>
                <div className="group border border-white/8 bg-harbor-dark/50 p-8 text-center transition-all duration-500 hover:border-gold/20 hover:bg-harbor-dark/80">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-gold/25 bg-gold/5 transition-all duration-500 group-hover:border-gold/45">
                    <note.Icon
                      className="text-gold"
                      size={20}
                      strokeWidth={1.25}
                    />
                  </div>
                  <h3 className="font-display text-lg font-light text-white">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {note.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
