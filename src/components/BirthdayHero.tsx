"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Cake, Ticket, Feather, Flame, ArrowDown } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";
import { triggerBirthdayFireworks } from "./BirthdayConfetti";
import { soundEngine } from "@/lib/birthday-sound";

export function BirthdayHero() {
  const handleHeroClick = () => {
    soundEngine.playCelebrationChime();
    triggerBirthdayFireworks();
  };

  return (
    <header className="relative min-h-[75vh] flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center overflow-hidden">
      {/* Background ambient light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff5e8e]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#feca57]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onClick={handleHeroClick}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5e8e]/15 border border-[#ff5e8e]/30 text-[#ff80a6] text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs cursor-pointer hover:bg-[#ff5e8e]/25 transition-all"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Spesial Hari Ulang Tahun • 08 September 2026</span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-serif text-3xl sm:text-6xl md:text-7xl text-white font-bold tracking-tight max-w-3xl leading-tight mb-4"
      >
        Selamat Ulang Tahun, <br />
        <span className="font-hand font-normal text-[#ff7675] block mt-2 text-4xl sm:text-6xl md:text-7xl">
          {BIRTHDAY_CONFIG.recipientName} Kesayanganku ✨🎂
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="text-[#c3b6d7] text-sm sm:text-base max-w-xl mb-8 leading-relaxed font-normal"
      >
        Hari ini adalah harimu! Website kecil ini dibuat khusus dengan segenap rasa cinta untuk merayakan hari kelahiranmu. Ada kue interaktif, lampion harapan, buku kupon cinta, dan surat spesial buat kamu. 🤍
      </motion.p>

      {/* Quick Navigation Pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl mx-auto"
      >
        <a
          href="#tiup-lilin"
          className="px-4 py-2 rounded-xl bg-[#241a3d] hover:bg-[#342657] border border-[#48356f] text-xs font-medium text-white flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Cake className="w-3.5 h-3.5 text-[#ff7675]" />
          <span>Tiup Lilin</span>
        </a>

        <a
          href="#lampion-harapan"
          className="px-4 py-2 rounded-xl bg-[#241a3d] hover:bg-[#342657] border border-[#48356f] text-xs font-medium text-white flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Flame className="w-3.5 h-3.5 text-[#feca57]" />
          <span>Lampion Harapan</span>
        </a>

        <a
          href="#kupon-cinta"
          className="px-4 py-2 rounded-xl bg-[#241a3d] hover:bg-[#342657] border border-[#48356f] text-xs font-medium text-white flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Ticket className="w-3.5 h-3.5 text-[#ff9ff3]" />
          <span>Kupon Cinta</span>
        </a>

        <a
          href="#surat-ulang-tahun"
          className="px-4 py-2 rounded-xl bg-[#241a3d] hover:bg-[#342657] border border-[#48356f] text-xs font-medium text-white flex items-center gap-1.5 transition-all shadow-xs"
        >
          <Feather className="w-3.5 h-3.5 text-[#ff80a6]" />
          <span>Surat Spesial</span>
        </a>
      </motion.div>
    </header>
  );
}
