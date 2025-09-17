import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { DiscountDialog } from "@/components/discount-dialog";

const kyboFont = localFont({ src: "./../public/fonts/hwt_artz.otf" });

const baseUrl = process.env.PROD_URL ?? process.env.DEV_URL;

export const metadata: Metadata = {
  title: "Kybo - Algo diferente a lo común",
  description:
    "En Kybo creamos experiencias únicas a través de nuestros Bubble Teas y Bubble Waffles artesanales, elaborados con ingredientes de primera calidad en Salta, Argentina.",
  metadataBase: baseUrl ? new URL(baseUrl) : null,
  openGraph: {
    title: "Kybo - Bubble Teas y Waffles en Salta Capital",
    description:
      "Viví la experiencia Kybo. Nuestros Bubble Teas y Waffles te transportan a otro mundo.",
    url: baseUrl,
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
    title: "Kybo - Algo diferente a lo común",
    description: "Bubble Teas y Waffles artesanales en Salta. Una experiencia única.",
    images: [`${baseUrl}/images/og-image.jpg`],
  },
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
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#013e5e" />
        <link rel="canonical" href={baseUrl} />
      </head>
      <body className={`${kyboFont.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Saltar al contenido
        </a>
        <Toaster richColors position="bottom-center" />
        <DiscountDialog />
        {children}
      </body>
    </html>
  );
}
