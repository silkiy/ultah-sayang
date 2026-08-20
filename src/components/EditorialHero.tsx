"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Disc3, Play, Pause, Sparkles, ArrowDown } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";

export function EditorialHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(BIRTHDAY_CONFIG.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      soundEngine.stopAmbient();
      setIsPlaying(false);
    } else {
      soundEngine.startAmbient();
      setIsPlaying(true);
    }
  };

  return (
    <header className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 border-b border-[#EBE6DF]">
      
      {/* Top Editorial Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8] text-[11px] tracking-widest uppercase font-medium text-[#7D766D]">
        <span>{BIRTHDAY_CONFIG.editionTag}</span>
        <span>08 SEPTEMBER 2026 • JAKARTA</span>
        <span>TOGETHER SINCE 16.01.2026</span>
      </div>

      {/* Hero Headline */}
      <div className="text-center my-12 sm:my-16">
        <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-4">
          A Birthday Tribute
        </span>

        <h1 className="font-cormorant text-5xl sm:text-7xl md:text-8xl font-normal text-[#1A1715] tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Happy Birthday, <br />
          <span className="italic font-light text-[#A67C52]">
            {BIRTHDAY_CONFIG.recipientName}.
          </span>
        </h1>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#59534E] max-w-lg mx-auto mt-6 leading-relaxed">
          "Karena bersamamu, setiap hari adalah rumah yang paling tenang untuk ditinggali."
        </p>
      </div>

      {/* Interactive Turntable & Live Countdown Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#E8E2D8] shadow-xs">
        
        {/* Left: Minimalist Vinyl Record Widget */}
        <div className="flex items-center gap-4">
          <div
            onClick={toggleMusic}
            className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1A1715] flex items-center justify-center cursor-pointer shadow-md transition-transform ${
              isPlaying ? "spin-vinyl" : "hover:scale-105"
            }`}
          >
            {/* Vinyl Grooves */}
            <div className="absolute inset-2 rounded-full border border-gray-700/60" />
            <div className="absolute inset-4 rounded-full border border-gray-700/40" />
            {/* Center Label */}
            <div className="w-6 h-6 rounded-full bg-[#D4A373] border-2 border-white flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1A1715]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1A1715]">
                Acoustic Melody
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#A67C52] animate-ping" />
            </div>
            <p className="text-xs text-[#7D766D] mt-0.5">
              {isPlaying ? "Sedang memutar melodi piano..." : "Klik piringan hitam untuk memutar"}
            </p>
            <button
              onClick={toggleMusic}
              className="mt-2 text-xs font-medium text-[#A67C52] hover:text-[#805B38] underline underline-offset-4 cursor-pointer"
            >
              {isPlaying ? "Jeda Musik" : "Putar Musik 🎵"}
            </button>
          </div>
        </div>

        {/* Right: Clean Countdown Numbers */}
        <div className="flex items-center justify-around sm:justify-end gap-3 sm:gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-[#F0EBE1]">
          <div className="text-center">
            <span className="font-cormorant text-3xl sm:text-4xl text-[#1A1715] block font-light">
              {timeLeft.days}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8479]">
              Hari
            </span>
          </div>

          <span className="font-cormorant text-2xl text-[#C2BCB0] pb-2 font-light">:</span>

          <div className="text-center">
            <span className="font-cormorant text-3xl sm:text-4xl text-[#1A1715] block font-light">
              {timeLeft.hours}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8479]">
              Jam
            </span>
          </div>

          <span className="font-cormorant text-2xl text-[#C2BCB0] pb-2 font-light">:</span>

          <div className="text-center">
            <span className="font-cormorant text-3xl sm:text-4xl text-[#1A1715] block font-light">
              {timeLeft.minutes}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8479]">
              Menit
            </span>
          </div>

          <span className="font-cormorant text-2xl text-[#C2BCB0] pb-2 font-light">:</span>

          <div className="text-center">
            <span className="font-cormorant text-3xl sm:text-4xl text-[#1A1715] block font-light">
              {timeLeft.seconds}
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8479]">
              Detik
            </span>
          </div>
        </div>

      </div>

    </header>
  );
}
