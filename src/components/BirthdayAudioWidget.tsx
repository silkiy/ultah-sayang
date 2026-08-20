"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";

export function BirthdayAudioWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
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
    if (muted) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#1b142d]/90 backdrop-blur-md p-2 rounded-full border border-[#443166] shadow-xl">
      <button
        onClick={togglePlay}
        title={isPlaying ? "Jeda Melodi Piano" : "Putar Melodi Piano"}
        className="w-9 h-9 rounded-full bg-gradient-to-r from-[#ff5e8e] to-[#ff7675] hover:opacity-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Music className="w-4 h-4 animate-bounce" />}
      </button>

      <button
        onClick={toggleMute}
        title={isMuted ? "Aktifkan Suara" : "Bisukan Suara"}
        className="w-8 h-8 rounded-full bg-[#271b3e] hover:bg-[#342453] text-[#c5b4df] flex items-center justify-center transition-all cursor-pointer"
      >
        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}
