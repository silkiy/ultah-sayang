"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Feather, Heart, Copy, Check, Sparkles } from "lucide-react";
import { EDITORIAL_LETTER } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";

export function EditorialLetter() {
  const [copied, setCopied] = useState(false);

  const handleCopyLetter = () => {
    const fullText = `${EDITORIAL_LETTER.headline}\n\n${EDITORIAL_LETTER.paragraphs.join(
      "\n\n"
    )}\n\n${EDITORIAL_LETTER.signOff}\n${EDITORIAL_LETTER.signature}`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    soundEngine.playCelebrationChime();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToReply = () => {
    const el = document.getElementById("reply-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="editorial-letter" className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Parchment Box */}
      <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E8E2D8] shadow-xs relative">
        
        {/* Top Header */}
        <div className="text-center pb-8 border-b border-[#F0EAE1] mb-8">
          <span className="font-sans text-[11px] tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
            {EDITORIAL_LETTER.editionInfo}
          </span>
          <h3 className="font-cormorant text-3xl sm:text-5xl text-[#1A1715] font-normal leading-tight">
            {EDITORIAL_LETTER.headline}
          </h3>
        </div>

        {/* Letter Paragraphs */}
        <div className="space-y-6 font-cormorant text-lg sm:text-xl text-[#3A3530] leading-relaxed">
          {EDITORIAL_LETTER.paragraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-[#F0EAE1] flex flex-col items-end text-right">
          <p className="font-sans text-xs text-[#736B63] italic">
            {EDITORIAL_LETTER.signOff}
          </p>
          <div className="font-hand text-3xl sm:text-4xl text-[#A67C52] font-bold mt-1">
            {EDITORIAL_LETTER.signature}
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="mt-10 pt-6 border-t border-dashed border-[#E8E2D8] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyLetter}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF8F5] hover:bg-[#F2ECE4] border border-[#D9D0C3] text-xs font-medium text-[#4A443D] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span>Tersalin ke Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8C8479]" />
                <span>Salin Surat Ini</span>
              </>
            )}
          </button>

          <button
            onClick={handleScrollToReply}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kirim Balasan Ulang Tahun 💌</span>
          </button>
        </div>

      </div>

    </section>
  );
}
