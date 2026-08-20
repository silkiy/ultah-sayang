"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";

export function AudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      soundEngine.stopAmbient();
      setIsPlaying(false);
    } else {
      soundEngine.startAmbient();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (muted) setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full border border-[#E8E2D8] shadow-md">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Jeda Melodi Piano" : "Putar Melodi Piano"}
        className="w-8 h-8 rounded-full bg-[#1A1715] hover:bg-[#2D2824] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
      >
        <Music className={`w-3.5 h-3.5 ${isPlaying ? "animate-spin" : ""}`} />
      </button>

      <button
        onClick={toggleMute}
        title={isMuted ? "Aktifkan Suara" : "Bisukan"}
        className="w-8 h-8 rounded-full hover:bg-[#FAF8F5] text-[#736B63] flex items-center justify-center transition-colors cursor-pointer"
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-500" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
