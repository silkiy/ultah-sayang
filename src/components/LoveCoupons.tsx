"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ticket,
  HeartHandshake,
  Utensils,
  Heart,
  Compass,
  Crown,
  Gift,
  CheckCircle,
  ExternalLink,
  Sparkles,
  Info,
} from "lucide-react";
import { LOVE_COUPONS, LoveCoupon } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerHeartRain } from "./BirthdayConfetti";
import { openWhatsAppChat } from "@/lib/whatsapp";

export function LoveCoupons() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);
  const [selectedCoupon, setSelectedCoupon] = useState<LoveCoupon | null>(null);

  const getCouponIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5" />;
      case "Utensils":
        return <Utensils className="w-5 h-5" />;
      case "Heart":
        return <Heart className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Crown":
        return <Crown className="w-5 h-5" />;
      case "Gift":
        return <Gift className="w-5 h-5" />;
      default:
        return <Ticket className="w-5 h-5" />;
    }
  };

  const handleClaim = (coupon: LoveCoupon) => {
    soundEngine.playCelebrationChime();
    triggerHeartRain();

    if (!claimedIds.includes(coupon.id)) {
      setClaimedIds((prev) => [...prev, coupon.id]);
    }

    setTimeout(() => {
      openWhatsAppChat(coupon.whatsappText);
    }, 600);
  };

  return (
    <section id="kupon-cinta" className="w-full max-w-5xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff7675]/15 border border-[#ff7675]/30 text-[#ff8e8c] text-xs font-semibold uppercase tracking-wider mb-3">
          <Ticket className="w-3.5 h-3.5 text-[#ff7675]" />
          <span>Buku Kupon Cinta Ulang Tahun</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-4xl text-white font-bold">
          6 Voucher Spesial Khusus Buat Kamu 🎟️
        </h3>
        <p className="text-xs sm:text-sm text-[#b8abc9] max-w-lg mx-auto mt-2 leading-relaxed">
          Semua voucher di bawah ini berlaku khusus buat si birthday girl. Kamu bisa klaim kapan aja langsung ke WhatsApp aku!
        </p>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {LOVE_COUPONS.map((coupon, idx) => {
          const isClaimed = claimedIds.includes(coupon.id);

          return (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-3xl bg-[#1a142c] border border-[#3b2a59] p-5 shadow-xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-2 rounded-full bg-gradient-to-r ${coupon.color} mb-4`} />

              {/* Header Details */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 text-white text-xs font-bold">
                    {getCouponIcon(coupon.icon)}
                    <span>{coupon.code}</span>
                  </div>

                  {isClaimed && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-[#1dd1a1] bg-[#1dd1a1]/15 px-2.5 py-0.5 rounded-full border border-[#1dd1a1]/30">
                      <CheckCircle className="w-3 h-3" />
                      Terklaim
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 leading-snug">
                  {coupon.title}
                </h4>

                <p className="text-xs text-[#feca57] font-medium mb-3">
                  {coupon.subtitle}
                </p>

                <p className="text-xs text-[#b8a7ce] leading-relaxed mb-4">
                  {coupon.description}
                </p>
              </div>

              {/* Footer & Actions */}
              <div className="pt-4 border-t border-dashed border-[#3d2b5e] flex items-center justify-between gap-2">
                <span className="text-[10px] text-[#7a6a92] font-sans">
                  {coupon.terms}
                </span>

                <button
                  onClick={() => handleClaim(coupon)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 ${
                    isClaimed
                      ? "bg-[#27ae60] text-white hover:bg-[#219653]"
                      : "bg-gradient-to-r from-[#ff5e8e] to-[#ff7675] text-white hover:opacity-95"
                  }`}
                >
                  <span>{isClaimed ? "Klaim Lagi 💬" : "Klaim Voucher 💬"}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
