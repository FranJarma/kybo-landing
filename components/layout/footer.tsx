import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer role="contentinfo" className="w-full border-t py-6 text-center md:py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="#" aria-label="Inicio">
            <Image
              src="/images/logo1.webp"
              alt="Logo de Kybo"
              width={100}
              height={32}
              className="h-auto"
            />
          </Link>

          <p className="text-md text-gray-500">Kybo © {year} – Todos los derechos reservados</p>

          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/kybo.arg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kybo-blue hover:text-kybo-orange"
              aria-label="Instagram de Kybo"
            >
              <BiLogoInstagram className="h-6 w-6" />
            </Link>

            <Link
              href="https://www.tiktok.com/@kybo.arg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kybo-blue hover:text-kybo-orange"
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
