"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gondor-ivory/90 backdrop-blur-md border-b border-gondor-cream-dark/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-cinzel)] text-sm font-medium tracking-wider text-gondor-brown-light uppercase transition-colors duration-300 hover:text-gondor-gold relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-gondor-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="p-2 text-gondor-brown-light transition-colors duration-300 hover:text-gondor-gold cursor-pointer"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-lg border border-gondor-gold/30 px-4 py-2 font-[family-name:var(--font-cinzel)] text-sm font-medium tracking-wide text-gondor-brown-dark transition-all duration-300 hover:border-gondor-gold hover:bg-gondor-cream/50"
            >
              <User size={16} strokeWidth={1.5} />
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gondor-brown-light cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gondor-cream-dark/50 bg-gondor-ivory px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-[family-name:var(--font-cinzel)] text-sm font-medium tracking-wider text-gondor-brown-light uppercase py-2 transition-colors duration-300 hover:text-gondor-gold"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gondor-cream-dark/50 flex gap-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gondor-gold/30 py-2.5 font-[family-name:var(--font-cinzel)] text-sm font-medium tracking-wide text-gondor-brown-dark transition-all duration-300 hover:border-gondor-gold"
            >
              <User size={16} strokeWidth={1.5} />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
