"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus } from 'lucide-react';

interface FloatingCardProps {
  title: string;
  price: string;
  category: string;
  imageUrl: string;
  delay?: number;
  isSpecial?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

const FloatingCard = ({ title, price, category, imageUrl, delay = 0, isSpecial = false, priority = false, onClick }: FloatingCardProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="glass-card rounded-[2.5rem] p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group"
      >
        {/* Category Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-[10px] uppercase tracking-widest font-black ${isSpecial ? 'text-accent' : 'text-pistachio'}`}>
            {category}
          </span>
          <span className="text-[9px] font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity tracking-widest">
            KOLEKSİYONU İNCELE →
          </span>
        </div>

        {/* Product Image Wrapper */}
        <div className="relative aspect-[4/3] w-full mb-6 perspective-1000">
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5, rotateX: -2 }}
            className="w-full h-full relative"
          >
            {/* Soft Glow */}
            <div className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20 ${isSpecial ? 'bg-accent' : 'bg-pistachio'}`} />
            
            <div className={`w-full h-full relative rounded-2xl overflow-hidden border ${isSpecial ? 'border-accent/10' : 'border-black/5'} bg-white/40 shadow-inner skeleton-loader`}>
              {imageUrl ? (
                <Image 
                  src={imageUrl} 
                  alt={title} 
                  fill 
                  priority={priority}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-playfair font-bold italic text-lg text-primary/20">KULE MEVLANA</span>
                </div>
              )}
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 backdrop-blur-md text-primary font-black text-[10px] uppercase tracking-widest px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  İncele
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-1">
          <h3 className="font-playfair font-black text-2xl text-primary group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-primary/60 mb-6 font-medium">Günlük taze ve organik içeriklerle.</p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="font-outfit font-extrabold text-2xl text-primary">
              {price} <span className="text-xs font-normal text-secondary">TL</span>
            </span>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-colors ${isSpecial ? 'bg-accent shadow-accent/20' : 'bg-pistachio shadow-pistachio/20'}`}
            >
              <Plus size={20} strokeWidth={3} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingCard;
