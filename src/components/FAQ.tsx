"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Kişiye özel pasta siparişi için ne kadar önceden haber vermeliyim?",
    answer: "Butik tasarımlı pastalarımız için en az 3-5 gün öncesinden sipariş oluşturmanızı öneriyoruz. Ancak acil durumlar için dükkanımızda her gün taze hazırlanan günlük pastalarımız da mevcuttur."
  },
  {
    question: "Samsun dışına veya uzak ilçelere gönderim yapıyor musunuz?",
    answer: "Kaliteyi ve tazeliği korumak adına teslimatlarımızı Atakum ve Samsun merkez ilçeleriyle sınırlandırıyoruz. Özel soğutmalı araçlarımızla güvenli teslimat sağlıyoruz."
  },
  {
    question: "Alerjen uyarısı ve içerik bilgisi alabilir miyim?",
    answer: "Tüm ürünlerimizde en kaliteli malzemeleri kullanıyoruz. Kuruyemiş, gluten veya laktoz hassasiyetiniz varsa lütfen sipariş formunda belirtiniz. Sizin için içerik modifikasyonu yapabiliyoruz."
  },
  {
    question: "Pasta tasarımlarınızı nerede görebilirim?",
    answer: "Web sitemizdeki galeri bölümünden veya Instagram hesabımızdan güncel tasarımlarımızı inceleyebilirsiniz. Ayrıca hayalinizdeki bir görseli bize WhatsApp üzerinden göndererek fiyat teklifi alabilirsiniz."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white border-t border-black/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 rounded-full text-accent font-black text-[10px] uppercase tracking-widest mb-4">
            <HelpCircle size={14} /> Sıkça Sorulan Sorular
          </div>
          <h2 className="font-playfair font-black text-4xl md:text-5xl text-primary">
            Merak Edilen <span className="text-accent italic">Detaylar</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-black/5 rounded-[2rem] overflow-hidden bg-[#FDFDF5]/30 hover:bg-[#FDFDF5] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="font-bold text-primary text-lg md:text-xl pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className="text-accent flex-shrink-0"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-primary/60 text-base md:text-lg leading-relaxed border-t border-black/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
