"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCard from "@/components/FloatingCard";
import FloatingContact from "@/components/FloatingContact";
import CustomOrderForm from "@/components/CustomOrderForm";
import FAQ from "@/components/FAQ";
import { categories } from "@/data/products";
import type { ProductCategory } from "@/data/products";

const ProductGallery = dynamic(() => import("@/components/ProductGallery"), {
  ssr: false,
});

const featuredProducts = [
  { id: 1, title: "Özel Meyveli Pasta", price: "450", category: "Pasta", imageUrl: "/images/products/pastalar.webp", delay: 0.1 },
  { id: 2, title: "Midye Baklava", price: "520", category: "Şerbetli", imageUrl: "/images/products/baklava.webp", delay: 0.2, isSpecial: true },
  { id: 3, title: "Meyveli Kruvasan", price: "120", category: "Fırın", imageUrl: "/images/products/firin.webp", delay: 0.3 },
  { id: 4, title: "Butik Kurabiye", price: "85", category: "Kurabiye", imageUrl: "/images/products/kurabiye.webp", delay: 0.4 },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | null>(null);

  const [isMuted, setIsMuted] = useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  const handleOpenOzelPasta = () => {
    const ozelPasta = categories.find(c => c.id === 'ozel-pastalar');
    if (ozelPasta) setActiveCategory(ozelPasta);
  };

  const toggleMute = () => {
    const v = document.getElementById('reels-video') as HTMLVideoElement;
    if (v) {
      v.muted = !v.muted;
      setIsMuted(v.muted);
    }
  };

  return (
    <>
      <AnimatePresence>
        {activeCategory && (
          <ProductGallery
            key={activeCategory.id}
            category={activeCategory}
            onClose={() => setActiveCategory(null)}
          />
        )}
      </AnimatePresence>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <div id="pastalar" />
      <div id="eklerler" />
      <Hero onCategoryClick={setActiveCategory} />

      {/* Dark → Cream transition strip */}
      <div className="h-24 bg-gradient-to-b from-[#1A0C04] to-[#FDFDF5]" />

      {/* Featured Products Gallery */}
      <section id="menu" className="py-16 md:py-32 container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-4 md:gap-8">
          <div className="max-w-3xl">
            <h2 className="font-playfair font-black text-5xl md:text-7xl lg:text-8xl text-primary mb-6 md:mb-10 leading-tight">
              FIRINDAN <span className="text-accent italic">TAZE</span> <br /> HİKAYELER
            </h2>
            <p className="text-primary/60 text-lg md:text-2xl font-medium max-w-xl">
              Kule Mevlana mutfağında her sabah aşkla hazırlanan, 
              o sıcak fırın kokusunun ardındaki gerçek emek ve tutku.
            </p>
          </div>
          <button className="text-accent font-bold border-b-2 border-accent/20 hover:border-accent transition-all pb-2 text-lg md:text-xl flex-shrink-0">
            Tüm Menüyü Keşfet
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 flex-grow">
            {featuredProducts.map((product) => (
              <FloatingCard 
                key={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
                delay={product.delay}
                isSpecial={product.isSpecial}
                priority={product.id <= 2}
                onClick={() => {
                  const catMap: Record<string, string> = {
                    'Pasta': 'ozel-pastalar',
                    'Şerbetli': 'geleneksel-baklava',
                    'Fırın': 'firin-kahvalti',
                    'Kurabiye': 'butik-kurabiyeler'
                  };
                  const categoryId = catMap[product.category];
                  const targetCategory = categories.find(c => c.id === categoryId);
                  if (targetCategory) setActiveCategory(targetCategory);
                }}
              />
            ))}
          </div>

          {/* Floating Video Portal Side */}
          <div className="w-full lg:w-[400px] sticky top-32">
            <div className="relative aspect-[9/16] w-full rounded-[60px] overflow-hidden border border-black/5 shadow-2xl group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
               <video
                id="reels-video"
                src="/videos/reels.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              
              {/* Sound Toggle Button */}
              <button 
                onClick={toggleMute}
                className="absolute top-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-white/20 transition-all flex items-center justify-center"
              >
                {isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>

              <div className="absolute bottom-10 left-0 right-0 text-center z-20 px-6">
                <span className="text-white/60 text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Canlı Mutfak</span>
                <h4 className="text-white font-playfair font-black text-2xl italic">Şu An Fırında...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Form Section */}
      <CustomOrderForm onViewGallery={handleOpenOzelPasta} />

      {/* Testimonials Section */}
      <section className="py-24 md:py-40 bg-[#FDFDF5] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
          <div className="text-center">
            <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-6">
              Sizden <span className="text-accent italic">Gelenler</span>
            </h2>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-primary/40 text-xs font-black uppercase tracking-[0.3em]">Google & Instagram Yorumları</p>
          </div>
        </div>

        {/* Draggable Slider Container */}
        <div className="relative px-4 md:px-0">
          <motion.div 
            className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-12"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {[
              { name: "Samet Köse", comment: "Kalitenin ve lezzetin tek adresi. Pastaları unutulmaz, hijyen ve temizlik üst düzey. Ailenizle vakit geçirebileceğiniz harika bir mekan.", platform: "Google" },
              { name: "Selin K.", comment: "Özel tasarım pastamız tam hayal ettiğimiz gibiydi. Hem görseli hem de tadı şahaneydi, emeğinize sağlık!", platform: "Instagram" },
              { name: "Fatih Cevizci", comment: "Gerçekten çok kaliteli ve taze ürünler. Çalışanlar çok cana yakın ve ilgili.", platform: "Google" },
              { name: "Deniz A.", comment: "Kule Mevlana'da kahve ve ekler ikilisi favorim. Ambiyans çok huzurlu, Atakum'un en iyi kaçış noktası.", platform: "Instagram" },
              { name: "Kemal Ömür", comment: "Pastaları tek kelimeyle efsane! Atakum'da daha iyisini yemedim.", platform: "Google" },
              { name: "Mert B.", comment: "Her sabah taze kruvasan kokusuyla uyanmak... Samsun'da gerçek artisan lezzet arayanlara tavsiyemdir.", platform: "Instagram" },
              { name: "Batuhan Çelebi", comment: "Baklava, ekmek ve unlu mamuller... Her şey taptaze ve çok lezzetli.", platform: "Google" },
              { name: "Buse T.", comment: "Doğum günü partimiz için hazırladığınız butik kurabiyeler hem çocukların hem de bizim favorimiz oldu. Teşekkürler!", platform: "Instagram" },
              { name: "Öner Barut", comment: "Pastaları harika, tam kıvamında. Özel günlerimiz için tek adresimiz.", platform: "Google" },
              { name: "Neslihan Aktaş", comment: "Hem unlu mamülleri hem de tatlıları gerçekten çok güzel. Kesinlikle tavsiye ederim.", platform: "Google" },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[85vw] md:w-[420px] snap-center"
              >
                <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-black/5 shadow-xl shadow-primary/5 h-full flex flex-col justify-between hover:border-accent/20 transition-colors">
                  <p className="text-primary font-medium italic text-base md:text-lg mb-8 leading-relaxed">"{testi.comment}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-primary uppercase tracking-widest text-xs md:text-sm">{testi.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{testi.platform}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Scroll Progress Bar */}
          <div className="max-w-xs mx-auto h-1 bg-black/5 rounded-full overflow-hidden mt-4">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "20%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer id="hakkimizda" className="py-24 md:py-32 border-t border-black/5 bg-[#FDFDF5] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h3 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-4 tracking-tighter">KULE MEVLANA</h3>
            <p className="text-secondary text-sm font-black tracking-[0.4em] uppercase mb-4">
              CAFE • FIRIN • PASTA
            </p>
            <p className="text-primary/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-12">
              İşletmeci: <span className="text-primary font-black">EYÜP CAN YİĞİT</span>
            </p>

            {/* Integrated About Us Block */}
            <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center mb-24 shadow-2xl">
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/about-team.jpg"
                  alt="Kule Mevlana - Samsun pastane ve taze fırın lezzetleri"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 text-left max-w-2xl p-8 md:p-16">
                <div className="space-y-6 text-white/90 text-base md:text-lg font-medium leading-relaxed mb-10">
                  <p>
                    Kule Mevlana, <strong>Samsun pastane</strong> kültürünün yarım asırlık lezzet mirasıyla, modern ve yaratıcı bir vizyonu birleştiren bir işletmedir.
                  </p>
                  <p>
                    Her sabah <strong>taze fırın</strong> ürünlerimiz, kişiye özel butik pasta tasarımları ve geleneksel lezzetleriyle Samsun halkının güven duyduğu adıyız.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/20 pt-8">
                  <div className="space-y-2">
                    <h4 className="text-amber-400 font-black tracking-widest text-xs uppercase">Misyonumuz</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Kaliteden taviz vermeden, her müşteriye taze, sağlıklı ve lezzetli bir deneyim sunmak.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-amber-400 font-black tracking-widest text-xs uppercase">Vizyonumuz</h4>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      Türkiye'nin en seçkin pastane ve fırını olmak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location & Branches */}
          <div className="mb-20">
            <h4 className="text-center font-bold text-sm text-secondary uppercase tracking-[0.3em] mb-12">Şubelerimiz</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-primary/80 text-center">
              <div className="space-y-4">
                <h5 className="font-black text-xl text-primary">BALAÇ ŞUBESİ(KULE)</h5>
                <p className="font-medium leading-relaxed">
                  Beypınar Mah. Elbistan Bulv. <br />
                  No: 24/A, Atakum / Samsun
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Beypınar+Mah+Elbistan+Bulv+No+24+A+Atakum+Samsun" 
                  target="_blank" 
                  className="inline-block text-accent font-bold border-b border-accent/20 hover:border-accent transition-all pb-0.5 text-sm"
                >
                  Yol Tarifi Al
                </a>
              </div>
              <div className="space-y-4">
                <h5 className="font-black text-xl text-primary">TÜRKİŞ ŞUBESİ</h5>
                <p className="font-medium leading-relaxed">
                  Mevlana Mah. 736. Sk. <br />
                  No: 2, Atakum / Samsun
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Mevlana+Mah+736+Sokak+No+2+Atakum+Samsun" 
                  target="_blank" 
                  className="inline-block text-accent font-bold border-b border-accent/20 hover:border-accent transition-all pb-0.5 text-sm"
                >
                  Yol Tarifi Al
                </a>
              </div>
              <div className="space-y-4">
                <h5 className="font-black text-xl text-primary">ÖMÜREVLERİ ŞUBESİ</h5>
                <p className="font-medium leading-relaxed">
                  Cumhuriyet Mah. İsmet İnönü Bulv. <br />
                  No: 306, Atakum / Samsun
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Cumhuriyet+Mah+İsmet+İnönü+Bulv+No+306+Atakum+Samsun" 
                  target="_blank" 
                  className="inline-block text-accent font-bold border-b border-accent/20 hover:border-accent transition-all pb-0.5 text-sm"
                >
                  Yol Tarifi Al
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 text-center border-t border-black/5 pt-16">
            <div className="space-y-4">
              <h4 className="font-bold text-base text-primary uppercase tracking-widest">İletişim</h4>
              <a 
                href="tel:+905309351955" 
                className="inline-block text-primary font-black text-3xl md:text-4xl hover:text-accent transition-colors"
              >
                0530 935 19 55
              </a>
              <p className="text-xs font-medium opacity-50 italic">Sipariş ve Rezervasyon için arayabilirsiniz.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-base text-primary uppercase tracking-widest">Çalışma Saatleri</h4>
              <p className="font-medium text-lg">
                Her gün: 07:00 — 23:00 <br />
                <span className="text-accent font-black">Gün boyu fırından taze ve sıcak...</span>
              </p>
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-10 mb-12 border-t border-black/5 pt-12">
            <a href="https://instagram.com/kulemevlana" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold">Instagram</a>
            <a href="https://www.yemeksepeti.com/restaurant/kule-mevlana" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold">Yemeksepeti</a>
            <a href="https://getir.com/yemek/restoran/kule-mevlana-samsun" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold">Getir</a>
          </div>

          <div className="pt-12 border-t border-black/5">
            <p className="text-primary/20 text-[10px] font-black tracking-[0.5em] uppercase text-center">
              © 2026 KULE MEVLANA | TÜM HAKLARI SAKLIDIR
            </p>
          </div>
        </div>
      </footer>
      </main>

      {/* Fixed floating contact buttons */}
      <FloatingContact />
    </>
  );
}
