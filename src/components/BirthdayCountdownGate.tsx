"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Lock, Key, Heart } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerBirthdayFireworks } from "./BirthdayConfetti";

interface Props {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export function BirthdayCountdownGate({ isUnlocked, onUnlock }: Props) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(BIRTHDAY_CONFIG.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleManualUnlock = () => {
    soundEngine.playCelebrationChime();
    triggerBirthdayFireworks();
    onUnlock();
  };

  if (isUnlocked) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0714]/95 backdrop-blur-xl">
      <div className="relative w-full max-w-xl text-center rounded-3xl bg-gradient-to-b from-[#1c152e] to-[#120d20] p-6 sm:p-10 border border-[#3b2b5c] shadow-2xl overflow-hidden">
        
        {/* Glow ambient background circles */}
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-[#ff6b8b]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#9b59b6]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff5e8e]/15 border border-[#ff5e8e]/30 text-[#ff80a6] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#ff5e8e]" />
          <span>Hitung Mundur Ulang Tahun Sayang</span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold mb-2">
          Menuju 08 September 2026 🎂
        </h2>
        <p className="text-xs sm:text-sm text-[#b8abc9] max-w-md mx-auto mb-8 leading-relaxed">
          Sebuah kejutan manis sedang dipersiapkan khusus untuk merayakan hari kelahiranmu.
        </p>

        {/* Countdown Box Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-8">
          <div className="bg-[#241a3c] rounded-2xl p-3 sm:p-4 border border-[#44336c]/60 shadow-inner">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#ff80a6] block">
              {timeLeft.days}
            </span>
            <span className="text-[10px] sm:text-xs text-[#a090b8] uppercase tracking-wider font-semibold">
              Hari
            </span>
          </div>

          <div className="bg-[#241a3c] rounded-2xl p-3 sm:p-4 border border-[#44336c]/60 shadow-inner">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#feca57] block">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] sm:text-xs text-[#a090b8] uppercase tracking-wider font-semibold">
              Jam
            </span>
          </div>

          <div className="bg-[#241a3c] rounded-2xl p-3 sm:p-4 border border-[#44336c]/60 shadow-inner">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#48dbfb] block">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] sm:text-xs text-[#a090b8] uppercase tracking-wider font-semibold">
              Menit
            </span>
          </div>

          <div className="bg-[#241a3c] rounded-2xl p-3 sm:p-4 border border-[#44336c]/60 shadow-inner">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#1dd1a1] block">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] sm:text-xs text-[#a090b8] uppercase tracking-wider font-semibold">
              Detik
            </span>
          </div>
        </div>

        {/* Unlock Button */}
        <div className="space-y-3">
          <button
            onClick={handleManualUnlock}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ff5e8e] via-[#ff758c] to-[#ff8e75] hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-[#ff5e8e]/30 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
          >
            <Key className="w-4 h-4" />
            <span>Buka Kejutan Ulang Tahun Sekarang ✨</span>
          </button>

          <p className="text-[11px] text-[#86759e]">
            Klik tombol di atas untuk membuka & menikmati seluruh isi website
          </p>
        </div>
      </div>
    </div>
  );
}
