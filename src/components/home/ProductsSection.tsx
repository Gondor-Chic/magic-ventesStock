import { Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import { FEATURED_PRODUCTS } from "@/lib/constants";

const PRODUCT_EMOJIS: Record<string, string> = {
  "fairy-dust-001": "✨",
  "mithril-shirt-001": "🛡️",
  "elven-crystal-001": "💎",
  "wizard-scrolls-001": "📜",
};

const PRODUCT_GRADIENTS: Record<string, string> = {
  "fairy-dust-001": "from-purple-900/20 via-indigo-900/10 to-gondor-brown-dark/20",
  "mithril-shirt-001": "from-slate-700/20 via-zinc-600/10 to-gondor-brown-dark/20",
  "elven-crystal-001": "from-emerald-900/20 via-teal-800/10 to-gondor-brown-dark/20",
  "wizard-scrolls-001": "from-amber-900/20 via-orange-800/10 to-gondor-brown-dark/20",
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-gondor-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gondor-gold" />
            <span className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-gondor-gold">
              Collection Vedette
            </span>
            <div className="h-px w-8 bg-gondor-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-gondor-brown-dark mb-4">
            Artefacts Magiques
          </h2>
          <p className="mx-auto max-w-xl text-gondor-brown-light text-lg">
            Trésors artisanaux des meilleurs artisans de la Terre du Milieu
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {FEATURED_PRODUCTS.map((product) => (
            <Card key={product.id} className="group cursor-pointer">
              {/* Product Image Placeholder */}
              <div
                className={`relative h-56 bg-gradient-to-br ${
                  PRODUCT_GRADIENTS[product.id] || "from-gondor-brown/20 to-gondor-stone/10"
                } flex items-center justify-center overflow-hidden`}
              >
                <span className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {PRODUCT_EMOJIS[product.id] || "🔮"}
                </span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gondor-gold/0 transition-colors duration-300 group-hover:bg-gondor-gold/5" />
                {/* Category badge */}
                <span className="absolute top-3 left-3 rounded-full bg-gondor-ivory/90 px-3 py-1 font-[family-name:var(--font-cinzel)] text-[10px] tracking-wider uppercase text-gondor-brown">
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3">
                <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-gondor-brown-dark group-hover:text-gondor-gold transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-sm text-gondor-brown-light leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gondor-cream-dark/30">
                  <span className="font-[family-name:var(--font-cinzel)] text-xl font-bold text-gondor-gold">
                    {product.price}
                    <span className="text-xs ml-1 text-gondor-brown-light font-normal">
                      {product.currency}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-gondor-emerald font-medium">
                    <Sparkles size={12} />
                    {product.stockQuantity > 0 ? `${product.stockQuantity} en stock` : "Rupture"}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gondor-brown-light tracking-wide">
                  Réf : {product.reference}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
