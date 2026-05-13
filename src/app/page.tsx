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
      <div className="absolute inset-0 bg-gradient-to-b from-[#CC7722]/20 via-[#CC7722]/30 to-[#CC7722]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,243,230,0.8),transparent_60%)]" />

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(204,119,34,0.08)_100%)]" />

      {/* Parchment texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CC7722'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* ===== ELDER FUTHARK RUNES (decorative) ===== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Floating runes — solid color, animation controls opacity */}
        <span className="absolute top-[8%] left-[6%] text-[#CC7722] text-5xl rotate-12 opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite" }}>ᚠ</span>
        <span className="absolute top-[16%] right-[10%] text-[#CC7722] text-4xl -rotate-12 opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 1s" }}>ᚦ</span>
        <span className="absolute top-[55%] left-[5%] text-[#CC7722] text-6xl rotate-[20deg] opacity-0" style={{ animation: "rune-glow 8s ease-in-out infinite 2s" }}>ᚱ</span>
        <span className="absolute top-[70%] right-[7%] text-[#CC7722] text-5xl -rotate-[10deg] opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite 3s" }}>ᛗ</span>
        <span className="absolute top-[35%] left-[3%] text-[#CC7722] text-7xl rotate-[15deg] opacity-0" style={{ animation: "rune-glow 9s ease-in-out infinite 0.5s" }}>ᛉ</span>
        <span className="absolute top-[85%] right-[15%] text-[#CC7722] text-4xl -rotate-[20deg] opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 2.5s" }}>ᛟ</span>
        <span className="absolute top-[4%] left-[42%] text-[#CC7722] text-6xl rotate-[5deg] opacity-0" style={{ animation: "rune-glow 8s ease-in-out infinite 1.5s" }}>ᛊ</span>
        <span className="absolute bottom-[22%] left-[12%] text-[#CC7722] text-5xl -rotate-[15deg] opacity-0" style={{ animation: "rune-glow 6s ease-in-out infinite 4s" }}>ᚲ</span>
        <span className="absolute top-[45%] right-[3%] text-[#CC7722] text-6xl rotate-[25deg] opacity-0" style={{ animation: "rune-glow 9s ease-in-out infinite 3.5s" }}>ᚹ</span>
        <span className="absolute bottom-[6%] left-[32%] text-[#CC7722] text-4xl -rotate-[8deg] opacity-0" style={{ animation: "rune-glow 7s ease-in-out infinite 2s" }}>ᛏ</span>

        {/* Rune inscription strips — top & bottom edges */}
        <div className="absolute top-0 left-0 right-0 text-center text-[#CC7722]/[0.05] text-lg py-3 tracking-[0.6em]">
          {RUNES}
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-[#CC7722]/[0.05] text-lg py-3 tracking-[0.6em]">
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
        <div className="relative rounded-2xl border border-[#cc7722]/10 bg-[#FBF3E6]/60 backdrop-blur-sm shadow-[0_8px_80px_rgba(204,119,34,0.06)]">

          {/* ── Large corner branches (very visible) ── */}
          {/* Top-left branch */}
          <svg className="absolute -top-10 -left-10 w-44 h-44 text-[#cc7722]/70 drop-shadow-[0_0_3px_rgba(204,119,34,0.3)]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main trunk */}
            <path d="M15 170 Q18 130 25 100 Q32 75 50 55 Q65 40 75 25 Q82 14 78 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            {/* Secondary branches */}
            <path d="M25 100 Q15 90 10 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 55 Q38 45 30 42 Q24 40 20 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M65 40 Q55 30 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 75 Q20 68 15 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {/* Twigs */}
            <path d="M10 78 Q5 72 8 65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 32 Q14 28 16 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M48 28 Q42 20 45 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M15 58 Q8 52 10 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M10 78 Q4 74 8 68 Q12 72 10 78Z" fill="currentColor" opacity="0.25" />
            <path d="M20 32 Q14 26 18 22 Q22 28 20 32Z" fill="currentColor" opacity="0.25" />
            <path d="M30 42 Q24 36 28 32 Q32 38 30 42Z" fill="currentColor" opacity="0.2" />
            <path d="M48 28 Q42 22 46 18 Q50 24 48 28Z" fill="currentColor" opacity="0.25" />
            <path d="M78 5 Q72 2 76 -2 Q80 2 78 5Z" fill="currentColor" opacity="0.2" />
            <path d="M15 58 Q9 54 12 48 Q16 52 15 58Z" fill="currentColor" opacity="0.2" />
            <path d="M75 25 Q68 20 72 15 Q77 20 75 25Z" fill="currentColor" opacity="0.2" />
            {/* Berries / buds */}
            <circle cx="8" cy="65" r="2.5" fill="currentColor" opacity="0.35" />
            <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.35" />
            <circle cx="45" cy="14" r="2" fill="currentColor" opacity="0.35" />
            <circle cx="10" cy="44" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="78" cy="5" r="2.5" fill="currentColor" opacity="0.4" />
          </svg>

          {/* Top-right branch (mirrored) */}
          <svg className="absolute -top-10 -right-10 w-44 h-44 text-[#cc7722]/70 drop-shadow-[0_0_3px_rgba(204,119,34,0.3)] scale-x-[-1]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 170 Q18 130 25 100 Q32 75 50 55 Q65 40 75 25 Q82 14 78 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M25 100 Q15 90 10 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 55 Q38 45 30 42 Q24 40 20 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M65 40 Q55 30 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 75 Q20 68 15 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 78 Q5 72 8 65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 32 Q14 28 16 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M48 28 Q42 20 45 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M15 58 Q8 52 10 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M10 78 Q4 74 8 68 Q12 72 10 78Z" fill="currentColor" opacity="0.25" />
            <path d="M20 32 Q14 26 18 22 Q22 28 20 32Z" fill="currentColor" opacity="0.25" />
            <path d="M30 42 Q24 36 28 32 Q32 38 30 42Z" fill="currentColor" opacity="0.2" />
            <path d="M48 28 Q42 22 46 18 Q50 24 48 28Z" fill="currentColor" opacity="0.25" />
            <path d="M75 25 Q68 20 72 15 Q77 20 75 25Z" fill="currentColor" opacity="0.2" />
            <circle cx="8" cy="65" r="2.5" fill="currentColor" opacity="0.35" />
            <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.35" />
            <circle cx="45" cy="14" r="2" fill="currentColor" opacity="0.35" />
            <circle cx="78" cy="5" r="2.5" fill="currentColor" opacity="0.4" />
          </svg>

          {/* Bottom-left branch */}
          <svg className="absolute -bottom-10 -left-10 w-44 h-44 text-[#cc7722]/70 drop-shadow-[0_0_3px_rgba(204,119,34,0.3)] scale-y-[-1]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 170 Q18 130 25 100 Q32 75 50 55 Q65 40 75 25 Q82 14 78 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M25 100 Q15 90 10 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 55 Q38 45 30 42 Q24 40 20 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M65 40 Q55 30 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 75 Q20 68 15 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 78 Q5 72 8 65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 32 Q14 28 16 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M10 78 Q4 74 8 68 Q12 72 10 78Z" fill="currentColor" opacity="0.25" />
            <path d="M20 32 Q14 26 18 22 Q22 28 20 32Z" fill="currentColor" opacity="0.25" />
            <path d="M30 42 Q24 36 28 32 Q32 38 30 42Z" fill="currentColor" opacity="0.2" />
            <circle cx="8" cy="65" r="2.5" fill="currentColor" opacity="0.35" />
            <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.35" />
          </svg>

          {/* Bottom-right branch */}
          <svg className="absolute -bottom-10 -right-10 w-44 h-44 text-[#cc7722]/70 drop-shadow-[0_0_3px_rgba(204,119,34,0.3)] scale-[-1]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 170 Q18 130 25 100 Q32 75 50 55 Q65 40 75 25 Q82 14 78 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M25 100 Q15 90 10 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 55 Q38 45 30 42 Q24 40 20 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M65 40 Q55 30 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M32 75 Q20 68 15 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 78 Q5 72 8 65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M20 32 Q14 28 16 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M10 78 Q4 74 8 68 Q12 72 10 78Z" fill="currentColor" opacity="0.25" />
            <path d="M20 32 Q14 26 18 22 Q22 28 20 32Z" fill="currentColor" opacity="0.25" />
            <path d="M30 42 Q24 36 28 32 Q32 38 30 42Z" fill="currentColor" opacity="0.2" />
            <circle cx="8" cy="65" r="2.5" fill="currentColor" opacity="0.35" />
            <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.35" />
          </svg>

          {/* ── Side vines (tall, visible) ── */}
          <svg className="absolute top-1/2 -left-8 -translate-y-1/2 w-14 h-64 text-[#cc7722]/55" viewBox="0 0 50 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0 Q20 25 30 50 Q42 75 22 100 Q8 120 25 145 Q38 165 18 190 Q6 210 28 235 Q35 248 25 260" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            {/* Side twigs */}
            <path d="M30 50 Q15 42 10 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 100 Q8 92 5 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25 145 Q10 140 6 128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 190 Q5 185 3 172" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {/* Leaves */}
            <path d="M10 32 Q4 28 8 22 Q12 26 10 32Z" fill="currentColor" opacity="0.3" />
            <path d="M5 80 Q0 74 4 68 Q8 74 5 80Z" fill="currentColor" opacity="0.3" />
            <path d="M6 128 Q0 122 4 116 Q8 122 6 128Z" fill="currentColor" opacity="0.3" />
            <path d="M3 172 Q-2 166 2 160 Q6 166 3 172Z" fill="currentColor" opacity="0.3" />
            {/* Berries */}
            <circle cx="10" cy="32" r="2.5" fill="currentColor" opacity="0.3" />
            <circle cx="5" cy="80" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="6" cy="128" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="3" cy="172" r="2.5" fill="currentColor" opacity="0.3" />
          </svg>

          <svg className="absolute top-1/2 -right-8 -translate-y-1/2 w-14 h-64 text-[#cc7722]/55 scale-x-[-1]" viewBox="0 0 50 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 0 Q20 25 30 50 Q42 75 22 100 Q8 120 25 145 Q38 165 18 190 Q6 210 28 235 Q35 248 25 260" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M30 50 Q15 42 10 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 100 Q8 92 5 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M25 145 Q10 140 6 128" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M18 190 Q5 185 3 172" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 32 Q4 28 8 22 Q12 26 10 32Z" fill="currentColor" opacity="0.3" />
            <path d="M5 80 Q0 74 4 68 Q8 74 5 80Z" fill="currentColor" opacity="0.3" />
            <path d="M6 128 Q0 122 4 116 Q8 122 6 128Z" fill="currentColor" opacity="0.3" />
            <path d="M3 172 Q-2 166 2 160 Q6 166 3 172Z" fill="currentColor" opacity="0.3" />
            <circle cx="10" cy="32" r="2.5" fill="currentColor" opacity="0.3" />
            <circle cx="5" cy="80" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="6" cy="128" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="3" cy="172" r="2.5" fill="currentColor" opacity="0.3" />
          </svg>

          {/* Inner border — organic rounded */}
          <div className="m-3 border border-[#cc7722]/8 rounded-xl">
            <div className="p-7 sm:p-9">
              {/* Top ornamental flourish — elaborate vine */}
              <div className="flex items-center justify-center mb-7">
                <svg className="w-full h-10 text-[#cc7722]/50" viewBox="0 0 340 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left vine */}
                  <path d="M0 20 Q20 20 40 16 Q55 12 70 15 Q85 18 100 14 Q112 10 125 14 Q135 17 145 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M40 16 Q35 8 28 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M70 15 Q65 8 58 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M100 14 Q95 6 88 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M28 6 Q24 2 28 0 Q32 4 28 6Z" fill="currentColor" opacity="0.3" />
                  <path d="M58 10 Q54 5 58 3 Q62 7 58 10Z" fill="currentColor" opacity="0.3" />
                  <path d="M88 8 Q84 3 88 1 Q92 5 88 8Z" fill="currentColor" opacity="0.3" />
                  {/* Right vine */}
                  <path d="M340 20 Q320 20 300 16 Q285 12 270 15 Q255 18 240 14 Q228 10 215 14 Q205 17 195 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M300 16 Q305 8 312 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M270 15 Q275 8 282 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M240 14 Q245 6 252 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M312 6 Q316 2 312 0 Q308 4 312 6Z" fill="currentColor" opacity="0.3" />
                  <path d="M282 10 Q286 5 282 3 Q278 7 282 10Z" fill="currentColor" opacity="0.3" />
                  <path d="M252 8 Q256 3 252 1 Q248 5 252 8Z" fill="currentColor" opacity="0.3" />
                  {/* Central White Tree of Gondor motif */}
                  <path d="M170 38 L170 14" stroke="currentColor" strokeWidth="1.8" />
                  {/* Main branches */}
                  <path d="M170 14 Q162 6 155 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M170 14 Q178 6 185 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M170 18 Q160 12 152 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M170 18 Q180 12 188 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M170 24 Q158 18 148 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M170 24 Q182 18 192 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  {/* Crown above tree */}
                  <path d="M164 6 Q167 2 170 4 Q173 2 176 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="170" cy="2" r="1.5" fill="currentColor" opacity="0.5" />
                  {/* Leaves on tree */}
                  <path d="M155 8 Q151 4 155 2 Q159 6 155 8Z" fill="currentColor" opacity="0.3" />
                  <path d="M185 8 Q189 4 185 2 Q181 6 185 8Z" fill="currentColor" opacity="0.3" />
                  <path d="M152 15 Q148 11 152 9 Q156 13 152 15Z" fill="currentColor" opacity="0.25" />
                  <path d="M188 15 Q192 11 188 9 Q184 13 188 15Z" fill="currentColor" opacity="0.25" />
                  <path d="M148 22 Q144 18 148 16 Q152 20 148 22Z" fill="currentColor" opacity="0.2" />
                  <path d="M192 22 Q196 18 192 16 Q188 20 192 22Z" fill="currentColor" opacity="0.2" />
                  {/* Roots */}
                  <path d="M170 38 Q165 40 158 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M170 38 Q175 40 182 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                </svg>
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
                      className="w-full rounded-sm border border-[#cc7722]/25 bg-[#CC7722]/[0.06] px-4 py-3 pl-11 text-[#3A2510] text-sm placeholder:text-[#CC7722]/30 font-[family-name:var(--font-cormorant)] tracking-wide transition-all duration-300 focus:border-[#cc7722]/50 focus:outline-none focus:ring-1 focus:ring-[#cc7722]/20 focus:bg-white/50 focus:shadow-[0_0_15px_rgba(204,119,34,0.08)]"
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
                      className="w-full rounded-sm border border-[#cc7722]/25 bg-[#CC7722]/[0.06] px-4 py-3 pl-11 text-[#3A2510] text-sm placeholder:text-[#CC7722]/30 font-[family-name:var(--font-cormorant)] tracking-wide transition-all duration-300 focus:border-[#cc7722]/50 focus:outline-none focus:ring-1 focus:ring-[#cc7722]/20 focus:bg-white/50 focus:shadow-[0_0_15px_rgba(204,119,34,0.08)]"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 mt-3 px-8 py-3.5 rounded-sm overflow-hidden border border-[#cc7722]/60 bg-[#CC7722] text-white font-[family-name:var(--font-cinzel)] font-semibold tracking-[0.15em] text-xs uppercase shadow-[0_2px_12px_rgba(204,119,34,0.3)] transition-all duration-300 hover:bg-[#DD8833] hover:border-[#cc7722] hover:shadow-[0_0_25px_rgba(204,119,34,0.4)] cursor-pointer"
                >
                  {"S'identifier"}
                  <ArrowRight size={15} strokeWidth={2} />
                </button>
              </form>

              {/* Bottom ornamental flourish — elaborate vine */}
              <div className="flex items-center justify-center mt-7">
                <svg className="w-full h-8 text-[#cc7722]/45" viewBox="0 0 340 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left vine scroll */}
                  <path d="M0 16 Q25 16 50 12 Q70 8 90 13 Q108 17 125 12 Q140 8 155 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M50 12 Q45 5 38 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M90 13 Q85 5 78 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M38 7 Q34 3 38 1 Q42 5 38 7Z" fill="currentColor" opacity="0.3" />
                  <path d="M78 8 Q74 3 78 1 Q82 5 78 8Z" fill="currentColor" opacity="0.3" />
                  {/* Right vine scroll */}
                  <path d="M340 16 Q315 16 290 12 Q270 8 250 13 Q232 17 215 12 Q200 8 185 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M290 12 Q295 5 302 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M250 13 Q255 5 262 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  <path d="M302 7 Q306 3 302 1 Q298 5 302 7Z" fill="currentColor" opacity="0.3" />
                  <path d="M262 8 Q266 3 262 1 Q258 5 262 8Z" fill="currentColor" opacity="0.3" />
                  {/* Central diamond with star */}
                  <path d="M170 4 L178 16 L170 28 L162 16 Z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.08" />
                  <circle cx="170" cy="16" r="2" fill="currentColor" opacity="0.4" />
                  <path d="M155 14 Q162 16 155 18" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M185 14 Q178 16 185 18" stroke="currentColor" strokeWidth="0.8" />
                </svg>
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
