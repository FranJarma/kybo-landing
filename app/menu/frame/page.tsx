import type { Metadata } from "next";

import { MenuBookFrame } from "@/components/menu-book-frame";

export const metadata: Metadata = {
  title: "Libro del menú de Kybo",
  robots: { index: false, follow: false },
};

export default function BookFramePage() {
  return <MenuBookFrame />;
}
