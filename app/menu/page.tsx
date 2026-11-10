import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer, Header } from "@/components/layout";

export const metadata: Metadata = {
  title: "Menú de Kybo | Bubble tea y waffles en Salta",
  description:
    "Consultá y descargá el menú de Kybo: bubble teas, shakes, frozen, soft y waffles. Estamos en Alberdi 143, en plena peatonal salteña.",
  alternates: { canonical: "https://kybo.com.ar/menu" },
};
export default function MenuPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="menu-page shell" tabIndex={-1}>
        <Link className="text-link" href="/">
          <ArrowLeft size={18} />
          Volver a Kybo
        </Link>
        <h1>
          Un menú.
          <br />
          Muchos antojos.
        </h1>
        <p>
          Bubble teas, waffles y algo diferente a lo común. Mirá nuestro menú y elegí tu próximo
          favorito.
        </p>
        <div className="menu-actions">
          <a className="action" href="/menu.pdf" target="_blank" rel="noopener noreferrer">
            Abrir menú PDF <ArrowUpRight size={20} />
          </a>
          <a className="text-link" href="/menu.pdf" download="menu.pdf">
            Descargar menú <Download size={20} />
          </a>
        </div>
        <div className="menu-preview" aria-label="Vista previa de las dos páginas del menú">
          {[1, 2].map(page => (
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              key={page}
              aria-label={`Abrir página ${page} del menú en PDF para ampliar`}
            >
              <Image
                src={`/images/menu/page-${page}.png`}
                alt={`Página ${page} del menú de Kybo; abrí el PDF para ampliar o consultá la alternativa en Fudo`}
                width={1600}
                height={1132}
                sizes="(max-width:700px) 100vw, 1300px"
              />
            </a>
          ))}
        </div>
        <a
          className="text-link"
          href="https://menu.fu.do/kybo"
          target="_blank"
          rel="noopener noreferrer"
        >
          También podés consultar el menú en Fudo <ArrowUpRight size={20} />
        </a>
        <p className="menu-address">Te esperamos en Alberdi 143, en plena peatonal salteña.</p>
      </main>
      <Footer />
    </>
  );
}
