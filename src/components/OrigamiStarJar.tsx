"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, RefreshCw, X, BookOpen } from "lucide-react";
import { LOVE_REASONS, LoveReason } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";

export function OrigamiStarJar() {
  const [currentReason, setCurrentReason] = useState<LoveReason | null>(null);
  const [openedIds, setOpenedIds] = useState<number[]>([]);

  const handleDrawNote = () => {
    soundEngine.playCelebrationChime();

    // Pick an unopened note if available, otherwise random
    const unopened = LOVE_REASONS.filter((r) => !openedIds.includes(r.id));
    const target = unopened.length > 0
      ? unopened[Math.floor(Math.random() * unopened.length)]
      : LOVE_REASONS[Math.floor(Math.random() * LOVE_REASONS.length)];

    setCurrentReason(target);
    if (!openedIds.includes(target.id)) {
      setOpenedIds((prev) => [...prev, target.id]);
    }
  };

  return (
    <section id="star-jar" className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8E2D8] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Interactive Apothecary Jar Visual */}
        <div className="relative w-48 sm:w-56 h-64 flex flex-col items-center justify-center">
          {/* Glass Jar Body */}
          <div className="relative w-40 h-56 rounded-3xl bg-[#FAF8F5]/80 border-2 border-[#D9D2C7] shadow-inner p-4 flex flex-wrap items-center justify-center gap-2 overflow-hidden">
            {/* Wooden Lid */}
            <div className="absolute -top-3 w-28 h-5 rounded-t-lg bg-[#C9BFB0] border border-[#B8AC9A] shadow-xs" />
            
            {/* Little origami stars / notes inside */}
            {LOVE_REASONS.map((reason, idx) => {
              const isOpened = openedIds.includes(reason.id);
              return (
                <div
                  key={reason.id}
                  className={`w-4 h-4 rounded-full transition-all ${
                    isOpened
                      ? "bg-[#D4A373] opacity-90 scale-90"
                      : "bg-[#E8DFD3] border border-[#C9BFB0] opacity-70"
                  }`}
                  style={{ transform: `rotate(${idx * 24}deg)` }}
                />
              );
            })}
          </div>

          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#8C8479] mt-3">
            {openedIds.length} / {LOVE_REASONS.length} Catatan Terbuka
          </span>
        </div>

        {/* Right: Text & Drawer Button */}
        <div className="flex-1 text-center md:text-left">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
            Little Things
          </span>

          <h3 className="font-cormorant text-3xl sm:text-4xl text-[#1A1715] font-normal leading-tight mb-3">
            Toples Alasan Kenapa Aku Menyayangimu
          </h3>

          <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed mb-6 font-sans">
            Ada 15 catatan kecil di dalam toples ini. Setiap kali kamu buka, ada satu hal sederhana tentangmu yang selalu bikin aku bersyukur.
          </p>

          <button
            onClick={handleDrawNote}
            className="px-6 py-3 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-95 inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ambil 1 Catatan Cinta ✨</span>
          </button>
        </div>

      </div>

      {/* POPUP NOTE CARD MODAL */}
      <AnimatePresence>
        {currentReason && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setCurrentReason(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E5DDD2] shadow-2xl text-center"
            >
              <button
                onClick={() => setCurrentReason(null)}
                aria-label="Tutup catatan"
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[#EDE7DE] text-[#736B63] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-10 h-10 mx-auto rounded-full bg-[#F0EAE1] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-[#A67C52] fill-[#A67C52]" />
              </div>

              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#A67C52] block mb-2">
                Catatan N° {currentReason.id}
              </span>

              <h4 className="font-cormorant text-2xl sm:text-3xl text-[#1A1715] font-normal mb-3 leading-snug">
                "{currentReason.note}"
              </h4>

              <p className="text-xs sm:text-sm text-[#736B63] leading-relaxed font-sans mb-6">
                {currentReason.detail}
              </p>

              <button
                onClick={handleDrawNote}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-[#F2ECE4] border border-[#D9D0C3] text-[#4A443D] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Buka Catatan Lainnya 🕊️
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
