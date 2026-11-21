import type { Metadata } from "next";

import { MenuBook } from "@/components/menu-book";

export const metadata: Metadata = {
  title: "Menú de Kybo | Bubble tea y waffles en Salta",
  description:
    "Consultá y descargá el menú de Kybo: bubble teas, shakes, frozen, soft y waffles. Estamos en Alberdi 143, en plena peatonal salteña.",
  alternates: { canonical: "https://kybo.com.ar/menu" },
};
export default function MenuPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <MenuBook />
    </main>
  );
}
