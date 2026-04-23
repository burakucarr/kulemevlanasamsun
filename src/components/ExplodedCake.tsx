"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const layers = [
  { 
    id: 1, 
    title: "Bal Ganajı", 
    desc: "Taze çiçek balı ve süt kreması uyumu", 
    color: "from-secondary to-yellow-600",
    offset: -80
  },
  { 
    id: 2, 
    title: "Antep Fıstığı Ezmesi", 
    desc: "Gaziantep'ten taze kavrulmuş boz fıstık", 
    color: "from-pistachio to-green-700",
    offset: 0
  },
  { 
    id: 3, 
    title: "Altın Pandispanya", 
    desc: "Sıcak fırından yumuşak ve doğal doku", 
    color: "from-primary to-amber-900",
    offset: 80
  }
];

const ExplodedCake = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isExploded, setIsExploded] = useState(false);

  return (
    <div className="relative py-12 md:py-24 flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-10 md:mb-12 text-center px-4"
      >
        <h2 className="font-playfair font-black text-3xl md:text-5xl lg:text-6xl text-primary mb-3 md:mb-4 leading-tight">
          Lezzetin <span className="text-accent italic">Katmanlarını</span> Keşfedin
        </h2>
        <p className="text-primary/60 max-w-xl mx-auto font-medium text-base md:text-lg">
          Her bir dilim, Kule Mevlana mutfağının organik malzemeleriyle özenle kurgulandı.
        </p>
      </motion.div>

      <div 
        className="relative h-[320px] md:h-[400px] w-full max-w-md flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsExploded(true)}
        onMouseLeave={() => {
          setIsExploded(false);
          setHoveredId(null);
        }}
        onClick={() => setIsExploded((prev) => !prev)}
      >
        {layers.map((layer, index) => (
          <motion.div
            key={layer.id}
            animate={{
              y: isExploded ? layer.offset : 0,
              rotateX: isExploded ? 45 : 0,
              scale: isExploded ? 1.05 : 1,
              z: isExploded ? index * 50 : 0
            }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 12,
              delay: index * 0.05 
            }}
            onMouseEnter={() => setHoveredId(layer.id)}
            style={{ 
              zIndex: 10 - index,
            }}
            className={`absolute w-64 md:w-80 h-24 rounded-[3rem] shadow-2xl flex items-center justify-center border border-white/40 group bg-gradient-to-br ${layer.color} shadow-[0_20px_50px_rgba(62,39,35,0.2)]`}
          >
            <span className="text-white font-playfair font-bold tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
              {layer.title.toUpperCase()}
            </span>

            {/* Info Badge */}
            <AnimatePresence>
              {isExploded && hoveredId === layer.id && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 220 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute left-0 w-64 p-5 glass-card rounded-3xl hidden md:block border-white/50"
                >
                  <h4 className="text-secondary font-black text-sm mb-1 uppercase tracking-tighter">{layer.title}</h4>
                  <p className="text-primary text-xs leading-relaxed font-semibold">{layer.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 text-primary/40 text-sm font-bold italic"
      >
        {isExploded ? "Keşfetmek için katmanların üzerine gel" : "İçeriği görmek için üzerine gel"}
      </motion.div>
    </div>
  );
};

export default ExplodedCake;
