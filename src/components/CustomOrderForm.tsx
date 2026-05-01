"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Sparkles, ShieldCheck, X } from "lucide-react";
import { ProductImage } from "@/data/products";
import Image from "next/image";

export default function CustomOrderForm({ 
  onViewGallery, 
  selectedProduct,
  onClearSelection
}: { 
  onViewGallery: () => void;
  selectedProduct: ProductImage | null;
  onClearSelection: () => void;
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "6-8 Kişilik",
    flavor: "Çikolatalı & Fıstıklı",
    eventType: "Doğum Günü",
    shape: "Yuvarlak",
    deliveryType: "Dükkandan Teslim",
    allergies: "Yok",
    notes: "",
  });

  const calculatePrice = () => {
    if (!selectedProduct || !selectedProduct.price) return null;
    let base = parseInt(selectedProduct.price, 10);
    if (isNaN(base)) return null;

    const sizeMult: Record<string, number> = {
      "4-6 Kişilik": 0.8,
      "6-8 Kişilik": 1.0,
      "8-10 Kişilik": 1.3,
      "10-15 Kişilik": 1.8,
      "20-30 Kişilik": 3.0,
      "40-50 Kişilik": 4.5,
      "50+ Kişilik": 6.0,
    };
    
    let total = base * (sizeMult[formData.people] || 1.0);

    if (formData.shape === "Çok Katlı") total += 300;
    else if (formData.shape === "Özel Kesim (Rakam/Harf)") total += 150;
    else if (formData.shape === "Kalp") total += 50;

    if (formData.deliveryType === "Adrese Teslimat (+Ücretli)") total += 150;

    return Math.round(total);
  };

  const currentPrice = calculatePrice();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message
    let message = `*Yeni Özel Pasta Tasarım Talebi*\n\n`;
    if (selectedProduct) {
      message += `*Seçilen Model:* ${selectedProduct.alt}\n`;
    }
    if (currentPrice) {
      message += `*Tahmini Tutar:* ${currentPrice} TL\n\n`;
    } else if (selectedProduct) {
      message += `\n`;
    }
    
    message += `*Müşteri:* ${formData.name}\n` +
      `*Telefon:* ${formData.phone}\n` +
      `*Etkinlik:* ${formData.eventType}\n` +
      `*Tarih:* ${formData.date}\n` +
      `*Kişi Sayısı:* ${formData.people}\n` +
      `*Pasta Formu:* ${formData.shape}\n` +
      `*Aroma:* ${formData.flavor}\n` +
      `*Teslimat:* ${formData.deliveryType}\n` +
      `*Alerjen Notu:* ${formData.allergies}\n` +
      `*Tasarım Notları:* ${formData.notes}\n\n`;

    // Add image URL at the very bottom for WhatsApp link preview
    if (selectedProduct) {
      message += `*Model Resmi İçin Tıklayın:*\n${window.location.origin}${selectedProduct.src}`;
    }
    
    window.open(`https://wa.me/905309351955?text=${encodeURIComponent(message)}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="ozel-siparis" className="py-24 md:py-40 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9F0] relative overflow-hidden">
      {/* Animated Mesh Gradient / Blobs Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        {/* Latte Blob */}
        <motion.div 
          animate={{ 
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#EADBC8] rounded-full blur-[100px]" 
        />
        {/* Peach Blob */}
        <motion.div 
          animate={{ 
            x: [0, -60, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] bg-[#FCE9DB] rounded-full blur-[100px]" 
        />
        {/* Cream Blob */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[450px] h-[450px] bg-[#F8F4E1] rounded-full blur-[80px]" 
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pistachio/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            <h2 className="font-playfair font-black text-5xl md:text-7xl text-primary mb-8 leading-[1.1]">
              Aklınızdaki <br />
              <span className="text-accent italic">Pastayı</span> Birlikte Tasarlayalım
            </h2>
            
            <p className="text-primary/60 text-lg md:text-2xl font-medium mb-6 leading-relaxed">
              Kule Mevlana'nın 50 yıllık tecrübesiyle, tam da istediğiniz gibi bir pasta hazırlayalım. 
              Hayalinizdeki tasarımı ve detayları bize iletin, gerisini ustalarımıza bırakın.
            </p>

            <button 
              onClick={onViewGallery}
              className="group flex items-center gap-3 text-accent font-black uppercase tracking-widest text-sm mb-12 hover:text-primary transition-colors"
            >
              <Sparkles size={18} className="animate-pulse" />
              <span className="border-b-2 border-accent/20 group-hover:border-primary transition-all">Pasta Galerisini İnceleyin</span>
            </button>

            <div className="space-y-8">
              {[
                { icon: <ShieldCheck className="text-accent" />, title: "En Taze, En Kaliteli", desc: "Hazır karışımlar kullanmıyoruz. Siparişinize özel, taptaze meyveler ve gerçek çikolatayla sıfırdan hazırlıyoruz." },
                { icon: <MapPin className="text-accent" />, title: "Güvenli Teslimat", desc: "En mutlu gününüzde sürpriz yaşamamanız için, pastalarınızı soğutmalı araçlarımızla özenle taşıyoruz." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-3xl bg-white shadow-xl shadow-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-primary uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                    <p className="text-primary/50 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-pistachio/20 blur-3xl rounded-[4rem] opacity-30" />
            
            <div className="relative bg-white/90 backdrop-blur-3xl rounded-[4rem] p-8 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.07)] border border-white overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="order-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    {/* Selected Product Card */}
                    <AnimatePresence>
                      {selectedProduct && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-accent/5 rounded-3xl p-6 border border-accent/20 flex items-center gap-6 relative group">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden relative shadow-lg flex-shrink-0">
                              <Image 
                                src={selectedProduct.src} 
                                alt={selectedProduct.alt} 
                                fill 
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1 block">Seçilen Model</span>
                              <h4 className="font-bold text-primary text-sm leading-tight mb-1">{selectedProduct.alt}</h4>
                              {selectedProduct.price && (
                                <p className="text-accent font-black text-lg">
                                  {currentPrice ? currentPrice : selectedProduct.price} TL
                                  {currentPrice && <span className="text-[10px] font-bold text-primary/40 ml-2 tracking-widest">(TAHMİNİ TUTAR)</span>}
                                </p>
                              )}
                            </div>
                            <button
                              type="button"
                              onClick={onClearSelection}
                              className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary/40 hover:text-accent hover:scale-110 transition-all shadow-sm"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <div className="h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">İsim Soyisim</label>
                        <input
                          required
                          type="text"
                          placeholder="Örn: Burak Uçar"
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary"
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Telefon</label>
                        <input
                          required
                          type="tel"
                          placeholder="05xx xxx xx xx"
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary"
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Etkinlik Türü</label>
                        <select
                          value={formData.eventType}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        >
                          <option>Doğum Günü</option>
                          <option>Düğün & Nişan</option>
                          <option>Yıldönümü</option>
                          <option>Baby Shower</option>
                          <option>Kurumsal Etkinlik</option>
                          <option>Diğer</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Teslim Tarihi</label>
                        <input
                          required
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary"
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Kişi Sayısı</label>
                        <select
                          value={formData.people}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                          onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                        >
                          <option>4-6 Kişilik</option>
                          <option>6-8 Kişilik</option>
                          <option>8-10 Kişilik</option>
                          <option>10-15 Kişilik</option>
                          <option>20-30 Kişilik</option>
                          <option>40-50 Kişilik</option>
                          <option>50+ Kişilik</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Pasta Formu</label>
                        <select
                          value={formData.shape}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                          onChange={(e) => setFormData({ ...formData, shape: e.target.value })}
                        >
                          <option>Yuvarlak</option>
                          <option>Kare</option>
                          <option>Kalp</option>
                          <option>Çok Katlı</option>
                          <option>Özel Kesim (Rakam/Harf)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Ana Aroma</label>
                        <select
                          value={formData.flavor}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                          onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                        >
                          <option>Çikolatalı & Fıstıklı</option>
                          <option>Meyveli (Karışık)</option>
                          <option>Karamelli & Krokanlı</option>
                          <option>Lotus & Biscoff</option>
                          <option>Vanilyalı & Çilekli</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Teslimat</label>
                        <select
                          value={formData.deliveryType}
                          className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                          onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value })}
                        >
                          <option>Dükkandan Teslim</option>
                          <option>Adrese Teslimat (+Ücretli)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Alerjen Notu / Ek İstekler</label>
                      <textarea
                        rows={2}
                        placeholder="Örn: Kuruyemiş alerjisi var, Az şekerli olsun..."
                        className="w-full bg-black/5 rounded-2xl px-6 py-4 outline-none focus:bg-accent/5 transition-all font-medium text-primary resize-none"
                        onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                      ></textarea>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Tasarım Detayları</label>
                      <textarea
                        rows={3}
                        placeholder="Pastanızın üzerinde ne yazsın? Hangi konsepti hayal ediyorsunuz?"
                        className="w-full bg-black/5 rounded-2xl px-6 py-4 outline-none focus:bg-accent/5 transition-all font-medium text-primary resize-none"
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-primary text-white font-black py-6 rounded-3xl flex items-center justify-center gap-4 hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20 group"
                    >
                      SİPARİŞ TALEBİNİ GÖNDER <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-8"
                  >
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto text-accent mb-4">
                      <ShieldCheck size={48} />
                    </div>
                    <h3 className="font-playfair font-black text-3xl text-primary">Talebiniz Hazırlandı!</h3>
                    <p className="text-primary/60 text-lg leading-relaxed">
                      WhatsApp üzerinden detayları onaylayarak <br />
                      siparişinizi tamamlayabilirsiniz. <br />
                      Ustalıkla hazırlanan lezzetimiz için sabırsızlanıyoruz!
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-accent font-bold border-b border-accent/30 hover:border-accent transition-all pb-1 uppercase tracking-widest text-xs"
                    >
                      Yeni Bir Talep Oluştur
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
