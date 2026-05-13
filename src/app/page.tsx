"use client";

import { useState } from "react";
import { User, Lock, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

// Elder Futhark runes — decorative only (ancient Germanic alphabet)
const RUNES = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ";
const RUNES_REV = "ᛟᛞᛜᛚᛗᛖᛒᛏᛊᛉᛈᛇᛃᛁᚾᚺᚹᚷᚲᚱᚨᚦᚢᚠ";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== AGED PARCHMENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6CE] via-[#F0DEC4] to-[#E8D2B0]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,245,236,0.8),transparent_60%)]" />

      {/* Warm ambient light */}
      <div
        className="absolute top-[5%] left-[25%] w-80 h-80 rounded-full bg-[#cc7722]/[0.07] blur-[120px]"
        style={{ animation: "torch-flicker 4s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[10%] right-[20%] w-60 h-60 rounded-full bg-[#cc7722]/[0.05] blur-[120px]"
        style={{ animation: "torch-flicker 5s ease-in-out infinite 1.5s" }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(92,61,30,0.1)_100%)]" />

      {/* Parchment texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235C3D1E'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ===== ELDER FUTHARK RUNES (decorative) ===== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Floating runes — solid color, animation controls opacity */}
        <span className="absolute top-[8%] left-[6%] text-[#5C3D1E] text-5xl rotate-12 opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite" }}>ᚠ</span>
        <span className="absolute top-[16%] right-[10%] text-[#5C3D1E] text-4xl -rotate-12 opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 1s" }}>ᚦ</span>
        <span className="absolute top-[55%] left-[5%] text-[#5C3D1E] text-6xl rotate-[20deg] opacity-0" style={{ animation: "rune-glow 8s ease-in-out infinite 2s" }}>ᚱ</span>
        <span className="absolute top-[70%] right-[7%] text-[#5C3D1E] text-5xl -rotate-[10deg] opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite 3s" }}>ᛗ</span>
        <span className="absolute top-[35%] left-[3%] text-[#5C3D1E] text-7xl rotate-[15deg] opacity-0" style={{ animation: "rune-glow 9s ease-in-out infinite 0.5s" }}>ᛉ</span>
        <span className="absolute top-[85%] right-[15%] text-[#5C3D1E] text-4xl -rotate-[20deg] opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 2.5s" }}>ᛟ</span>
        <span className="absolute top-[4%] left-[42%] text-[#5C3D1E] text-6xl rotate-[5deg] opacity-0" style={{ animation: "rune-glow 8s ease-in-out infinite 1.5s" }}>ᛊ</span>
        <span className="absolute bottom-[22%] left-[12%] text-[#5C3D1E] text-5xl -rotate-[15deg] opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite 4s" }}>ᚲ</span>
        <span className="absolute top-[45%] right-[3%] text-[#5C3D1E] text-6xl rotate-[25deg] opacity-0" style={{ animation: "rune-glow 9s ease-in-out infinite 3.5s" }}>ᚹ</span>
        <span className="absolute bottom-[6%] left-[32%] text-[#5C3D1E] text-4xl -rotate-[8deg] opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 2s" }}>ᛏ</span>

        {/* Rune inscription strips — top & bottom edges */}
        <div className="absolute top-0 left-0 right-0 text-center text-[#5C3D1E]/[0.04] text-lg py-3 tracking-[0.6em]">
          {RUNES}
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-[#5C3D1E]/[0.04] text-lg py-3 tracking-[0.6em]">
          {RUNES_REV}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div
        className="relative z-10 w-full max-w-md mx-4 py-8"
        style={{ animation: "fade-in-up 0.8s ease-out" }}
      >
        {/* Shield Crest Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="large" />
        </div>

        {/* Top ornamental divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#cc7722]/50" />
          <span className="text-[#cc7722]/50 text-xs tracking-[0.5em]">
            ⟡ ◆ ⟡
          </span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#cc7722]/50" />
        </div>

        {/* ===== PARCHMENT CARD ===== */}
        <div className="relative rounded-sm border-2 border-[#cc7722]/25 bg-[#FBF5EC]/80 backdrop-blur-sm shadow-[0_4px_40px_rgba(92,61,30,0.08)]">
          {/* Corner ornaments */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#cc7722]/35 rounded-tl-sm" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#cc7722]/35 rounded-tr-sm" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#cc7722]/35 rounded-bl-sm" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#cc7722]/35 rounded-br-sm" />

          {/* Inner border — double-border medieval style */}
          <div className="m-2.5 border border-[#cc7722]/[0.12] rounded-sm">
            <div className="p-7 sm:p-9">
              {/* Top ornamental separator */}
              <div className="flex items-center gap-3 mb-7">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cc7722]/25 to-transparent" />
                <span className="text-[#cc7722]/35 text-[10px]">◆</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cc7722]/25 to-transparent" />
              </div>

              {/* ===== LOGIN FORM ===== */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Pseudo */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="username"
                    className="font-[family-name:var(--font-medieval)] text-[13px] tracking-[0.12em] text-[#5C3D1E]/80"
                  >
                    Pseudo
                  </label>
                  <div className="relative group">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#cc7722]/50 transition-colors duration-300 group-focus-within:text-[#cc7722]/80">
                      <User size={16} strokeWidth={1.5} />
                    </span>
                    <input
                      id="username"
                      type="text"
                      placeholder="Entrez votre pseudo"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                      className="w-full rounded-sm border border-[#cc7722]/20 bg-[#F0DEC4]/40 px-4 py-3 pl-11 text-[#3A2510] text-sm placeholder:text-[#5C3D1E]/30 font-[family-name:var(--font-cormorant)] tracking-wide transition-all duration-300 focus:border-[#cc7722]/50 focus:outline-none focus:ring-1 focus:ring-[#cc7722]/20 focus:bg-white/50 focus:shadow-[0_0_15px_rgba(204,119,34,0.06)]"
                    />
                  </div>
                </div>

                {/* Mot de passe */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="font-[family-name:var(--font-medieval)] text-[13px] tracking-[0.12em] text-[#5C3D1E]/80"
                  >
                    Mot de passe
                  </label>
                  <div className="relative group">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#cc7722]/50 transition-colors duration-300 group-focus-within:text-[#cc7722]/80">
                      <Lock size={16} strokeWidth={1.5} />
                    </span>
                    <input
                      id="password"
                      type="password"
                      placeholder="Entrez votre phrase secrète"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="w-full rounded-sm border border-[#cc7722]/20 bg-[#F0DEC4]/40 px-4 py-3 pl-11 text-[#3A2510] text-sm placeholder:text-[#5C3D1E]/30 font-[family-name:var(--font-cormorant)] tracking-wide transition-all duration-300 focus:border-[#cc7722]/50 focus:outline-none focus:ring-1 focus:ring-[#cc7722]/20 focus:bg-white/50 focus:shadow-[0_0_15px_rgba(204,119,34,0.06)]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 mt-3 px-8 py-3.5 rounded-sm overflow-hidden border border-[#cc7722]/50 bg-gradient-to-r from-[#8a4e10] via-[#cc7722] to-[#8a4e10] text-white font-[family-name:var(--font-cinzel)] font-semibold tracking-[0.15em] text-xs uppercase transition-all duration-300 hover:border-[#cc7722]/70 hover:shadow-[0_0_25px_rgba(204,119,34,0.25)] hover:brightness-110 cursor-pointer"
                >
                  {"S'identifier"}
                  <ArrowRight size={15} strokeWidth={2} />
                </button>
              </form>

              {/* Bottom ornamental separator */}
              <div className="flex items-center gap-3 mt-7">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cc7722]/25 to-transparent" />
                <span className="text-[#cc7722]/35 text-[10px]">◆</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#cc7722]/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ornamental divider */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#cc7722]/50" />
          <span className="text-[#cc7722]/50 text-xs tracking-[0.5em]">
            ⟡ ◆ ⟡
          </span>
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#cc7722]/50" />
        </div>
      </div>
    </div>
  );
}
