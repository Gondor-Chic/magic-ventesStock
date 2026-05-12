import type { Product, NavLink, Feature } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Collections", href: "#products" },
  { label: "À Propos", href: "#about" },
  { label: "Services", href: "#services" },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "fairy-dust-001",
    reference: "GC-ING-001",
    name: "Poudre de Fée",
    description:
      "Récoltée dans les clairières enchantées de Lothlórien. Sublime toute potion magique d'une brillance lumineuse.",
    price: 49.99,
    currency: "PO",
    stockQuantity: 150,
    imageUrl: "/images/fairy-dust.jpg",
    category: "Ingrédients Magiques",
  },
  {
    id: "mithril-shirt-001",
    reference: "GC-ARM-001",
    name: "Chemise de Mithril",
    description:
      "Forgée dans les anciennes salles de Khazad-dûm. Plus légère que la soie, plus résistante que les écailles de dragon.",
    price: 999.99,
    currency: "PO",
    stockQuantity: 12,
    imageUrl: "/images/mithril-shirt.jpg",
    category: "Armure & Protection",
  },
  {
    id: "elven-crystal-001",
    reference: "GC-ART-001",
    name: "Cristal Elfique",
    description:
      "Un cristal scintillant des profondeurs des royaumes elfiques. Irradie une pure énergie de lumière stellaire.",
    price: 149.99,
    currency: "PO",
    stockQuantity: 45,
    imageUrl: "/images/elven-crystal.jpg",
    category: "Artefacts Magiques",
  },
  {
    id: "wizard-scrolls-001",
    reference: "GC-SAV-001",
    name: "Parchemins de Magicien",
    description:
      "Parchemins anciens inscrits de sorts oubliés par les Istari. À manipuler avec précaution arcanique.",
    price: 79.99,
    currency: "PO",
    stockQuantity: 88,
    imageUrl: "/images/wizard-scrolls.jpg",
    category: "Savoir & Légendes",
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Commandes en Ligne",
    description: "Passez vos commandes depuis tout le royaume, livrées par aigle ou caravane.",
    icon: "scroll",
  },
  {
    title: "Gestion des Stocks",
    description: "Suivi d'inventaire en temps réel dans tous les avant-postes du royaume.",
    icon: "warehouse",
  },
  {
    title: "Paiements Sécurisés",
    description: "Protégés par le meilleur chiffrement nain. Votre or est en sécurité.",
    icon: "shield",
  },
  {
    title: "Suivi de Livraison",
    description: "Suivez votre colis de la forge à votre porte via le réseau palantír.",
    icon: "map",
  },
  {
    title: "Réseau Fournisseurs",
    description: "Connecté aux artisans de confiance des quatre coins de la Terre du Milieu.",
    icon: "network",
  },
  {
    title: "Analytique du Royaume",
    description: "Rapports complets dignes de la salle du conseil de l'Intendant.",
    icon: "chart",
  },
];

export const BRAND = {
  name: "Gondor Chic",
  tagline: "Là où l'Élégance Noble rencontre l'Artisanat Magique",
  description:
    "Depuis la Tour Blanche de Minas Tirith, nous vous offrons les plus beaux artefacts magiques, vêtements enchantés et ingrédients mystiques — sélectionnés pour le citoyen exigeant de la Terre du Milieu.",
  year: 2026,
} as const;
