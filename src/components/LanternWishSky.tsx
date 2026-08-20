"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Star, Flame, Heart } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerBirthdayFireworks } from "./BirthdayConfetti";

interface Lantern {
  id: number;
  text: string;
  xPos: number; // percentage from left (10% to 90%)
  createdAt: string;
  duration: number;
}

export function LanternWishSky() {
  const [wishInput, setWishInput] = useState("");
  const [lanterns, setLanterns] = useState<Lantern[]>([
    {
      id: 1,
      text: "Semoga selalu sehat, bahagia, dan selalu bersama",
      xPos: 35,
      createdAt: "Harapan Pertama",
      duration: 18,
    },
    {
      id: 2,
      text: "Semoga semua cita-cita dan impianmu tercapai di usia baru ini",
      xPos: 65,
      createdAt: "Doa Tulus",
      duration: 22,
    },
  ]);
  const [isReleasing, setIsReleasing] = useState(false);

  const handleReleaseLantern = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wishInput.trim()) return;

    soundEngine.playCelebrationChime();
    setIsReleasing(true);

    const newLantern: Lantern = {
      id: Date.now(),
      text: wishInput.trim(),
      xPos: Math.floor(Math.random() * 65) + 15, // between 15% and 80%
      createdAt: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      duration: Math.floor(Math.random() * 8) + 16,
    };

    setLanterns((prev) => [newLantern, ...prev]);
    setWishInput("");

    setTimeout(() => {
      triggerBirthdayFireworks();
      setIsReleasing(false);
    }, 800);
  };

  return (
    <section id="lampion-harapan" className="relative w-full max-w-5xl mx-auto px-4 py-14 overflow-hidden">
      
      {/* Background Starry Night Glow Canvas */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0c0818] via-[#140e26] to-[#0c0818] border border-[#2b1f48] p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[580px] flex flex-col justify-between">
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${(i * 17) % 95}%`,
                left: `${(i * 23) % 98}%`,
                animationDuration: `${(i % 3) + 2}s`,
                opacity: (i % 5) * 0.2 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative z-20 text-center max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#feca57]/15 border border-[#feca57]/30 text-[#feca57] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#feca57]" />
            <span>Pelepasan Lampion Make-A-Wish</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold">
            Terbangkan Lampion Harapanmu 🏮
          </h3>
          <p className="text-xs sm:text-sm text-[#bcaecf] mt-1.5 leading-relaxed">
            Tuliskan doa atau impian yang paling kamu harapkan di hari ulang tahun ini. Terbangkan lampionmu ke langit malam bertabur bintang.
          </p>
        </div>

        {/* THE NIGHT SKY AREA WITH ASCENDING LANTERNS */}
        <div className="relative w-full h-72 sm:h-80 overflow-hidden my-4">
          <AnimatePresence>
            {lanterns.map((lantern) => (
              <motion.div
                key={lantern.id}
                initial={{ y: 280, opacity: 0, scale: 0.6 }}
                animate={{
                  y: -120,
                  opacity: [0, 1, 1, 0.8, 0],
                  scale: [0.7, 1, 0.9, 0.7, 0.5],
                  x: [0, 8, -8, 5, 0],
                }}
                transition={{
                  duration: lantern.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ left: `${lantern.xPos}%` }}
                className="absolute bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
              >
                {/* Glowing Lantern Body */}
                <div className="relative w-14 sm:w-16 h-20 rounded-2xl bg-gradient-to-t from-[#ff793f] via-[#ffb142] to-[#ffeaa7] border border-[#ffda79] shadow-[0_0_25px_rgba(255,177,66,0.9)] p-2 flex flex-col items-center justify-between text-center overflow-hidden">
                  {/* Top Vent */}
                  <div className="w-4 h-1 bg-[#cc8e35] rounded-full" />
                  
                  {/* Heart on lantern */}
                  <Heart className="w-4 h-4 text-[#d35400] fill-[#d35400] opacity-80" />
                  
                  {/* Inner flame light */}
                  <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff] animate-ping" />

                  {/* Bottom Rim */}
                  <div className="w-8 h-1.5 bg-[#83341c] rounded-full" />
                </div>

                {/* Lantern Wish Label */}
                <div className="mt-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#ffda79]/40 text-[10px] sm:text-xs text-[#ffeaa7] font-medium max-w-[160px] truncate text-center shadow-lg">
                  "{lantern.text}"
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* WISH INPUT FORM */}
        <div className="relative z-20 max-w-xl mx-auto w-full">
          <form onSubmit={handleReleaseLantern} className="space-y-3">
            <div className="relative flex items-center">
              <input
                type="text"
                value={wishInput}
                onChange={(e) => setWishInput(e.target.value)}
                placeholder="Ketik harapan atau doamu di sini (contoh: Bahagia terus sama ayang)..."
                required
                className="w-full pl-4 pr-32 py-3.5 rounded-2xl bg-[#1f1638] border border-[#48356f] focus:border-[#ff9f43] focus:ring-2 focus:ring-[#ff9f43]/20 outline-none text-xs sm:text-sm text-white placeholder:text-[#8875a6] transition-all"
              />
              <button
                type="submit"
                disabled={isReleasing || !wishInput.trim()}
                className="absolute right-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff9f43] to-[#ee5253] hover:opacity-95 text-white font-semibold text-xs transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 active:scale-95"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Terbangkan 🏮</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#9381ae] px-1">
              <span>{lanterns.length} Lampion telah mengudara di langit malam</span>
              <span>Setiap harapan adalah doa yang terbang tinggi ✨</span>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
