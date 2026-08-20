// Centralized WhatsApp redirect helper for birthday responses

export const WA_PHONE_NUMBER = "6281232522276"; // +62 812-3252-2276

export function openWhatsAppChat(customMessage?: string) {
  if (typeof window === "undefined") return;

  const url = customMessage && customMessage.trim()
    ? `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(customMessage.trim())}`
    : `https://wa.me/${WA_PHONE_NUMBER}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
