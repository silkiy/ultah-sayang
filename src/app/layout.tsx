import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Caveat, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selamat Ulang Tahun, Sayangku! ✨🎂",
  description: "Sebuah kejutan dan hadiah spesial untuk hari ulang tahunmu • 08 September 2026",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${lora.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[#0f0c1b] text-[#f5f3fa] selection:bg-[#ff5e8e] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
