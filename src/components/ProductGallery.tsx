"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { ProductCategory } from "@/data/products";

interface ProductGalleryProps {
  category: ProductCategory | null;
  onClose: () => void;
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panel = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { type: "spring" as const, damping: 32, stiffness: 300 } },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const imgVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.2 } },
};

export default function ProductGallery({ category, onClose }: ProductGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      }
      if (lightboxIndex !== null && category) {
        if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % category.images.length);
        if (e.key === "ArrowLeft") setLightboxIndex((i) => (i! - 1 + category.images.length) % category.images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, category, onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const goNext = useCallback(() => {
    if (!category) return;
    setLightboxIndex((i) => i !== null ? (i + 1) % category.images.length : 0);
  }, [category]);

  const goPrev = useCallback(() => {
    if (!category) return;
    setLightboxIndex((i) => i !== null ? (i - 1 + category.images.length) % category.images.length : 0);
  }, [category]);

  if (!category) return null;

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          key="gallery-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
          onClick={() => lightboxIndex !== null ? setLightboxIndex(null) : onClose()}
        />

        {/* Panel */}
        <motion.div
          key="gallery-panel"
          variants={panel}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-x-0 bottom-0 top-0 md:top-[5vh] z-[101] flex flex-col md:rounded-t-[2.5rem] overflow-hidden"
          style={{ background: "#FDFDF5" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="relative flex items-center justify-between px-6 py-5 pt-12 md:pt-5 border-b border-black/5"
            style={{ background: `linear-gradient(135deg, ${category.accentColor}, transparent)` }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-white/60"
                style={{ background: `${category.color}18` }}
              >
                {category.emoji}
              </div>
              <div>
                <h2
                  className="font-playfair font-black text-2xl md:text-3xl"
                  style={{ color: category.color }}
                >
                  {category.name}
                </h2>
                <p className="text-primary/50 text-xs font-medium tracking-wide mt-0.5">
                  {category.subtitle} · {category.images.length} ürün
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-lg text-primary hover:text-accent transition-all cursor-pointer z-[100] active:bg-gray-100"
              aria-label="Kapat"
            >
              <X size={24} strokeWidth={2.5} />
            </motion.button>
          </div>

          {/* Masonry Grid */}
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {category.images.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.4, ease: "easeOut" }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className={`relative w-full ${idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/40">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <p className="text-white text-xs font-medium leading-snug drop-shadow">{img.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <>
              <motion.div
                key="lightbox-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[150] bg-black/95"
                onClick={() => setLightboxIndex(null)}
              />
              <motion.div
                key={`lightbox-img-${lightboxIndex}`}
                variants={imgVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-[151] flex items-center justify-center p-4 md:p-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.images[lightboxIndex].src}
                    alt={category.images[lightboxIndex].alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
                  <p className="text-white text-sm font-medium">
                    {category.images[lightboxIndex].alt}
                  </p>
                </div>

                {/* Counter */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                  <p className="text-white/70 text-xs tracking-widest">
                    {lightboxIndex + 1} / {category.images.length}
                  </p>
                </div>

                {/* Close */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(null);
                  }}
                  className="absolute top-6 right-6 w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white transition-all z-[100] cursor-pointer active:scale-90"
                  aria-label="Resmi Kapat"
                >
                  <X size={28} strokeWidth={2.5} />
                </motion.button>

                {/* Prev / Next */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <ChevronLeft size={22} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
                >
                  <ChevronRight size={22} />
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    </AnimatePresence>
  );
}
