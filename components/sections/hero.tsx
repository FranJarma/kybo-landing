import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { landingSections } from "@/lib/navigation";
export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <h1 id="hero-title">
            Algo diferente
            <br />a lo común.
          </h1>
          <p>
            Bubble teas, waffles y antojos con mucha personalidad. Esto es Kybo, en plena peatonal
            salteña.
          </p>
          <div className="hero-actions">
            <Link className="action" href="/menu">
              Explorá el menú <ArrowUpRight size={20} />
            </Link>
            <a className="text-link" href={`#${landingSections.favorites.id}`}>
              Conocé tus próximos favoritos <ArrowDown size={18} />
            </a>
          </div>
          <a className="hero-location" href={`#${landingSections.location.id}`}>
            Nos vemos en Alberdi 143, Salta <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-art hero-art-reference">
          <Image
            src="/images/kybo-art.webp"
            alt="Ilustración de Kybo: bubble tea, waffle y helado con volumen satinado, ondas naranjas, arco escalonado y damero azul y crema"
            fill
            priority
            sizes="(max-width:700px) 100vw, 600px"
            className="hero-reference-image"
          />
        </div>
      </div>
      <svg
        className="section-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 50Q180 0 360 50T720 50T1080 50T1440 50V100H0Z" />
      </svg>
    </section>
  );
}
