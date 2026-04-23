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

  r    <section id="ozel-siparis" className="py-24 md:py-40 bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF9F0] relative overflow-hidden">
      {/* Premium Decorative Elements - Antigravity Style */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-24 h-24 bg-accent/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-[15%] w-32 h-32 bg-pistachio/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Creative Invite */}
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-black text-xs uppercase tracking-[0.5em] mb-6 block"
            >
              Butik Tasarım Stüdyosu
            </motion.span>
            <h2 className="font-playfair font-black text-5xl md:text-7xl text-primary mb-8 leading-[1.1]">
              Sizin İçin <br />
              <span className="text-accent italic relative">
                Eşsiz Bir Sanat
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <br /> Hazırlayalım
            </h2>
            <p className="text-primary/60 text-lg md:text-2xl font-medium mb-12 leading-relaxed max-w-lg">
              Sadece bir tatlı değil, özel anlarınızın unutulmaz bir parçası. Her detayını sizin seçtiğiniz butik pastalar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "%100 Kişiye Özel", desc: "Siz hayal edin, biz yapalım." },
                { title: "El Yapımı Sanat", desc: "Her figür tek tek işlenir." },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent/20 pl-6">
                  <h4 className="font-black text-primary text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-primary/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The "Golden" Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Glow Behind Form */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-pistachio/20 blur-2xl rounded-[4rem] opacity-50" />
            
            <div className="relative bg-white/80 backdrop-blur-2xl rounded-[3.5rem] p-8 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-white">
              {/* Form Content */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-10">
                  <h3 className="font-playfair font-bold text-2xl text-primary italic">Sipariş Talep Formu</h3>
                  <div className="w-12 h-0.5 bg-accent/30 mx-auto mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">İsim Soyisim</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary text-lg"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Telefon</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary text-lg"
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Teslim Tarihi</label>
                    <input
                      required
                      type="date"
                      className="w-full bg-white border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary"
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Kaç Kişilik?</label>
                    <select
                      className="w-full bg-white border-b-2 border-black/5 focus:border-accent px-2 py-3 outline-none transition-all font-medium text-primary appearance-none cursor-pointer"
                      onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                    >
                      <option>10-15 Kişilik</option>
                      <option>20-30 Kişilik</option>
                      <option>40-50 Kişilik</option>
                      <option>50+ Kişilik</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-primary/40 ml-2">Pasta Detayları & Notunuz</label>
                  <textarea
                    rows={3}
                    placeholder="Pastanızın hikayesini bize anlatın..."
                    className="w-full bg-black/5 rounded-2xl px-6 py-4 outline-none focus:bg-accent/5 focus:ring-1 focus:ring-accent/20 transition-all font-medium text-primary resize-none"
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white font-black py-6 rounded-[2rem] flex items-center justify-center gap-4 hover:bg-accent transition-all duration-500 shadow-2xl shadow-primary/20 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Tasarımı Başlat <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
   </motion.div>
        </div>
      </div>
    </section>
  );
}
