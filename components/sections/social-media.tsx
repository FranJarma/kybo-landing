"use client";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { landingSections } from "@/lib/navigation";
export function SocialMedia() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (!active) return;
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [active]);
  return (
    <section
      id={landingSections.social.id}
      className="social section-pad section-anchor"
      aria-labelledby="social-title"
      tabIndex={-1}
    >
      <span id={landingSections.social.legacyId} className="anchor-alias" aria-hidden="true" />
      <div className="shell">
        <div className="section-heading">
          <div>
            <h2 id="social-title">Esto también es Kybo.</h2>
            <p>Si esperás ver cosas normales… no es por acá. Seguinos, pué.</p>
          </div>
          <a
            className="text-link"
            href="https://www.instagram.com/kybo.arg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kybo.arg <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="social-grid">
          <div className="social-preview">
            <div className="social-image">
              <Image
                src="/images/mona-lisa.webp"
                alt="Mona Lisa tomando bubble tea, parte del mundo Kybo"
                fill
                sizes="(max-width:700px) 90vw, 600px"
              />
            </div>
            <div className="social-caption">
              <h3>El arte de tentarte.</h3>
              <a
                className="text-link"
                href="https://www.instagram.com/kybo.arg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver publicaciones en Instagram <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          <div className="video-panel">
            <h3>Kybo en movimiento.</h3>
            <p>Videos, antojos y un poco de lo que pasa por acá.</p>
            {active ? (
              <div className="tiktok-frame">
                <blockquote
                  className="tiktok-embed"
                  cite="https://www.tiktok.com/@kybo.arg"
                  data-unique-id="kybo.arg"
                  data-embed-type="creator"
                  data-embed-from="embed_page"
                >
                  <section>
                    <a
                      href="https://www.tiktok.com/@kybo.arg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver videos de @kybo.arg
                    </a>
                  </section>
                </blockquote>
              </div>
            ) : (
              <button className="video-load" onClick={() => setActive(true)}>
                <Play size={36} />
                <span>Cargar videos de TikTok</span>
                <small>Se conectará con TikTok</small>
              </button>
            )}
            <a
              className="text-link"
              href="https://www.tiktok.com/@kybo.arg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos en TikTok <ArrowUpRight size={20} />
            </a>
            <p className="embed-note">
              Si los videos no cargan, podés verlos directamente en TikTok.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
