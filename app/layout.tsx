import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";

const kyboFont = localFont({
  src: "./../public/fonts/hwt_artz.otf",
  variable: "--font-display",
  display: "swap",
});

const baseUrl = "https://kybo.com.ar";

export const metadata: Metadata = {
  title: "Kybo | Bubble tea y waffles en la peatonal de Salta",
  description:
    "Bubble teas, shakes y waffles en Kybo. Encontranos en Alberdi 143, en plena peatonal salteña. Explorá nuestro menú y elegí tu próximo antojo.",
  metadataBase: baseUrl ? new URL(baseUrl) : null,
  alternates: {
    canonical: baseUrl ?? undefined,
  },
  openGraph: {
    title: "Kybo - Bubble Teas y Waffles en Salta Capital",
    description:
      "Viví la experiencia Kybo. Nuestros Bubble Teas y Waffles te transportan a otro mundo.",
    url: baseUrl ?? undefined,
    siteName: "Kybo",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Kybo - Bubble Tea y Waffles",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kybo | Bubble tea y waffles en la peatonal de Salta",
    description: "Bubble Teas y Waffles artesanales en Salta. Una experiencia única.",
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  robots: {
    follow: true,
    index: true,
  },
  other: {
    author: "Kybo",
    keywords:
      "Kybo, Bubble Tea, Bubble Waffles, Salta, bebidas artesanales, waffles dulces, waffles salados",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="icon" href="/favicon.png" sizes="48x48" type="image/png" />
        <meta name="theme-color" content="#013e5e" />
        <meta name="geo.region" content="AR-A" />
        <meta name="geo.placename" content="Salta, Argentina" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Kybo",
              image: `${baseUrl}/images/og-image.jpg`,
              "@id": baseUrl,
              url: baseUrl,
              telephone: "+54 9 3876 19-5620",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Alberdi 143",
                addressLocality: "Salta",
                addressRegion: "Salta",
                postalCode: "4400",
                addressCountry: "AR",
              },
              servesCuisine: [
                "Bubble Tea",
                "Bubble Waffles",
                "Cafetería",
                "Infusiones Alternativas",
                "Crumble Cookies",
              ],
              menu: "https://kybo.com.ar/menu",
              sameAs: ["https://www.instagram.com/kybo.arg/", "https://www.tiktok.com/@kybo.arg"],
            }),
          }}
        />
      </head>
      <body className={`${kyboFont.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <Toaster richColors position="bottom-center" />

        {children}
      </body>
    </html>
  );
}
