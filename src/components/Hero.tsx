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

/* ── Parallax hook — Antigravity effect ────────────────────────────── */
function useParallax(offset: number) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, offset]);
  return { ref, y };
}

export default function Hero() {
  const { scrollY } = useScroll();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(
    null
  );

  /* ── Antigravity Layers ── */
  const bg = useParallax(200);      // Background drifts slowest (Living Shop)
  const cardsLayer = useParallax(-120); // Cards float upward significantly
  const header = useParallax(-40);  // Text moves subtly

  return (
    <>
      <section className="relative min-h-[110vh] overflow-hidden flex flex-col items-center justify-start">
        
        {/* ── Layer 0 · Living Shop Background (Parallax) ── */}
        <motion.div
          ref={bg.ref}
          style={{ y: bg.y }}
          className="absolute inset-0 z-0 will-change-transform scale-110"
        >
          <Image
            src="/images/hero-vertical.webp"
            alt="Kule Mevlana Vitrin Dikey"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Deep Atmosphere Overlays - Cinematic Darkening */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
        </motion.div>

        {/* ── Layer 1 · Organic Header ── */}
        <motion.div
          ref={header.ref}
          style={{ y: header.y }}
          className="relative z-20 text-center pt-40 pb-16 px-6 container mx-auto"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-playfair font-black text-6xl md:text-8xl xl:text-9xl mb-4 tracking-tighter leading-tight"
            style={{
              color: "#fdfdf5",
              textShadow: "0 10px 60px rgba(0,0,0,0.6)",
            }}
          >
            Kule Mevlana
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12"
          >
            <span className="text-amber-200/80 font-light tracking-[0.4em] uppercase text-xs md:text-sm lg:text-base border-t border-amber-200/20 pt-4 px-8">
              Samsun'un Yarım Asırlık Lezzet Mirası
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Hayallerinizdeki pasta, ustalığımızla hayat buluyor. 
            Kişiye özel butik pasta tasarımlarımız ve 
            fırınımızdan her an çıkan taptaze lezzetlerle gününüzü tatlandırıyoruz.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button className="group px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all duration-500 shadow-[0_15px_40px_rgba(217,167,74,0.3)] hover:shadow-[0_20px_60px_rgba(217,167,74,0.5)] hover:scale-105 bg-gradient-to-br from-[#d9a74a] to-[#a07a30] text-white">
              Siparişe Başla <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-500">
              Menüyü Gör
            </button>
          </motion.div>
        </motion.div>

        {/* ── Layer 1.5 · Floating Video Portal ── */}
        <motion.div
          style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}
          className="relative z-30 pointer-events-none md:pointer-events-auto"
        >
          <div className="container mx-auto px-6 relative h-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0,
                y: [0, -20, 0] 
              }}
              transition={{ 
                opacity: { duration: 1, delay: 1.2 },
                scale: { duration: 1, delay: 1.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute md:top-[-150px] md:right-0 bottom-[-550px] right-0 md:relative w-[140px] md:w-[300px] aspect-[9/16] rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/20 shadow-2xl group"
              style={{
                boxShadow: "0 0 60px rgba(121, 147, 81, 0.3)",
              }}
            >
              {/* Video Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pistachio/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <video
                src="/videos/reels.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-105"
              />

              {/* Glass Overlay for Text Readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            </motion.div>
          </div>
        </motion.div>

        {/* ── Layer 2 · Fırın Tepsisi (Baking Tray) Cards ── */}
        <motion.div
          ref={cardsLayer.ref}
          style={{ y: cardsLayer.y }}
          className="relative z-20 w-full px-6 pb-40 will-change-transform"
        >
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-10 scrollbar-hide container mx-auto">
            {categories.map((cat, i) => (
              <div key={cat.id} className="flex-shrink-0 w-[200px] md:w-auto">
                <TrayCard
                  cat={cat}
                  index={i}
                  onClick={() => setActiveCategory(cat)}
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/20"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

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
   TRAY CARD — High-end Baking Tray Aesthetic
   - Floating on atmosphere
   - Thin gold/brass edge
   - Randomized gravity tilts
   ══════════════════════════════════════════════════ */
interface TrayCardProps {
  cat: ProductCategory;
  index: number;
  onClick: () => void;
}

const STATIC_TILTS = [-3, 2, -1.5, 3.5, -2];

function TrayCard({ cat, index, onClick }: TrayCardProps) {
  const initialTilt = STATIC_TILTS[index % STATIC_TILTS.length];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, rotate: initialTilt }}
      animate={{
        y: [0, -25, 0],
        opacity: 1,
        rotate: [initialTilt, initialTilt + 1, initialTilt],
      }}
      transition={{
        opacity: { duration: 1, delay: 0.15 * index },
        y: {
          duration: 7 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        },
        rotate: {
          duration: 9 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
      }}
      whileHover={{
        scale: 1.08,
        rotate: 0,
        y: -40,
        transition: { duration: 0.4, ease: "circOut" },
      }}
      onClick={onClick}
      className="group cursor-pointer"
      style={{ transformOrigin: "center bottom" }}
    >
      <div
        className="relative overflow-hidden transition-all duration-500"
        style={{
          borderRadius: "24px",
          /* Baking Tray Shell: Gold/Brass thin border with deep depth */
          boxShadow: `
            0 0 0 1px rgba(217, 167, 74, 0.4), 
            0 0 40px rgba(0, 0, 0, 0.5),
            inset 0 -60px 80px rgba(0, 0, 0, 0.8),
            inset 0 0 40px rgba(0, 0, 0, 0.2)
          `,
          aspectRatio: "4/5",
        }}
      >
        <Image
          src={cat.coverImage}
          alt={cat.name}
          fill
          sizes="(max-width: 768px) 50vw, 20vw"
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110 brightness-95 contrast-[1.05]"
          priority={index < 3}
        />

        {/* Atmospheric Tint - Readability Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Category Info - Modern Price Tag Aesthetic */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-playfair font-black text-white text-base md:text-lg mb-1">
              {cat.name}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-400/80">
                {cat.images.length} Ürün
              </span>
              <div className="w-6 h-[1px] bg-amber-400/30" />
            </div>
          </div>
        </div>

        {/* Hover Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-[1s] pointer-events-none" />
      </div>
    </motion.div>
  );
}
