"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Images, Heart, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { EDITORIAL_PHOTOS, EditorialPhoto } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";

export function EditorialLookbook() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "portraits" | "moments" | "details">("all");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [displayLimit, setDisplayLimit] = useState(24);

  const filteredPhotos = activeFilter === "all"
    ? EDITORIAL_PHOTOS
    : EDITORIAL_PHOTOS.filter((p) => p.category === activeFilter);

  const visiblePhotos = filteredPhotos.slice(0, displayLimit);

  const handleOpenPhoto = (idx: number) => {
    // Find index in main EDITORIAL_PHOTOS
    const realIndex = EDITORIAL_PHOTOS.findIndex((p) => p.id === visiblePhotos[idx].id);
    setSelectedPhotoIndex(realIndex);
    soundEngine.playTone(440, 0.2, 0, "sine");
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % EDITORIAL_PHOTOS.length);
      soundEngine.playTone(493.88, 0.2, 0, "sine");
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + EDITORIAL_PHOTOS.length) % EDITORIAL_PHOTOS.length
      );
      soundEngine.playTone(392.0, 0.2, 0, "sine");
    }
  };

  const handleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    soundEngine.playCelebrationChime();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") setSelectedPhotoIndex(null);
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex]);

  return (
    <section id="lookbook" className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
          Curated Visuals
        </span>
        <h3 className="font-cormorant text-4xl sm:text-5xl text-[#1A1715] font-normal">
          Album Potret & Kenangan Bersamamu
        </h3>
        <p className="text-xs sm:text-sm text-[#736B63] mt-2 font-sans leading-relaxed">
          Kumpulan {EDITORIAL_PHOTOS.length} potret dan momen manis perjalanan cinta kita bersama.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[
            { key: "all", label: "Semua Foto" },
            { key: "portraits", label: "Potret Manis" },
            { key: "moments", label: "Momen Kita" },
            { key: "details", label: "Detail & Cerita" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveFilter(tab.key as any);
                setDisplayLimit(24);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? "bg-[#1A1715] text-white"
                  : "bg-white text-[#736B63] hover:bg-[#F2ECE4] border border-[#E8E2D8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {visiblePhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
            whileHover={{ y: -4 }}
            onClick={() => handleOpenPhoto(idx)}
            className="group cursor-pointer bg-white p-3 rounded-2xl border border-[#E8E2D8] shadow-xs flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF8F5]">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Bottom Caption */}
            <div className="mt-3 px-1 flex items-start justify-between gap-2">
              <div>
                <span className="font-sans text-[10px] tracking-wider uppercase font-semibold text-[#A67C52] block">
                  {photo.date}
                </span>
                <h4 className="font-cormorant text-base font-medium text-[#1A1715] mt-0.5 leading-tight">
                  {photo.title}
                </h4>
              </div>

              <button
                onClick={(e) => handleLike(e, photo.id)}
                className="p-1.5 rounded-full hover:bg-[#FAF5EE] text-[#8C8479] hover:text-[#C26D6D] transition-colors cursor-pointer"
              >
                <Heart className={`w-3.5 h-3.5 ${likes[photo.id] ? "fill-[#C26D6D] text-[#C26D6D]" : ""}`} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {displayLimit < filteredPhotos.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setDisplayLimit((prev) => prev + 24)}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#D5CEC2] text-xs font-medium tracking-wide text-[#1A1715] shadow-xs hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Tampilkan Lebih Banyak ({visiblePhotos.length} dari {filteredPhotos.length} foto)</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
          </button>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white rounded-3xl p-5 sm:p-8 border border-[#E5DFD5] shadow-2xl overflow-hidden flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                aria-label="Tutup modal foto"
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F0EAE1] text-[#736B63] transition-colors cursor-pointer z-20"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image Frame with Navigation */}
              <div className="relative w-full max-h-[65vh] flex items-center justify-center rounded-2xl overflow-hidden bg-[#FAF8F5]">
                <img
                  src={EDITORIAL_PHOTOS[selectedPhotoIndex].src}
                  alt={EDITORIAL_PHOTOS[selectedPhotoIndex].title}
                  className="max-h-[65vh] max-w-full object-contain rounded-xl"
                />

                <button
                  onClick={handlePrev}
                  aria-label="Foto sebelumnya"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1A1715] shadow-md transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Foto selanjutnya"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1A1715] shadow-md transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Detail Info */}
              <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#A67C52]">
                    {EDITORIAL_PHOTOS[selectedPhotoIndex].date}
                  </span>
                  <h4 className="font-cormorant text-2xl text-[#1A1715] font-normal mt-0.5">
                    {EDITORIAL_PHOTOS[selectedPhotoIndex].title}
                  </h4>
                  <p className="text-xs text-[#736B63] font-sans mt-0.5">
                    {EDITORIAL_PHOTOS[selectedPhotoIndex].annotation}
                  </p>
                </div>

                <button
                  onClick={(e) => handleLike(e, EDITORIAL_PHOTOS[selectedPhotoIndex].id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5EE] hover:bg-[#F2ECE4] border border-[#E0D8CC] text-xs font-semibold text-[#1A1715] transition-all cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#C26D6D] text-[#C26D6D]" />
                  <span>Suka ({likes[EDITORIAL_PHOTOS[selectedPhotoIndex].id] || 0})</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
