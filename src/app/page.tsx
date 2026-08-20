"use client";

import React from "react";
import { EditorialHero } from "@/components/EditorialHero";
import { ArtisanalCandle } from "@/components/ArtisanalCandle";
import { OrigamiStarJar } from "@/components/OrigamiStarJar";
import { EditorialLetter } from "@/components/EditorialLetter";
import { EditorialLookbook } from "@/components/EditorialLookbook";
import { EmbossedVouchers } from "@/components/EmbossedVouchers";
import { MinimalistReplyForm } from "@/components/MinimalistReplyForm";
import { AudioController } from "@/components/AudioController";

export default function Home() {
  return (
    <main className="relative min-h-screen linen-bg text-[#24211E] overflow-x-hidden selection:bg-[#D4A373] selection:text-white pb-20">
      
      {/* 1. Cover Story & Interactive Vinyl Turntable */}
      <EditorialHero />

      {/* 2. The Birthday Wish & Artisanal Candle Ritual */}
      <ArtisanalCandle />

      {/* 3. The Apothecary Star Jar (15 Love Reasons) */}
      <OrigamiStarJar />

      {/* 4. The Intimate Birthday Letter */}
      <EditorialLetter />

      {/* 5. 20-Photo Curated Editorial Lookbook */}
      <EditorialLookbook />

      {/* 6. Curated Embossed Love Tokens / Vouchers */}
      <EmbossedVouchers />

      {/* 7. Direct Note Card (WhatsApp Reply) */}
      <MinimalistReplyForm />

      {/* 8. Minimalist Audio Controller */}
      <AudioController />

      {/* Editorial Footer */}
      <footer className="w-full max-w-5xl mx-auto px-4 py-8 mt-12 border-t border-[#E8E2D8] text-center text-xs text-[#8C8479] font-sans">
        <p>© 2026 Crafted with love for 08.09.2026 • Edition N° 080926</p>
      </footer>
    </main>
  );
}
