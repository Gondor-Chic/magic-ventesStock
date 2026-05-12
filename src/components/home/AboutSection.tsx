import { Shield, Crown, Gem } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 parchment-bg overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gondor-brown-dark via-gondor-stone to-gondor-brown shadow-gondor-lg">
              {/* Decorative content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <Crown size={64} className="mx-auto text-gondor-gold/40" strokeWidth={1} />
                  <div className="space-y-2">
                    <p className="font-[family-name:var(--font-cinzel)] text-2xl font-bold text-gondor-cream/80 tracking-wider">
                      Est. Third Age
                    </p>
                    <p className="text-gondor-cream/40 text-sm tracking-[0.3em] uppercase">
                      Minas Tirith
                    </p>
                  </div>
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gondor-gold/30 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gondor-gold/30 rounded-br-lg" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-white shadow-gondor-lg p-5 border border-gondor-cream-dark/30 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gondor-gold/10 flex items-center justify-center">
                  <Gem size={20} className="text-gondor-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-gondor-brown-dark">
                    1,200+
                  </p>
                  <p className="text-xs text-gondor-brown-light">
                    Artefacts Magiques
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-gondor-gold" />
                <span className="font-[family-name:var(--font-cinzel)] text-xs tracking-[0.3em] uppercase text-gondor-gold">
                  Notre Héritage
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-gondor-brown-dark mb-6 leading-tight">
                Un Royaume Bâti sur
                <br />
                <span className="text-gradient-gold">un Artisanat Noble</span>
              </h2>
              <p className="text-gondor-brown-light text-lg leading-relaxed">
                {BRAND.description}
              </p>
            </div>

            {/* Value propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Qualité Certifiée",
                  desc: "Chaque article vérifié par le Conseil des Artisans",
                },
                {
                  icon: Crown,
                  title: "Héritage Royal",
                  desc: "Des siècles de tradition dans le commerce magique",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-gondor-gold/10 flex items-center justify-center">
                    <Icon size={20} className="text-gondor-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold text-gondor-brown-dark mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-gondor-brown-light">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
