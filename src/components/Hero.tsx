"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { categories } from "@/data/products";
import type { ProductCategory } from "@/data/products";

const ProductGallery = dynamic(() => import("@/components/ProductGallery"), {
  ssr: false,
});

/* ── Parallax hook ────────────────────────────── */
function useParallax(offset: number) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, offset]);
  return { ref, y };
}

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    null
  );

  /* ── Parallax layers ── */
  const bg = useParallax(180);      // background drifts slowest
  const cards = useParallax(-60);   // cards float upward faster
  const header = useParallax(-30);  // text moves slightly

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — Full-screen shop backdrop + floating cards
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start">

        {/* ── Layer 0 · Full-screen shop background ── */}
        <motion.div
          ref={bg.ref}
          style={{ y: bg.y }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <Image
            src="/images/products/DSCF3496.JPG"
            alt="Kule Mevlana dükkan içi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110"
          />

          {/* Warm cream overlay — brings warmth without killing the image */}
          <div className="absolute inset-0 bg-[#2B1609]/55" />

          {/* Top vignette — helps text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0C04]/70 via-transparent to-[#1A0C04]/80" />

          {/* Warm grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />
        </motion.div>

        {/* ── Layer 1 · Header text (mid parallax) ── */}
        <motion.div
          ref={header.ref}
          style={{ y: header.y }}
          className="relative z-20 text-center pt-36 pb-12 px-6 container mx-auto will-change-transform"
        >
          {/* Badge */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-8 border border-white/15 bg-white/8 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/80 text-[10px] md:text-xs font-black tracking-[0.45em] uppercase">
              Samsun&apos;un Lezzet Mirası
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="font-playfair font-black text-5xl md:text-7xl xl:text-8xl mb-6 tracking-tighter leading-[0.92]"
            style={{
              color: "#FDFDF5",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
            }}
          >
            Kule Mevlana
            <br />
            <span
              className="italic font-medium"
              style={{
                color: "#E8C87A",
                textShadow: "0 0 60px rgba(232,200,122,0.5)",
              }}
            >
              Vitrini
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
            className="text-white/60 text-base md:text-lg max-w-lg mx-auto font-medium leading-relaxed mb-10"
          >
            Yarım asırlık tecrübeyle hazırlanan günlük taze lezzetlerimizi
            keşfedin. Her ürün bir sanat eseri, her lokma bir hikaye.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <button className="group px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all duration-300 shadow-[0_8px_30px_rgba(197,160,89,0.4)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.6)] hover:scale-105"
              style={{ background: "linear-gradient(135deg, #C5A059, #A07A30)", color: "#fff" }}
            >
              Hemen Sipariş Ver <ArrowRight size={16} />
            </button>
            <button className="px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300">
              Hikayemiz
            </button>
          </motion.div>
        </motion.div>

        {/* ── Separator ── */}
        <div className="relative z-20 w-full flex justify-center mb-8">
          <div className="flex items-center gap-4 px-6">
            <div className="h-px flex-1 bg-white/10 w-16" />
            <span className="text-white/30 text-[10px] font-black tracking-[0.4em] uppercase">Kategoriler</span>
            <div className="h-px flex-1 bg-white/10 w-16" />
          </div>
        </div>

        {/* ── Layer 2 · Category cards (fastest parallax) ── */}
        <motion.div
          ref={cards.ref}
          style={{ y: cards.y }}
          className="relative z-20 w-full px-4 md:px-6 pb-32 will-change-transform"
        >
          {/* Mobile: yatay kaydırmalı, Desktop: grid */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide container mx-auto">
            {categories.map((cat, i) => (
              <div key={cat.id} className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-auto snap-start">
                <TrayCard
                  cat={cat}
                  index={i}
                  onClick={() => setActiveCategory(cat)}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll cue ── */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/25"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Gallery modal */}
      <AnimatePresence>
        {activeCategory && (
          <ProductGallery
            key={activeCategory.id}
            category={activeCategory}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════
   TRAY CARD — "Fırın tepsisi" aesthetic
   - Warm parchment base, very subtle tilt
   - Thin golden border like a pastry case
   - Frosted glass name label at bottom
══════════════════════════════════════════════════ */
interface TrayCardProps {
  cat: ProductCategory;
  index: number;
  onClick: () => void;
}

const TILTS = [-2.5, 1.8, -1.2, 2.2, -1.6]; // subtle static tilts per card

function TrayCard({ cat, index, onClick }: TrayCardProps) {
  const tilt = TILTS[index % TILTS.length];

  /* Float animation — each card at its own rhythm */
  const floatDuration = 6 + index * 0.7;
  const floatDelay = index * 0.5;

  return (
    <motion.div
      initial={{ y: 60, opacity: 0, rotate: tilt }}
      animate={{
        y: [0, -18, 0],
        opacity: 1,
        rotate: [tilt, tilt + 1, tilt],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.1 * index },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
        rotate: {
          duration: floatDuration + 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{
        scale: 1.07,
        rotate: 0,
        y: -32,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onClick={onClick}
      className="group cursor-pointer select-none"
      style={{ transformOrigin: "center bottom" }}
    >
      {/* ── Tray shell ── */}
      <div
        className="relative overflow-hidden"
        style={{
          /* Rounded like a bakery tray — not too circular */
          borderRadius: "18px",
          /* Warm parchment border — golden like a pastry case frame */
          boxShadow: `
            0 0 0 1.5px rgba(197,160,89,0.45),
            0 0 0 4px rgba(255,255,255,0.06),
            0 20px 50px rgba(0,0,0,0.45),
            0 4px 12px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.15)
          `,
          aspectRatio: "3/4",
        }}
      >
        {/* Product image */}
        <Image
          src={cat.coverImage}
          alt={cat.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
          priority={index < 3}
        />

        {/* Warm vignette at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(27,12,4,0.85) 0%, rgba(27,12,4,0.2) 45%, transparent 70%)",
          }}
        />

        {/* Subtle top shine — "glass vitrine" effect */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-30"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, transparent 100%)",
          }}
        />

        {/* Emoji badge — top right corner */}
        <div
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center text-base shadow-lg"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {cat.emoji}
        </div>

        {/* Bottom label — frosted glass "price tag" */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5">
          <div
            className="rounded-xl px-3 py-2.5"
            style={{
              background: "rgba(10,5,2,0.55)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <p className="font-playfair font-black text-white text-sm leading-tight mb-0.5">
              {cat.name}
            </p>
            <p
              className="text-[9px] font-black uppercase tracking-[0.2em]"
              style={{ color: "#E8C87A" }}
            >
              {cat.images.length} ürün · keşfet
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
