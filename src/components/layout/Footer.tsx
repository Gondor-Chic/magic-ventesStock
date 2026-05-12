import Link from "next/link";
import { Crown, Globe, MessageCircle, Send } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import Separator from "@/components/ui/Separator";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gondor-brown-dark to-gondor-charcoal text-gondor-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Crown size={24} className="text-gondor-gold" strokeWidth={1.5} />
              <span className="font-[family-name:var(--font-cinzel)] text-xl font-semibold tracking-wider text-gondor-cream">
                {BRAND.name}
              </span>
            </div>
            <p className="text-gondor-cream-dark/70 text-sm leading-relaxed max-w-xs">
              {BRAND.tagline}. Fournisseurs de produits magiques d'exception depuis le Troisième Âge.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-widest uppercase text-gondor-gold">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gondor-cream-dark/70 text-sm transition-colors duration-300 hover:text-gondor-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/login"
                  className="text-gondor-cream-dark/70 text-sm transition-colors duration-300 hover:text-gondor-gold"
                >
                  Connexion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm font-semibold tracking-widest uppercase text-gondor-gold">
              Contact
            </h3>
            <p className="text-gondor-cream-dark/70 text-sm">
              La Tour Blanche, Minas Tirith
              <br />
              Royaume de Gondor
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Globe, label: "Website" },
                { Icon: MessageCircle, label: "Messages" },
                { Icon: Send, label: "Newsletter" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="p-2 rounded-lg border border-gondor-brown-light/30 text-gondor-cream-dark/70 transition-all duration-300 hover:border-gondor-gold hover:text-gondor-gold hover:bg-gondor-brown-light/20 cursor-pointer"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="!my-8 opacity-30" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gondor-cream-dark/50 text-sm">
          <p>© {BRAND.year} {BRAND.name}. Tous droits réservés.</p>
          <p className="font-[family-name:var(--font-cinzel)] tracking-wider">
            Plateforme Magic VentesStock
          </p>
        </div>
      </div>
    </footer>
  );
}
