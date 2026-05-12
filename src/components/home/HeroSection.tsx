import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gondor-brown-dark via-gondor-stone to-gondor-brown" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,150,58,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,150,58,0.1),transparent_60%)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gondor-gold/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gondor-gold/5 blur-3xl" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5963A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gondor-gold/30 bg-gondor-gold/10 px-4 py-1.5 mb-8">
            <Sparkles size={14} className="text-gondor-gold-light" />
            <span className="font-[family-name:var(--font-cinzel)] text-xs tracking-widest uppercase text-gondor-gold-light">
              Premium Magical Goods
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gondor-cream leading-tight mb-6">
            Where Noble Elegance
            <br />
            <span className="text-gradient-gold">Meets Magical Craft</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-gondor-cream-dark/70 leading-relaxed mb-10">
            {BRAND.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href="#products">
              <Sparkles size={18} />
              Explore Collections
            </Button>
            <Button variant="secondary" size="lg" href="#about" className="!bg-transparent !text-gondor-cream !border-gondor-cream/30 hover:!border-gondor-gold hover:!text-gondor-gold">
              Our Kingdom
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gondor-cream/40">
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gondor-cream/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
