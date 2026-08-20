"use client";

import React, { useState } from "react";
import { Send, Check, Sparkles } from "lucide-react";
import { soundEngine } from "@/lib/birthday-sound";
import { openWhatsAppChat } from "@/lib/whatsapp";

export function MinimalistReplyForm() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    soundEngine.playCelebrationChime();
    setIsSending(true);

    setTimeout(() => {
      openWhatsAppChat(message.trim());
      setIsSending(false);
      setMessage("");
    }, 500);
  };

  return (
    <section id="reply-section" className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E2D8] shadow-xs text-[#1A1715]">
        
        {/* Header */}
        <div className="text-center mb-8">
          <span className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-[#A67C52] block mb-2">
            Direct Note
          </span>
          <h3 className="font-cormorant text-3xl sm:text-4xl font-normal text-[#1A1715]">
            Ada Pesan Spesial Hari Ini?
          </h3>
          <p className="text-xs sm:text-sm text-[#736B63] max-w-md mx-auto mt-2 font-sans leading-relaxed">
            Tuliskan apa saja yang sedang kamu rasakan atau pikirkan di hari ulang tahunmu. Pesanmu akan langsung terkirim ke WhatsApp aku.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan atau cerita kamu di sini ya, Sayang..."
              required
              className="w-full p-4 rounded-2xl bg-[#FAF8F5] border border-[#E0D8CD] focus:border-[#A67C52] focus:ring-1 focus:ring-[#A67C52] outline-none text-sm text-[#24211E] placeholder:text-[#9C9488] leading-relaxed transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending || !message.trim()}
            className="w-full py-3.5 px-6 rounded-full bg-[#1A1715] hover:bg-[#2D2824] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xs"
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

        <div className="mt-8 pt-6 border-t border-[#F0EAE1] text-center">
          <p className="font-cormorant italic text-sm text-[#8C8479]">
            "08.09.2026 — Always by your side, celebrating you."
          </p>
        </div>

      </div>
    </section>
  );
}
