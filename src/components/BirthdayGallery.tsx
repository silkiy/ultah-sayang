"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, Heart, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { BIRTHDAY_PHOTOS, BirthdayPhoto } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerHeartRain } from "./BirthdayConfetti";

export function BirthdayGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});

  const handleOpenPhoto = (idx: number) => {
    setSelectedPhotoIndex(idx);
    soundEngine.playTone(520, 0.4, 0, "sine");
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % BIRTHDAY_PHOTOS.length);
      soundEngine.playTone(580, 0.3, 0, "sine");
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + BIRTHDAY_PHOTOS.length) % BIRTHDAY_PHOTOS.length
      );
      soundEngine.playTone(480, 0.3, 0, "sine");
    }
  };

  const handleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    soundEngine.playCelebrationChime();
    triggerHeartRain();
  };

  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

  return (
    <section id="galeri-kenangan" className="w-full max-w-5xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#feca57]/15 border border-[#feca57]/30 text-[#feca57] text-xs font-semibold uppercase tracking-wider mb-3">
          <Images className="w-3.5 h-3.5" />
          <span>Album 20 Foto Spesial</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold">
          Potret Senyum & Momen Indah Bersamamu 📸
        </h3>
        <p className="text-xs sm:text-sm text-[#b8abc9] max-w-lg mx-auto mt-2 leading-relaxed">
          Kumpulan momen manis kita berdua yang selalu kusimpan rapi. Klik foto mana saja untuk melihat kenangan lengkapnya!
        </p>
      </div>

      {/* Polaroid Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {BIRTHDAY_PHOTOS.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
            whileHover={{ scale: 1.05, rotate: 0, y: -4 }}
            onClick={() => handleOpenPhoto(idx)}
            className={`cursor-pointer ${rotations[idx % rotations.length]} transition-all duration-300`}
          >
            <div className="bg-white p-3 pb-4 rounded-2xl shadow-lg border border-[#e2d0bf] flex flex-col items-center">
              {/* Photo */}
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Caption */}
              <div className="w-full mt-2.5 text-center px-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#b94242] block mb-0.5 truncate">
                  {photo.tag}
                </span>
                <p className="font-hand text-sm text-[#3e2723] truncate leading-tight">
                  {photo.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl p-5 sm:p-7 border border-[#e5d4c3] shadow-2xl overflow-hidden flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-[#5c4036] transition-all cursor-pointer z-20 shadow-xs"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image Frame with Navigation */}
              <div className="relative w-full max-h-[60vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/5 border border-[#dfcdbc]">
                <img
                  src={BIRTHDAY_PHOTOS[selectedPhotoIndex].src}
                  alt={BIRTHDAY_PHOTOS[selectedPhotoIndex].caption}
                  className="max-h-[60vh] max-w-full object-contain rounded-xl"
                />

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#4a322b] shadow-md transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#4a322b] shadow-md transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption & Info */}
              <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9e4444] bg-[#f9e5dd] px-2.5 py-0.5 rounded-full">
                    {BIRTHDAY_PHOTOS[selectedPhotoIndex].tag}
                  </span>
                  <p className="font-serif text-lg font-bold text-[#38231d] mt-1">
                    "{BIRTHDAY_PHOTOS[selectedPhotoIndex].caption}"
                  </p>
                  <span className="text-xs text-[#8c675a]">
                    Foto {selectedPhotoIndex + 1} dari {BIRTHDAY_PHOTOS.length}
                  </span>
                </div>

                <button
                  onClick={(e) => handleLike(e, BIRTHDAY_PHOTOS[selectedPhotoIndex].id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b94242] hover:bg-[#a13333] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>
                    Love ({likes[BIRTHDAY_PHOTOS[selectedPhotoIndex].id] || 0})
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
