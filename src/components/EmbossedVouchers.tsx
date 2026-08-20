"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { EDITORIAL_COUPONS, LoveCoupon } from "@/lib/birthday-data";
import { soundEngine } from "@/lib/birthday-sound";
import { openWhatsAppChat } from "@/lib/whatsapp";

export function EmbossedVouchers() {
  const [claimedIds, setClaimedIds] = useState<string[]>([]);

  const handleClaim = (coupon: LoveCoupon) => {
    soundEngine.playCelebrationChime();

    if (!claimedIds.includes(coupon.id)) {
      setClaimedIds((prev) => [...prev, coupon.id]);
    }

    setTimeout(() => {
      openWhatsAppChat(coupon.whatsappText);
    }, 500);
  };

  return (
    <section id="vouchers" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16">
      
      {/* Header */}
      <div className="text-center max-w-lg mx-auto mb-12">
        <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
          Special Tokens
        </span>
        <h3 className="font-cormorant text-4xl sm:text-5xl text-[#1A1715] font-normal">
          6 Voucher Hadiah Khusus Buat Kamu
        </h3>
        <p className="text-xs sm:text-sm text-[#736B63] mt-2 font-sans leading-relaxed">
          Semua voucher ini berlaku khusus untukmu. Kamu bisa mengklaimnya kapan pun langsung ke WhatsApp aku.
        </p>
      </div>

      {/* Vouchers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EDITORIAL_COUPONS.map((coupon, idx) => {
          const isClaimed = claimedIds.includes(coupon.id);

          return (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#E8E2D8] shadow-xs flex flex-col justify-between hover:border-[#D4A373] transition-colors"
            >
              <div>
                {/* Top Serial & Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EAE1] mb-4">
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#A67C52]">
                    {coupon.code}
                  </span>
                  <span className="text-[10px] font-sans text-[#8C8479] uppercase tracking-wider">
                    {coupon.tag}
                  </span>
                </div>

                <h4 className="font-cormorant text-2xl font-normal text-[#1A1715] leading-snug mb-1">
                  {coupon.title}
                </h4>

                <p className="font-sans text-xs text-[#A67C52] font-medium mb-3">
                  {coupon.subtitle}
                </p>

                <p className="font-sans text-xs text-[#736B63] leading-relaxed mb-6">
                  {coupon.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between gap-3">
                <span className="text-[10px] text-[#8C8479] font-sans truncate">
                  {coupon.terms}
                </span>

                <button
                  onClick={() => handleClaim(coupon)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-1.5 active:scale-95 ${
                    isClaimed
                      ? "bg-[#27AE60] text-white"
                      : "bg-[#1A1715] hover:bg-[#2D2824] text-white"
                  }`}
                >
                  <span>{isClaimed ? "Terklaim ✓" : "Klaim"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
