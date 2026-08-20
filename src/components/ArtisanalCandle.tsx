"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wind, RotateCcw, Heart } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerBirthdayFireworks, triggerHeartRain } from "./BirthdayConfetti";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";

export function ArtisanalCandle() {
  const [isLit, setIsLit] = useState(true);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  const handleBlowCandle = () => {
    if (!isLit) return;

    soundEngine.playCandleBlowSound();
    setIsLit(false);

    setTimeout(() => {
      soundEngine.playHappyBirthdayMelody();
      triggerBirthdayFireworks();
      triggerHeartRain();
      setShowCelebrationModal(true);
    }, 600);
  };

  const handleRelight = () => {
    soundEngine.playCelebrationChime();
    setIsLit(true);
    setShowCelebrationModal(false);
  };

  return (
    <section id="candle-ritual" className="relative w-full max-w-4xl mx-auto px-4 py-16 text-center">
      
      {/* Section Subhead */}
      <div className="mb-10">
        <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
          The Birthday Wish Ritual
        </span>
        <h2 className="font-cormorant text-4xl sm:text-5xl font-normal text-[#1A1715]">
          Pejamkan Mata & Ucapkan Harapan
        </h2>
        <p className="text-xs sm:text-sm text-[#736B63] max-w-md mx-auto mt-2 leading-relaxed font-sans">
          Satu doa terbaik di hari ulang tahunmu. Klik lilin atau tombol di bawah saat kamu siap meniupnya.
        </p>
      </div>

      {/* MINIMALIST SCANDINAVIAN CAKE & CANDLE ILLUSTRATION */}
      <div className="relative w-full max-w-xs mx-auto my-8 flex flex-col items-center select-none">
        
        {/* THE CANDLE */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Lilin ulang tahun artisanal"
          onClick={handleBlowCandle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleBlowCandle();
          }}
          className="relative flex flex-col items-center cursor-pointer focus:outline-none z-20 group"
        >
          {/* Flame or Smoke */}
          <div className="h-10 flex items-center justify-center">
            {isLit ? (
              <div className="relative">
                {/* Outer warm amber aura */}
                <div className="w-3.5 h-7 bg-gradient-to-t from-[#D47237] via-[#E8A64D] to-[#FFF4D4] rounded-[50%_50%_35%_35%/80%_80%_20%_20%] candle-flame-active" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-white rounded-full opacity-90" />
              </div>
            ) : (
              <div className="w-2 h-5 bg-gradient-to-t from-gray-400 to-transparent rounded-full candle-smoke-rise" />
            )}
          </div>

          {/* Candle Wick */}
          <div className="w-0.5 h-2 bg-[#3A3530] -mt-1" />

          {/* Sculptural Candle Body */}
          <div className="w-3.5 h-16 rounded-t-sm bg-[#EDE8E1] border border-[#D9D2C7] shadow-xs relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#D4A373]/30" />
          </div>
        </div>

        {/* ARTISANAL CERAMIC CAKE LAYERS */}
        <div className="relative w-44 h-16 rounded-t-2xl bg-[#FAF5EE] border-t border-l border-r border-[#E5DDD2] shadow-xs flex items-center justify-center -mt-1 z-10">
          <span className="text-sm font-serif italic text-[#8A7E72] tracking-wider">
            make a wish
          </span>
        </div>

        <div className="relative w-56 h-20 rounded-t-xl bg-[#F0EAE1] border-l border-r border-[#D9D0C3] shadow-md flex items-center justify-center -mt-1 z-5">
          <span className="font-cormorant text-lg italic text-[#595045]">
            08 • 09 • 2026
          </span>
        </div>

        {/* CERAMIC STAND PEDESTAL */}
        <div className="w-64 h-4 rounded-full bg-[#E5DFD5] border-b-2 border-[#C9BFB0] shadow-sm -mt-1 z-0" />
        <div className="w-24 h-6 bg-[#D9D0C3] rounded-b-md shadow-xs" />
        <div className="w-36 h-2 rounded-full bg-[#C2B7A6]" />
      </div>

      {/* CONTROLS */}
      <div className="mt-8 flex items-center justify-center gap-3">
        {isLit ? (
          <button
            onClick={handleBlowCandle}
            className="px-6 py-3 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
          >
            <Wind className="w-3.5 h-3.5" />
            <span>Tiup Lilin Ulang Tahun</span>
          </button>
        ) : (
          <button
            onClick={handleRelight}
            className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#D9D2C7] text-[#4A443D] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-2xs flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#A67C52]" />
            <span>Nyalakan Lilin Kembali</span>
          </button>
        )}
      </div>

      {/* CELEBRATION MODAL */}
      <AnimatePresence>
        {showCelebrationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-[#E5DFD5] shadow-2xl text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#F5ECE1] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#A67C52]" />
              </div>

              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#A67C52] block mb-1">
                Happy Birthday, Sayang
              </span>

              <h3 className="font-cormorant text-3xl text-[#1A1715] font-normal mb-3">
                Semoga Terkabul Setiap Doamu ✨
              </h3>

              <p className="text-xs text-[#736B63] leading-relaxed mb-6 font-sans">
                Selamat memasuki usia yang baru. Terima kasih sudah selalu menjadi bagian paling indah dalam hidupku.
              </p>

              <button
                onClick={() => setShowCelebrationModal(false)}
                className="w-full py-3 rounded-xl bg-[#1A1715] hover:bg-[#2D2824] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Lanjutkan Membaca Cerita & Kado 🕊️
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
