import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ultah-sayang-phi.vercel.app"),
  title: "Happy Birthday, Sayangku ❤️ • 08.09.2026",
  description: "Arsip cinta & potret kenangan spesial edisi ulang tahunmu • 08 September 2026 • Gresik",
  openGraph: {
    title: "Happy Birthday, Sayangku ❤️",
    description: "Arsip cinta & potret kenangan spesial edisi ulang tahunmu • 08 September 2026 • Gresik",
    url: "https://ultah-sayang-phi.vercel.app",
    siteName: "The Birthday Archive — Gresik",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Happy Birthday Sayangku",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Birthday, Sayangku ❤️",
    description: "Arsip cinta & potret kenangan spesial edisi ulang tahunmu • 08 September 2026 • Gresik",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
      className={`${sans.variable} ${cormorant.variable} ${playfair.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#24211E] selection:bg-[#D4A373] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
