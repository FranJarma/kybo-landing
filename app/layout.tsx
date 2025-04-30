import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({ src: "./../public/fonts/hwt_artz.otf" });

export const metadata: Metadata = {
  title: "Kybo - Algo diferente a lo común",
  description:
    "En Kybo creamos experiencias únicas a través de nuestros Bubble Teas y Bubble Waffles artesanales, elaborados con ingredientes de primera calidad en Salta, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  );
}
