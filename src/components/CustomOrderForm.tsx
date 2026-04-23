"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Users, Cake } from "lucide-react";

export default function CustomOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    people: "10-15",
    flavor: "Çikolatalı",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Yeni Özel Pasta Sipariş Talebi*%0A%0A*İsim:* ${formData.name}%0A*Telefon:* ${formData.phone}%0A*Tarih:* ${formData.date}%0A*Kişi Sayısı:* ${formData.people}%0A*Aroma:* ${formData.flavor}%0A*Notlar:* ${formData.notes}`;
    window.open(`https://wa.me/905309351955?text=${message}`, "_blank");
  };

  return (
    <section id="ozel-siparis" className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pistachio/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="font-playfair font-black text-4xl md:text-6xl text-primary mb-8 leading-tight">
              Hayalinizdeki <span className="text-accent italic">Pastayı</span> Birlikte Tasarlayalım
            </h2>
            <p className="text-primary/60 text-lg md:text-xl font-medium mb-10 leading-relaxed">
              Özel günleriniz için size özel tasarlanmış, taptaze ve sanatsal pastalar. 
              Formu doldurun, sizinle hemen iletişime geçelim.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Users className="text-accent" />, title: "Kişiye Özel Boyut", desc: "10 kişiden 100 kişiye kadar her boyutta pasta." },
                { icon: <Cake className="text-accent" />, title: "Sınırsız Aroma Seçeneği", desc: "En taze meyveler ve premium Belçika çikolatası." },
                { icon: <Calendar className="text-accent" />, title: "Zamanında Teslimat", desc: "Söz verdiğimiz saatte, en taze haliyle." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <p className="text-primary/50 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-black/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Adınız Soyadınız</label>
                  <input
                    required
                    type="text"
                    placeholder="Eyüp Can..."
                    className="w-full bg-background border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Telefon Numaranız</label>
                  <input
                    required
                    type="tel"
                    placeholder="0530..."
                    className="w-full bg-background border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary"
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Teslim Tarihi</label>
                  <input
                    required
                    type="date"
                    className="w-full bg-background border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary"
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Kaç Kişilik?</label>
                  <select
                    className="w-full bg-background border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary appearance-none"
                    onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  >
                    <option>10-15 Kişilik</option>
                    <option>20-30 Kişilik</option>
                    <option>40-50 Kişilik</option>
                    <option>50+ Kişilik</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Pasta Aroması</label>
                <select
                  className="w-full bg-background border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary appearance-none"
                  onChange={(e) => setFormData({ ...formData, flavor: e.target.value })}
                >
                  <option>Çikolatalı & Fıstıklı</option>
                  <option>Meyveli (Mevsim Meyveleri)</option>
                  <option>Karamelli & Krokanlı</option>
                  <option>Lotus & Biscoff</option>
                  <option>Diğer (Notlarda Belirtin)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-4">Pasta Notu / Tasarım Detayları</label>
                <textarea
                  placeholder="Pastanızın üzerinde ne yazsın? Hangi renkler olsun?"
                  rows={4}
                  className="w-full bg-background border border-black/5 rounded-3xl px-6 py-4 outline-none focus:border-accent/30 transition-all font-medium text-primary resize-none"
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-accent transition-all duration-500 shadow-xl shadow-primary/10 group"
              >
                Talep Gönder <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
