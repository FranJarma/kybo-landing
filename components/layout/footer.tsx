import Image from "next/image";
import Link from "next/link";
import { BiLogoInstagram, BiLogoTiktok } from "react-icons/bi";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo1.webp"
              alt="Kybo Logo"
              width={100}
              height={32}
              className="h-auto"
            />
          </div>
          <p className="text-md text-gray-500">Kybo © {year} - Todos los derechos reservados</p>
          <div className="flex gap-4">
            <Link
              href="https://www.instagram.com/kybo.arg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kybo-blue hover:text-kybo-orange"
            >
              <BiLogoInstagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@kybo.arg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-kybo-blue hover:text-kybo-orange"
            >
              <BiLogoTiktok className="h-6 w-6" />
              <span className="sr-only">TikTok</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
