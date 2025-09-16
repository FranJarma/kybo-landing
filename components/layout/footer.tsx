import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-kybo-blue relative w-full overflow-hidden border-t py-6 text-center md:py-12"
    >
      {/* Burbuja decorativa detrás */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="bg-kybo-orange/30 absolute top-6 left-6 h-16 w-16 rounded-full" />
        <div className="bg-kybo-orange/30 absolute right-5 bottom-10 h-24 w-24 rounded-full" />
      </div>

      {/* Contenido visible */}
      <div className="relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="#" aria-label="Inicio">
            <Image
              src="/images/logo1.webp"
              alt="Logo de Kybo"
              width={150}
              height={64}
              className="h-auto"
            />
          </Link>

          <p className="text-md text-white">Kybo © {year} – Todos los derechos reservados</p>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/kybo.arg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kybo-orange text-white"
              aria-label="Instagram de Kybo"
            >
              <BiLogoInstagram className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.tiktok.com/@kybo.arg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kybo-orange text-white"
              aria-label="TikTok de Kybo"
            >
              <BiLogoTiktok className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
