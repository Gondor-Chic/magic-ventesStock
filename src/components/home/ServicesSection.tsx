import {
  ScrollText,
  Warehouse,
  ShieldCheck,
  MapPin,
  Users,
  BarChart3,
} from "lucide-react";
import Card from "@/components/ui/Card";
import { FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  scroll: ScrollText,
  warehouse: Warehouse,
  shield: ShieldCheck,
  map: MapPin,
  network: Users,
  chart: BarChart3,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gondor-parchment">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gondor-gold" />
            <span className="font-[family-name:var(--font-cinzel)] text-sm tracking-[0.3em] uppercase text-gondor-gold">
              Capacités de la Plateforme
            </span>
            <div className="h-px w-8 bg-gondor-gold" />
          </div>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl sm:text-4xl font-bold text-gondor-brown-dark mb-4">
            Services du Royaume
          </h2>
          <p className="mx-auto max-w-xl text-gondor-brown-light text-lg">
            Une plateforme de commerce complète forgée pour le royaume moderne
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {FEATURES.map((feature) => {
            const Icon = ICON_MAP[feature.icon] || ScrollText;
            return (
              <Card key={feature.title} className="group p-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gondor-gold/15 to-gondor-ochre/10 flex items-center justify-center transition-all duration-300 group-hover:from-gondor-gold/25 group-hover:to-gondor-ochre/20 group-hover:shadow-gondor-gold">
                    <Icon
                      size={24}
                      className="text-gondor-gold transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-cinzel)] text-lg font-semibold text-gondor-brown-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gondor-brown-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
