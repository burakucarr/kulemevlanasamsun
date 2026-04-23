"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Sparkles, ShieldCheck } from "lucide-react";

export default function CustomOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "10-15",
    flavor: "Çikolatalı & Fıstıklı",
    eventType: "Doğum Günü",
    shape: "Yuvarlak",
    deliveryType: "Dükkandan Teslim",
    allergies: "Yok",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Yeni Özel Pasta Tasarım Talebi*%0A%0A` +
      `*Müşteri:* ${formData.name}%0A` +
      `*Telefon:* ${formData.phone}%0A` +
      `*Etkinlik:* ${formData.eventType}%0A` +
      `*Tarih:* ${formData.date}%0A` +
      `*Kişi Sayısı:* ${formData.people}%0A` +
      `*Pasta Formu:* ${formData.shape}%0A` +
      `*Aroma:* ${formData.flavor}%0A` +
      `*Teslimat:* ${formData.deliveryType}%0A` +
      `*Alerjen Notu:* ${formData.allergies}%0A` +
      `*Tasarım Notları:* ${formData.notes}`;
    
    window.open(`https://wa.me/905309351955?text=${message}`, "_blank");
  };

  return (
    <section id="ozel-siparis" className="py-24 md:py-40 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9F0] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pistachio/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="relative">
            <h2 className="font-playfair font-black text-5xl md:text-7xl text-primary mb-8 leading-[1.1]">
              Hayalleriniz <br />
              <span className="text-accent italic">Lezzete</span> Dönüşsün
            </h2>
            
            <p className="text-primary/60 text-lg md:text-2xl font-medium mb-12 leading-relaxed">
              Kule Mevlana'nın yarım asırlık ustalığını, sizin hayal gücünüzle birleştiriyoruz. 
              Sadece size özel, eşi benzeri olmayan bir pasta deneyimi için formu doldurun.
            </p>

            <div className="space-y-8">
              {[
                { icon: <ShieldCheck className="text-accent" />, title: "Özenle Seçilmiş Malzemeler", desc: "Sadece en taze meyveler ve gerçek Belçika çikolatasıyla hazırlıyoruz." },
                { icon: <MapPin className="text-accent" />, title: "Adrese Teslim", desc: "Atakum ve çevresine özel soğutmalı araçlarımızla teslimat." },
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
            
            <div className="relative bg-white/90 backdrop-blur-3xl rounded-[4rem] p-8 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.07)] border border-white">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Section 1: Contact */}
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

                {/* Section 2: Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Etkinlik Türü</label>
                    <select
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
                      className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary"
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                {/* Section 3: Cake Specs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Kişi Sayısı</label>
                    <select
                      className="w-full bg-transparent border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary cursor-pointer appearance-none"
                      onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    >
                      <option>10-15 Kişilik</option>
                      <option>20-30 Kişilik</option>
                      <option>40-50 Kişilik</option>
                      <option>50+ Kişilik</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Pasta Formu</label>
                    <select
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

                {/* Section 4: Flavor & Delivery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Ana Aroma</label>
                    <select
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
                  TASARIMI BAŞLAT <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
