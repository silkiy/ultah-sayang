"use client";

import React, { useState } from "react";
import { Send, Check, MessageSquare, Heart } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";
import { triggerHeartRain } from "./BirthdayConfetti";
import { openWhatsAppChat } from "@/lib/whatsapp";

export function DirectBirthdayReplyForm() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    soundEngine.playCelebrationChime();
    triggerHeartRain();
    setIsSending(true);

    setTimeout(() => {
      openWhatsAppChat(message.trim());
      setIsSending(false);
      setMessage("");
    }, 500);
  };

  return (
    <section id="balas-ulang-tahun" className="w-full max-w-2xl mx-auto px-4 py-14">
      <div className="relative rounded-3xl bg-[#FAF7F2] p-6 sm:p-10 border border-[#e5d4c3] shadow-2xl text-[#311c15] overflow-hidden">
        
        {/* Soft corner accents */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#c9b29e] rounded-tl pointer-events-none" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#c9b29e] rounded-tr pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#c9b29e] rounded-bl pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#c9b29e] rounded-br pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6">
          <span className="font-hand text-2xl text-[#b94242] block mb-1">
            Dari si birthday girl untuk aku
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#36221c]">
            Ada Pesan atau Cerita Spesial? 💌
          </h3>
          <p className="text-xs sm:text-sm text-[#73584e] max-w-md mx-auto mt-2 leading-relaxed">
            Ketik apa saja yang lagi ada di pikiran atau perasaanmu di hari ulang tahun ini. Nanti pesannya langsung masuk ke WhatsApp aku.
          </p>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan atau cerita kamu di sini ya, Sayang..."
              required
              className="w-full p-4 rounded-2xl bg-white border border-[#dfcbbe] focus:border-[#b94242] focus:ring-2 focus:ring-[#b94242]/15 outline-none text-sm text-[#3d2e29] leading-relaxed transition-all resize-none placeholder:text-[#ab9388]"
            />
          </div>

          <button
            type="submit"
            disabled={isSending || !message.trim()}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#b94242] hover:bg-[#a33232] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            {isSending ? (
              <>
                <Check className="w-4 h-4" />
                <span>Membuka WhatsApp...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Pesan ke WhatsApp 💬</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#ebd8cb] text-center">
          <p className="font-serif italic text-xs text-[#8c675a]">
            "Selamat ulang tahun untuk duniaku yang paling indah • 08 September 2026"
          </p>
        </div>
      </div>
    </section>
  );
}
