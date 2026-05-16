export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceLabel: string;
  image: string;
  tag?: string;
}

export const products: Product[] = [
  {
    id: "live-red-lobster",
    name: "Live Red Lobster",
    description:
      "Wild-caught Maine red lobster, 1.5–2 lb. Shipped live with care for the ultimate dining experience.",
    price: 68,
    priceLabel: "$68 each",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80",
    tag: "Signature",
  },
  {
    id: "picked-meat",
    name: "Fresh Picked Lobster Meat",
    description:
      "Hand-picked sweet claw and knuckle meat from our finest red lobsters. 8 oz.",
    price: 58,
    priceLabel: "$58",
    image:
      "https://images.unsplash.com/photo-1565680018434-b5133055e72f?w=800&q=80",
    tag: "Chef's Choice",
  },
  {
    id: "jumbo-tails",
    name: "Jumbo Lobster Tails",
    description:
      "Two premium 8 oz tails from wild Maine red lobster. Perfect for grilling.",
    price: 89,
    priceLabel: "$89",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b3a2?w=800&q=80",
  },
  {
    id: "captains-gift",
    name: "The Captain's Gift Box",
    description:
      "Our curated collection: live lobster, picked meat, and coastal delicacies. The definitive gift.",
    price: 245,
    priceLabel: "$245",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80",
    tag: "Limited",
  },
];

export const highlights = [
  {
    icon: "flame" as const,
    title: "Superior Flavor",
    description:
      "Cold Atlantic waters and wild diet create unmatched sweetness and firm, succulent texture.",
  },
  {
    icon: "leaf" as const,
    title: "Sustainably Harvested",
    description:
      "We partner with independent lobstermen who follow Maine's strict conservation practices.",
  },
  {
    icon: "map-pin" as const,
    title: "Fully Traceable",
    description:
      "Every lobster is tagged to its boat, harbor, and day of catch — transparency you can trust.",
  },
  {
    icon: "waves" as const,
    title: "Never Farmed",
    description:
      "100% wild-caught from the Gulf of Maine. No ponds, no pens — only the open sea.",
  },
  {
    icon: "award" as const,
    title: "Heritage Quality",
    description:
      "Three generations of Winter Harbor families bringing the finest red lobster to your table.",
  },
  {
    icon: "truck" as const,
    title: "Overnight Delivery",
    description:
      "Packed in insulated containers with gel packs, arriving at peak freshness.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/shop", label: "Shop" },
  { href: "/the-harvest", label: "The Harvest" },
];
