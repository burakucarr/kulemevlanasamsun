"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingCard from "@/components/FloatingCard";
import ExplodedCake from "@/components/ExplodedCake";
import ReelsSection from "@/components/ReelsSection";
import FloatingContact from "@/components/FloatingContact";

import CustomOrderForm from "@/components/CustomOrderForm";

const featuredProducts = [
  { id: 1, title: "Özel Meyveli Pasta", price: "450", category: "Pasta", imageUrl: "/images/products/pastalar.webp", delay: 0.1 },
  { id: 2, title: "Midye Baklava", price: "520", category: "Şerbetli", imageUrl: "/images/products/baklava.webp", delay: 0.2, isSpecial: true },
  { id: 3, title: "Meyveli Kruvasan", price: "120", category: "Fırın", imageUrl: "/images/products/firin.webp", delay: 0.3 },
  { id: 4, title: "Butik Kurabiye", price: "85", category: "Kurabiye", imageUrl: "/images/products/kurabiye.webp", delay: 0.4 },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <Hero />

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
              />
            ))}
          </div>

          {/* Floating Video Portal Side */}
          <div className="w-full lg:w-[400px] sticky top-32">
            <div className="relative aspect-[9/16] w-full rounded-[60px] overflow-hidden border border-black/5 shadow-2xl group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
               <video
                src="/videos/reels.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute bottom-10 left-0 right-0 text-center z-20 px-6">
                <span className="text-white/60 text-[10px] font-black tracking-[0.4em] uppercase mb-2 block">Canlı Mutfak</span>
                <h4 className="text-white font-playfair font-black text-2xl italic">Şu An Fırında...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Order Form Section */}
      <CustomOrderForm />

      {/* Testimonials Section */}
      <section className="py-24 md:py-40 bg-[#FDFDF5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-6">
              Sizden <span className="text-accent italic">Gelenler</span>
            </h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-accent fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "Burcu K.", comment: "Samsun'da yediğim en taze ve hafif ekler buradaydı. Özel gün pastalarımızı da hep buradan alıyoruz.", platform: "Google" },
              { name: "Mert Y.", comment: "Fırın ürünleri gerçekten harika. Sabah 08:30'da taze çıkan o koku için bile gidilir.", platform: "Instagram" },
              { name: "Selin A.", comment: "Kişiye özel pasta tasarımı yaptırdık, hem görüntüsü hem tadı mükemmeldi. Teşekkürler Eyüp Bey!", platform: "Google" }
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-[3rem] border border-black/5 shadow-xl shadow-primary/5"
              >
                <p className="text-primary font-medium italic text-lg mb-8 leading-relaxed">"{testi.comment}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-black text-primary uppercase tracking-widest text-sm">{testi.name}</span>
                  <span className="text-secondary text-[10px] font-bold uppercase tracking-widest">{testi.platform} Yorumu</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 border-t border-black/5 text-center bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h3 className="font-playfair font-black text-3xl md:text-4xl text-primary mb-4 md:mb-6 tracking-tighter">KULE MEVLANA</h3>
          <p className="text-secondary text-sm font-black tracking-[0.4em] uppercase mb-4">
            CAFE • FIRIN • PASTA
          </p>
          <p className="text-primary/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 md:mb-10">
            İşletmeci: <span className="text-primary font-black">EYÜP CAN YİĞİT</span>
          </p>
          
          {/* Location & Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 text-primary/80">
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-bold text-base md:text-lg text-primary uppercase tracking-widest">Bize Ulaşın</h4>
              <p className="font-medium leading-relaxed text-sm md:text-base">
                Atakum, Alaçam Caddesi, No: 218A <br />
                Samsun, Türkiye
              </p>
              <a 
                href="https://maps.google.com/?q=Kule+Mevlana+Samsun" 
                target="_blank" 
                className="inline-block text-accent font-bold border-b border-accent/30 hover:border-accent transition-all pb-0.5 mt-2 text-sm md:text-base"
              >
                Haritada Görüntüle
              </a>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-bold text-base md:text-lg text-primary uppercase tracking-widest">Çalışma Saatleri</h4>
              <p className="font-medium text-sm md:text-base">
                Her gün: 07:00 — 23:00 <br />
                Taze Ürün Saati: <span className="text-accent font-bold">08:30</span>
              </p>
              <a 
                href="tel:+905309351955" 
                className="inline-block text-primary font-black text-lg md:text-xl mt-2 hover:text-accent transition-colors"
              >
                +90 530 935 19 55
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6 md:gap-10 mb-10 md:mb-12">
            <a href="https://instagram.com/kulemevlana" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold text-sm md:text-base">Instagram</a>
            <a href="https://www.yemeksepeti.com/restaurant/kule-mevlana" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold text-sm md:text-base">Yemeksepeti</a>
            <a href="https://getir.com/yemek/restoran/kule-mevlana-samsun" target="_blank" className="text-primary/60 hover:text-accent transition-colors font-bold text-sm md:text-base">Getir</a>
          </div>

          <div className="pt-8 md:pt-12 border-t border-black/5">
            <p className="text-primary/20 text-[9px] md:text-[10px] font-black tracking-[0.4em] md:tracking-[0.5em] uppercase text-center">
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
