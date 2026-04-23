import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kule Mevlana | Samsun'un Taze Lezzet Durağı",
  description: "Samsun'un en taze pastanesi Kule Mevlana'nın lezzet dolu dünyasını keşfedin. Günlük taze eklerler, özel pastalar ve sıcak fırın ürünleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}>
      <body className="font-inter bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
