"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Feather, Heart, Sparkles, Copy, Check } from "lucide-react";
import { BIRTHDAY_LETTER } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerHeartRain } from "./BirthdayConfetti";

export function BirthdayLetter() {
  const [copied, setCopied] = useState(false);

  const handleCopyLetter = () => {
    const fullText = `${BIRTHDAY_LETTER.title}\n\n${BIRTHDAY_LETTER.paragraphs.join(
      "\n\n"
    )}\n\n${BIRTHDAY_LETTER.signOff}\n${BIRTHDAY_LETTER.signature}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    soundEngine.playCelebrationChime();
    triggerHeartRain();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToReply = () => {
    const el = document.getElementById("balas-ulang-tahun");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="surat-ulang-tahun" className="w-full max-w-3xl mx-auto px-4 py-14">
      {/* Letter Parchment Container */}
      <div className="relative rounded-3xl bg-[#FAF7F2] text-[#2c1a14] p-6 sm:p-12 shadow-2xl border border-[#e5d4c3] overflow-hidden">
        
        {/* Vintage Top Corner Ornaments */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#c9b29e] rounded-tl pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#c9b29e] rounded-tr pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#c9b29e] rounded-bl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#c9b29e] rounded-br pointer-events-none" />

        {/* Letter Header */}
        <div className="text-center pb-8 mb-8 border-b border-[#ebd7c5]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4e2d3] text-[#7d4838] text-xs font-semibold uppercase tracking-wider mb-3">
            <Feather className="w-3.5 h-3.5 text-[#b94242]" />
            <span>Surat Tulisan Tangan Spesial</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-[#311c15] font-bold">
            {BIRTHDAY_LETTER.title}
          </h3>
          <span className="font-sans text-xs text-[#8c6758] block mt-1.5 font-medium">
            {BIRTHDAY_LETTER.dateText}
          </span>
        </div>

        {/* Letter Body Paragraphs */}
        <div className="space-y-5 font-serif text-sm sm:text-base leading-relaxed text-[#402a22]">
          {BIRTHDAY_LETTER.paragraphs.map((p, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Letter Signature */}
        <div className="mt-10 pt-6 border-t border-[#ebd7c5] flex flex-col items-end text-right">
          <p className="text-xs text-[#7d5648] italic">{BIRTHDAY_LETTER.signOff}</p>
          <div className="font-hand text-3xl sm:text-4xl text-[#a83232] font-bold mt-1">
            {BIRTHDAY_LETTER.signature}
          </div>
          <div className="inline-flex items-center gap-1 text-[11px] text-[#937163] mt-1">
            <Heart className="w-3 h-3 text-[#b94242] fill-[#b94242]" />
            <span>Tertulis tulus untuk hari bahagiamu</span>
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="mt-8 pt-6 border-t border-dashed border-[#dfcdbb] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyLetter}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-white text-[#5c4036] border border-[#d6bead] text-xs font-semibold shadow-xs transition-all cursor-pointer active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>Surat Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8c675a]" />
                <span>Salin Teks Surat</span>
              </>
            )}
          </button>

          <button
            onClick={handleScrollToReply}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b94242] hover:bg-[#a33232] text-white text-xs font-semibold shadow-md transition-all cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tulis Balasan Ulang Tahun 💌</span>
          </button>
        </div>

      </div>
    </section>
  );
}
