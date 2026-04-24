import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

import Script from "next/script";
import JsonLd from "@/components/JsonLd";

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
  metadataBase: new URL('https://kulemevlanasamsun.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: "Kule Mevlana Samsun | Butik Pasta, Fırın & Cafe - Atakum",
  description: "Atakum'un en sevilen butik pastanesi. Samsun'da kişiye özel pasta tasarımı, günlük taze ekler, sıcak fırın ürünleri ve eşsiz kahve deneyimi Kule Mevlana'da.",
  keywords: "Samsun butik pasta, Atakum pastane, Samsun en iyi pasta, Atakum fırın, kişiye özel pasta Samsun, Kule Mevlana Atakum, Samsun cafe fırın, Samsun doğum günü pastası, Atakum kahvaltı, Samsun ekler sipariş, Atakum kurabiye, Samsun nişan pastası, Atakum tatlıcı, Samsun fırın ürünleri, butik çikolata Samsun, Kule Mevlana cafe, Atakum pasta siparişi, Samsun özel tasarım pasta, Atakum artisan fırın, Samsun pasta fiyatları",
  openGraph: {
    title: "Kule Mevlana Samsun | Butik Pasta & Fırın",
    description: "Samsun Atakum'da yarım asırlık lezzet mirası. Taze, organik ve kişiye özel butik lezzetler.",
    url: 'https://kulemevlanasamsun.vercel.app',
    siteName: 'Kule Mevlana',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kule Mevlana - Butik Pasta & Fırın',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kule Mevlana Samsun | Butik Pasta & Fırın',
    description: "Samsun Atakum'da yarım asırlık lezzet mirası. Taze, organik ve kişiye özel butik pasta tasarımları.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}>
      <head>
        {/* Google Analytics - Placeholder ID */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-inter bg-background text-foreground min-h-screen">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
