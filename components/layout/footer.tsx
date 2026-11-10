import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <p>
            Nos vemos
            <br />
            en Kybo.
          </p>
          <div>
            <Link className="text-link" href="/menu">
              Explorá el menú <ArrowUpRight size={20} />
            </Link>
            <address>
              Alberdi 143, Salta.
              <br />
              En plena peatonal salteña.
            </address>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/kybo.arg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href="https://www.tiktok.com/@kybo.arg" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </div>
          </div>
        </div>
        <Link href="/" aria-label="Kybo, volver al inicio">
          <Image
            className="footer-logo"
            src="/images/logo1.webp"
            alt="Kybo"
            width={600}
            height={256}
          />
        </Link>
        <p className="copyright">
          Kybo © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
