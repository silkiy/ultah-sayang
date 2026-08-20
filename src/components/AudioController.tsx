"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music, SkipForward } from "lucide-react";
import { soundEngine, SongTrack, PLAYLIST } from "@/lib/birthday-sound";

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<SongTrack>(PLAYLIST[0]);

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe((playing, track) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    soundEngine.togglePlay();
  };

  const handleNext = () => {
    soundEngine.nextTrack();
  };

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-[#E8E2D8] shadow-lg text-[#1A1715]">
      {/* Play/Pause Disc Button */}
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Jeda lagu" : "Putar lagu"}
        title={isPlaying ? `Sedang memutar: ${currentTrack.title}` : "Putar Piringan Hitam"}
        className="w-8 h-8 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shadow-xs"
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} />
      </button>

      {/* Track Title Snippet */}
      <div className="hidden sm:block max-w-[120px] truncate text-[11px] font-medium text-[#4A443D]">
        {isPlaying ? currentTrack.title : "Vinyl Player"}
      </div>

      {/* Next Track Button */}
      <button
        onClick={handleNext}
        aria-label="Lagu berikutnya"
        title="Ganti Lagu"
        className="p-1 rounded-full hover:bg-[#FAF8F5] text-[#736B63] hover:text-[#1A1715] transition-colors cursor-pointer"
      >
        <SkipForward className="w-3.5 h-3.5" />
      </button>

      {/* Mute Button */}
      <button
        onClick={handleToggleMute}
        aria-label={isMuted ? "Aktifkan suara" : "Bisukan suara"}
        title={isMuted ? "Suara Dibisukan" : "Bisukan"}
        className="p-1 rounded-full hover:bg-[#FAF8F5] text-[#736B63] hover:text-[#1A1715] transition-colors cursor-pointer"
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-red-500" />
        ) : (
          <Volume2 className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
