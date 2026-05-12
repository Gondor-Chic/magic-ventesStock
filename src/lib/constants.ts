import type { Product, NavLink, Feature } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "fairy-dust-001",
    name: "Fairy Dust",
    description:
      "Harvested from the enchanted glades of Lothlórien. Enhances any magical potion with luminescent brilliance.",
    price: 49.99,
    currency: "GP",
    imageUrl: "/images/fairy-dust.jpg",
    category: "Magical Ingredients",
    inStock: true,
  },
  {
    id: "mithril-shirt-001",
    name: "Mithril Shirt",
    description:
      "Forged in the ancient halls of Khazad-dûm. Lighter than silk, stronger than dragon scales.",
    price: 999.99,
    currency: "GP",
    imageUrl: "/images/mithril-shirt.jpg",
    category: "Armor & Protection",
    inStock: true,
  },
  {
    id: "elven-crystal-001",
    name: "Elven Crystal",
    description:
      "A shimmering crystal from the depths of the Elven kingdoms. Radiates pure starlight energy.",
    price: 149.99,
    currency: "GP",
    imageUrl: "/images/elven-crystal.jpg",
    category: "Magical Artifacts",
    inStock: true,
  },
  {
    id: "wizard-scrolls-001",
    name: "Wizard Scrolls",
    description:
      "Ancient scrolls inscribed with forgotten spells by the Istari. Handle with arcane caution.",
    price: 79.99,
    currency: "GP",
    imageUrl: "/images/wizard-scrolls.jpg",
    category: "Knowledge & Lore",
    inStock: true,
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Online Orders",
    description: "Place orders from across the realm, delivered by eagle or caravan.",
    icon: "scroll",
  },
  {
    title: "Stock Management",
    description: "Real-time inventory tracking across all kingdom outposts.",
    icon: "warehouse",
  },
  {
    title: "Secure Payments",
    description: "Protected by the finest dwarven encryption. Your gold is safe.",
    icon: "shield",
  },
  {
    title: "Delivery Tracking",
    description: "Follow your parcel from forge to doorstep via palantír network.",
    icon: "map",
  },
  {
    title: "Supplier Network",
    description: "Connected to trusted artisans from every corner of Middle-earth.",
    icon: "network",
  },
  {
    title: "Kingdom Analytics",
    description: "Comprehensive reports worthy of the Steward's council chamber.",
    icon: "chart",
  },
];

export const BRAND = {
  name: "Gondor Chic",
  tagline: "Where Noble Elegance Meets Magical Craft",
  description:
    "From the White Tower of Minas Tirith, we bring you the finest magical artifacts, enchanted garments, and mystical ingredients — curated for the discerning citizen of Middle-earth.",
  year: 2024,
} as const;
