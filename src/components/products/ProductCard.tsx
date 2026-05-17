"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-white/8 bg-harbor-charcoal/40 transition-all duration-500 hover:border-gold/25"
    >
      {/* Gold bottom accent line */}
      <div className="absolute bottom-0 left-0 z-10 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />

      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-harbor-dark/70 via-harbor-dark/10 to-transparent" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-harbor-dark/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Link
            href="/shop"
            className="translate-y-4 border border-gold px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] text-gold transition-all duration-500 hover:bg-gold hover:text-harbor-dark group-hover:translate-y-0"
          >
            Inquire
          </Link>
        </div>

        {/* Tag */}
        {product.tag && (
          <span className="absolute left-4 top-4 bg-burgundy px-3 py-1 text-[9px] font-medium uppercase tracking-[0.25em] text-white">
            {product.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-light text-white md:text-2xl">
            {product.name}
          </h3>
          <p className="shrink-0 font-display text-lg italic text-gold">
            {product.priceLabel}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/55">
          {product.description}
        </p>
        <div className="mt-5 flex items-center gap-2.5">
          <div className="h-px w-6 bg-gold/50 transition-all duration-500 group-hover:w-10" />
          <Link
            href="/shop"
            className="text-[10px] uppercase tracking-[0.25em] text-gold/70 transition-colors hover:text-gold"
          >
            Inquire
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
