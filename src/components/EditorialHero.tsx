"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Disc3, Play, Pause, SkipForward, SkipBack, Music, Sparkles } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-data";
import { soundEngine, SongTrack, PLAYLIST } from "@/lib/birthday-sound";

export function EditorialHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(PLAYLIST[0]);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Subscribe to sound engine state
    const unsubscribe = soundEngine.subscribe((playing, track) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
    });

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

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleToggleMusic = () => {
    soundEngine.togglePlay();
  };

  const handleNextTrack = () => {
    soundEngine.nextTrack();
  };

  const handlePrevTrack = () => {
    soundEngine.prevTrack();
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

      {/* Interactive Turntable Vinyl & Countdown Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E2D8] shadow-xs">
        
        {/* Left: Vintage Vinyl Turntable Player */}
        <div className="flex items-center gap-5">
          {/* Rotating Vinyl Record */}
          <div
            onClick={handleToggleMusic}
            role="button"
            tabIndex={0}
            aria-label="Putar piringan hitam"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleToggleMusic();
            }}
            className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#181514] flex items-center justify-center cursor-pointer shadow-lg transition-transform focus:ring-2 focus:ring-[#A67C52] shrink-0 ${
              isPlaying ? "spin-vinyl" : "hover:scale-105"
            }`}
          >
            {/* Vinyl Grooves Texture */}
            <div className="absolute inset-2.5 rounded-full border border-neutral-700/50" />
            <div className="absolute inset-5 rounded-full border border-neutral-700/40" />
            <div className="absolute inset-7 rounded-full border border-neutral-700/30" />
            
            {/* Center Label */}
            <div className="w-8 h-8 rounded-full bg-[#D4A373] border-2 border-white flex items-center justify-center shadow-inner">
              <div className="w-2 h-2 rounded-full bg-[#1A1715]" />
            </div>
          </div>

          {/* Track Info & Control Buttons */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#A67C52] bg-[#FAF5EE] px-2 py-0.5 rounded-full border border-[#EAE3D8]">
                {isPlaying ? "Now Playing" : "Vinyl Record"}
              </span>
              {isPlaying && (
                <span className="w-2 h-2 rounded-full bg-[#27AE60] animate-pulse" />
              )}
            </div>

            <h4 className="font-cormorant text-xl font-medium text-[#1A1715] truncate mt-1">
              {currentTrack.title}
            </h4>
            <p className="text-xs text-[#7D766D] font-sans truncate">
              {currentTrack.artist}
            </p>

            {/* Playback Action Buttons */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={handlePrevTrack}
                aria-label="Lagu sebelumnya"
                className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#736B63] hover:text-[#1A1715] transition-colors cursor-pointer"
              >
                <SkipBack className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleToggleMusic}
                aria-label={isPlaying ? "Jeda lagu" : "Putar lagu"}
                className="px-3.5 py-1.5 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95 shadow-2xs"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3" />
                    <span>Jeda</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-white" />
                    <span>Putar</span>
                  </>
                )}
              </button>

              <button
                onClick={handleNextTrack}
                aria-label="Lagu selanjutnya"
                className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#736B63] hover:text-[#1A1715] transition-colors cursor-pointer"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>
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
