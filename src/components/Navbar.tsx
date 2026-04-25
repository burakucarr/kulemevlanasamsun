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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-4 transition-all duration-300">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`w-full max-w-6xl flex items-center justify-between px-6 py-2 rounded-full border border-black/5 glass-card transition-all duration-500 shadow-md ${
          isScrolled ? 'py-1.5 px-8 scale-95 shadow-2xl bg-white/90' : 'scale-100'
        }`}
      >
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group text-left"
        >
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.05 }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border border-primary/10 relative overflow-hidden"
          >
            {/* Minimalist Wheat Stalk Icon (SVG) - Now in white for better contrast */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white z-10">
              <path d="M12 22V8M12 8C12 8 14 6 16 6M12 8C12 8 10 6 8 6M12 12C12 12 14 10 16 10M12 12C12 12 10 10 8 10M12 16C12 16 14 14 16 14M12 16C12 16 10 14 8 14" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
          </motion.div>
          <div className="flex flex-col -gap-1">
            <span className="font-playfair font-black text-lg tracking-tight text-primary group-hover:text-accent transition-colors leading-none">
              KULE MEVLANA
            </span>
            <span className="text-[10px] font-black tracking-[0.25em] text-primary/70 uppercase">
              CAFE • FIRIN • PASTA
            </span>
          </div>
        </button>

        {/* Desktop Menu & Contact Info */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8 text-sm font-semibold">
            {[
              { name: 'Menü', id: 'menu' },
              { name: 'Pastalar', id: 'pastalar' },
              { name: 'Eklerler', id: 'eklerler' },
              { name: 'Özel Sipariş', id: 'ozel-siparis' },
              { name: 'Hakkımızda', id: 'hakkimizda' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary/80 hover:text-accent transition-colors relative group text-sm font-semibold"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 border-l border-black/10 pl-8 ml-2">
            <div className="flex flex-col text-right">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Beypınar+Mah+Elbistan+Bulv+No+24+A+Atakum+Samsun" 
                target="_blank"
                className="group flex flex-col items-end"
              >
                <span className="text-[7px] font-black text-accent uppercase tracking-[0.2em] leading-none mb-1 opacity-0 group-hover:opacity-100 transition-all">KONUM İÇİN TIKLAYINIZ</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-[0.1em] leading-none mb-1 group-hover:text-accent transition-colors">BEYPINAR MAH. ELBİSTAN BULV.</span>
              </a>
              <a 
                href="tel:+905309351955" 
                className="text-xs font-black text-primary hover:text-accent transition-colors"
              >
                0530 935 19 55
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-primary p-2"
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
              <button 
                key={item.id} 
                onClick={() => {
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="text-xl font-outfit font-semibold text-primary hover:text-accent transition-colors"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
