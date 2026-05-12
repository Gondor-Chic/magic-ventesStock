"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Lock, ArrowRight, Sparkles } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gondor-brown-dark via-gondor-stone to-gondor-sienna" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,119,34,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(204,119,34,0.08),transparent_60%)]" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cc7722' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M20 0L0 20h8l12-12 12 12h8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gondor-gold/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gondor-gold/5 blur-3xl" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in-up py-8">
        {/* Card */}
        <div className="rounded-2xl bg-gondor-parchment/95 backdrop-blur-xl shadow-gondor-lg border border-gondor-cream-dark/60 overflow-hidden">
          {/* Top decorative bar */}
          <div className="h-1 bg-gradient-to-r from-gondor-gold-dark via-gondor-gold to-gondor-gold-light" />

          <div className="p-8 sm:p-10">
            {/* Logo & Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <Logo size="large" showAppName />
              </div>
              <div className="gondor-separator mb-6" />
              <h1 className="font-[family-name:var(--font-cinzel)] text-xl font-semibold text-gondor-brown-dark mb-2">
                Bienvenue, Voyageur
              </h1>
              <p className="text-sm text-gondor-brown-light">
                Franchissez les portes du royaume
              </p>
            </div>

            {/* Login Form */}
            <div className="space-y-5">
              <Input
                id="username"
                label="Pseudo"
                type="text"
                placeholder="Entrez votre pseudo"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon={<User size={18} strokeWidth={1.5} />}
                autoComplete="username"
              />

              <Input
                id="password"
                label="Mot de passe"
                type="password"
                placeholder="Entrez votre phrase secrète"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock size={18} strokeWidth={1.5} />}
                autoComplete="current-password"
              />

              {/* <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gondor-cream-dark accent-gondor-gold cursor-pointer"
                  />
                  <span className="text-gondor-brown-light text-sm">
                    Se souvenir de moi
                  </span>
                </label>
                <Link
                  href="#"
                  className="font-[family-name:var(--font-cinzel)] text-sm font-medium text-gondor-gold hover:text-gondor-gold-dark transition-colors duration-300"
                >
                  Mot de passe oublié ?
                </Link>
              </div> */}

              <Button href="/" variant="primary" size="lg" className="w-full mt-2">
                S'identifier
                <ArrowRight size={18} />
              </Button>
            </div>

            {/* Footer */}
            {/* <div className="mt-8 text-center">
              <div className="gondor-separator mb-6" />
              <p className="text-sm text-gondor-brown-light">
                Nouveau dans le royaume ?{" "}
                <Link
                  href="#"
                  className="font-[family-name:var(--font-cinzel)] font-medium text-gondor-gold hover:text-gondor-gold-dark transition-colors duration-300"
                >
                  Demander l'accès
                </Link>
              </p>
            </div> */}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gondor-cream/40">
          <Sparkles size={12} />
          <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.3em] uppercase">
            Magic VentesStock
          </span>
          <Sparkles size={12} />
        </div>

        {/* Back to home */}
        {/* <div className="text-center mt-4">
          <Link
            href="/"
            className="text-gondor-cream/50 text-sm hover:text-gondor-gold transition-colors duration-300"
          >
            ← Retour à l'accueil
          </Link>
        </div> */}
      </div>
    </div>
  );
}
