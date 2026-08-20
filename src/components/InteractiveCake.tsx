"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Flame, RotateCcw, Heart, Gift } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerBirthdayFireworks, triggerHeartRain } from "./BirthdayConfetti";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";

export function InteractiveCake() {
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  const handleBlowCandles = () => {
    if (isBlownOut) return;

    soundEngine.playCandleBlowSound();
    setCandlesLit([false, false, false]);
    setIsBlownOut(true);

    setTimeout(() => {
      soundEngine.playHappyBirthdayMelody();
      triggerBirthdayFireworks();
      triggerHeartRain();
      setShowCelebrationModal(true);
    }, 600);
  };

  const handleRelightCandles = () => {
    soundEngine.playCelebrationChime();
    setCandlesLit([true, true, true]);
    setIsBlownOut(false);
    setShowCelebrationModal(false);
  };

  return (
    <section id="tiup-lilin" className="relative w-full max-w-4xl mx-auto px-4 py-12 text-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#ff7675]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7675]/15 border border-[#ff7675]/30 text-[#ff8e8c] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#ff7675]" />
          <span>Kue Ulang Tahun Interaktif</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Make a Wish & Tiup Lilinnya 🎂
        </h2>
        <p className="text-xs sm:text-sm text-[#b8abc9] max-w-md mx-auto mt-2 leading-relaxed">
          Pejamkan matamu sebentar, ucapkan permohonan terbaik di dalam hatimu, lalu klik tombol untuk meniup lilinnya!
        </p>
      </div>

      {/* THE CAKE CONTAINER */}
      <div className="relative w-full max-w-md mx-auto my-6 flex flex-col items-center select-none">
        
        {/* CANDLES ROW */}
        <div className="flex items-end justify-center gap-8 sm:gap-12 z-20 -mb-2">
          {candlesLit.map((isLit, idx) => (
            <div key={idx} className="relative flex flex-col items-center cursor-pointer" onClick={handleBlowCandles}>
              {/* Flame or Smoke */}
              <div className="h-10 flex items-center justify-center">
                {isLit ? (
                  <div className="relative">
                    {/* Glowing Candle Flame */}
                    <div className="w-4 h-8 bg-gradient-to-t from-[#ff5722] via-[#ffeb3b] to-[#ffffff] rounded-[50%_50%_35%_35%/80%_80%_20%_20%] flame-active" />
                    {/* Inner core */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white rounded-full opacity-80" />
                  </div>
                ) : (
                  /* Smoke particle puff */
                  <div className="w-2.5 h-6 bg-gradient-to-t from-gray-400 to-transparent rounded-full smoke-effect" />
                )}
              </div>

              {/* Candle Wick */}
              <div className="w-0.5 h-2 bg-gray-700 -mt-1" />

              {/* Candle Body with Stripe Design */}
              <div className="w-4 sm:w-5 h-16 rounded-t-sm bg-gradient-to-r from-[#ffd32a] via-[#fffa65] to-[#ffd32a] border border-[#eccc68] shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,71,87,0.8)_4px,rgba(255,71,87,0.8)_8px)]" />
              </div>
            </div>
          ))}
        </div>

        {/* CAKE TOP LAYER */}
        <div className="relative w-48 sm:w-56 h-20 rounded-t-3xl bg-gradient-to-b from-[#ff9ff3] to-[#f368e0] border-t-4 border-l-2 border-r-2 border-[#ffc2f8] shadow-lg flex items-center justify-center overflow-hidden z-10">
          {/* Whipped Cream Dollops */}
          <div className="absolute -top-2 inset-x-0 flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-6 h-4 bg-white rounded-full shadow-xs -mt-1" />
            ))}
          </div>
          {/* Strawberry Accents */}
          <div className="flex items-center gap-4 z-10 mt-1">
            <span className="text-xl animate-bounce">🍓</span>
            <span className="text-xl animate-bounce" style={{ animationDelay: "0.2s" }}>🍓</span>
            <span className="text-xl animate-bounce" style={{ animationDelay: "0.4s" }}>🍓</span>
          </div>
        </div>

        {/* CAKE MIDDLE LAYER */}
        <div className="relative w-64 sm:w-72 h-24 rounded-t-2xl bg-gradient-to-b from-[#feca57] to-[#ff9f43] border-l-2 border-r-2 border-[#ffeaa7] shadow-xl flex flex-col items-center justify-center overflow-hidden -mt-1 z-5">
          {/* Drizzling Chocolate Glaze */}
          <div className="absolute top-0 inset-x-0 h-4 bg-[#574b90] rounded-b-xl opacity-90" />
          <div className="font-hand text-2xl sm:text-3xl text-[#2f1b41] font-bold tracking-wide mt-2">
            Happy Birthday {BIRTHDAY_CONFIG.recipientName} ✨
          </div>
        </div>

        {/* CAKE BOTTOM LAYER */}
        <div className="relative w-80 sm:w-96 h-24 rounded-t-2xl bg-gradient-to-b from-[#ff6b8b] to-[#ee5253] border-l-2 border-r-2 border-[#ff9eb5] shadow-2xl flex items-center justify-center overflow-hidden -mt-1">
          {/* Cream Sprinkles Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_15%,transparent_20%)] bg-[length:14px_14px] opacity-40" />
          <div className="font-sans text-xs tracking-widest uppercase font-bold text-white/90 bg-black/25 px-4 py-1 rounded-full z-10 backdrop-blur-xs">
            08 • 09 • 2026
          </div>
        </div>

        {/* CAKE PLATE */}
        <div className="w-92 sm:w-[430px] h-6 rounded-full bg-gradient-to-r from-[#dcdde1] via-[#ffffff] to-[#dcdde1] border-b-4 border-[#718093] shadow-2xl -mt-2 z-0" />
      </div>

      {/* ACTION CONTROLS */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {!isBlownOut ? (
          <button
            onClick={handleBlowCandles}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b6b] via-[#ff7675] to-[#fd79a8] hover:opacity-95 text-white font-bold text-base sm:text-lg shadow-xl shadow-[#ff6b6b]/30 transition-all cursor-pointer active:scale-95 flex items-center gap-2.5"
          >
            <span>Tiup Lilin Ulang Tahun 🎂💨</span>
          </button>
        ) : (
          <button
            onClick={handleRelightCandles}
            className="px-6 py-3 rounded-2xl bg-[#241a3c] hover:bg-[#322353] border border-[#4d3878] text-[#e0d4f5] font-semibold text-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4 text-[#ff7675]" />
            <span>Nyalakan Lilin Kembali 🔥</span>
          </button>
        )}
      </div>

      {/* POPUP CELEBRATION MODAL */}
      <AnimatePresence>
        {showCelebrationModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-[#1f1633] to-[#140e22] rounded-3xl p-6 sm:p-8 border border-[#523d7a] shadow-2xl text-center overflow-hidden"
            >
              {/* Confetti Glow Ambient */}
              <div className="text-6xl mb-3 animate-bounce">🎉</div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#feca57]/15 border border-[#feca57]/30 text-[#feca57] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Wish Terkabul! ✨</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Selamat Ulang Tahun, Sayangku! 🎂🤍
              </h3>

              <p className="text-xs sm:text-sm text-[#c8bbdc] leading-relaxed mb-6">
                Semoga semua doa dan harapan baik yang kamu panjatkan hari ini dikabulkan dan membawa kebahagiaan berlimpah untukmu di usia yang baru ini.
              </p>

              <div className="space-y-2.5">
                <button
                  onClick={() => setShowCelebrationModal(false)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ff5e8e] to-[#ff7675] text-white font-semibold text-sm shadow-md transition-all cursor-pointer hover:opacity-95"
                >
                  Buka Kado & Hadiah Selanjutnya 🎁
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
