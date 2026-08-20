"use client";

import React, { useState } from "react";
import { BirthdayCountdownGate } from "@/components/BirthdayCountdownGate";
import { BirthdayHero } from "@/components/BirthdayHero";
import { InteractiveCake } from "@/components/InteractiveCake";
import { LanternWishSky } from "@/components/LanternWishSky";
import { LoveCoupons } from "@/components/LoveCoupons";
import { BirthdayLetter } from "@/components/BirthdayLetter";
import { BirthdayGallery } from "@/components/BirthdayGallery";
import { DirectBirthdayReplyForm } from "@/components/DirectBirthdayReplyForm";
import { BirthdayAudioWidget } from "@/components/BirthdayAudioWidget";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0d091a] text-[#f4effc] overflow-x-hidden pb-20 selection:bg-[#ff5e8e] selection:text-white">
      {/* Midnight Unlock / Countdown Gate */}
      <BirthdayCountdownGate
        isUnlocked={isUnlocked}
        onUnlock={() => setIsUnlocked(true)}
      />

      {/* Main Content Area (shown when unlocked) */}
      <div className="relative z-10 space-y-8 sm:space-y-12">
        {/* Celebratory Hero */}
        <BirthdayHero />

        {/* 1. Interactive Birthday Cake & Candle Blow */}
        <InteractiveCake />

        {/* 2. Make a Wish & Sky Lantern Release */}
        <LanternWishSky />

        {/* 3. Birthday Love Coupons & Vouchers */}
        <LoveCoupons />

        {/* 4. Special Handwritten Birthday Letter */}
        <BirthdayLetter />

        {/* 5. 20-Photo Memory Album & Moments */}
        <BirthdayGallery />

        {/* 6. Direct Manual Reply Note Form to WhatsApp */}
        <DirectBirthdayReplyForm />
      </div>

      {/* Persistent Floating Acoustic Piano Player */}
      <BirthdayAudioWidget />
    </main>
  );
}
