"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 transition-all duration-300">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full border border-black/5 glass-card transition-all duration-500 ${
          isScrolled ? 'py-2 px-8 scale-95 shadow-xl bg-background/80' : 'scale-100'
        }`}
      >
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group text-left"
        >
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.05 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-primary/5 relative overflow-hidden"
          >
            {/* Minimalist Wheat Stalk Icon (SVG) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary z-10">
              <path d="M12 22V8M12 8C12 8 14 6 16 6M12 8C12 8 10 6 8 6M12 12C12 12 14 10 16 10M12 12C12 12 10 10 8 10M12 16C12 16 14 14 16 14M12 16C12 16 10 14 8 14" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
          </motion.div>
          <div className="flex flex-col -gap-1">
            <span className="font-playfair font-black text-xl tracking-tight text-primary group-hover:text-accent transition-colors leading-none">
              KULE MEVLANA
            </span>
            <span className="text-[9px] font-black tracking-[0.3em] text-secondary uppercase">
              CAFE • FIRIN • PASTA
            </span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {[
            { name: 'Menü', id: 'menu' },
            { name: 'Pastalar', id: 'pastalar' },
            { name: 'Eklerler', id: 'eklerler' },
            { name: 'Özel Sipariş', id: 'ozel-siparis' },
            { name: 'Hakkımızda', id: 'hakkimizda' }
          ].map((item) => (
            <Link 
              key={item.id} 
              href={`#${item.id}`}
              className="text-primary/80 hover:text-accent transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">

          <button 
            className="md:hidden text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 glass-card rounded-3xl p-6 md:hidden flex flex-col gap-6 items-center"
          >
            {[
              { name: 'Menü', id: 'menu' },
              { name: 'Pastalar', id: 'pastalar' },
              { name: 'Eklerler', id: 'eklerler' },
              { name: 'Özel Sipariş', id: 'ozel-siparis' },
              { name: 'Hakkımızda', id: 'hakkimizda' }
            ].map((item) => (
              <Link 
                key={item.id} 
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-outfit font-semibold text-primary hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
