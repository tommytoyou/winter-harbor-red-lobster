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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group luxury-border overflow-hidden bg-harbor-dark/40 transition-all duration-500 hover:border-gold/25"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 bg-burgundy px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            {product.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-harbor-dark via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl text-white md:text-2xl">
            {product.name}
          </h3>
          <p className="shrink-0 font-display text-lg text-gold">
            {product.priceLabel}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          {product.description}
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-white"
        >
          Inquire →
        </Link>
      </div>
    </motion.article>
  );
}
