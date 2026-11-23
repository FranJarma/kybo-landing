"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const videoSource = "/videos/hero-95097ceb55.mp4";
const posterSource = "/images/hero-95097ceb55-poster.webp";

export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const preference = useRef<"play" | "pause" | null>(null);
  const syncPlayback = useRef(() => {});
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;
    let visible = false;
    const sync = () => {
      const autoplay = !motion.matches && !connection?.saveData;
      const wantsPlayback = preference.current === "play" || (!preference.current && autoplay);
      if (visible && !document.hidden && wantsPlayback && !element.error) {
        if (!element.getAttribute("src")) element.src = videoSource;
        void element.play().catch(() => {});
      } else element.pause();
    };
    const motionChanged = () => {
      preference.current = null;
      sync();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 },
    );
    syncPlayback.current = sync;
    observer.observe(element);
    motion.addEventListener("change", motionChanged);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", motionChanged);
      document.removeEventListener("visibilitychange", sync);
      syncPlayback.current = () => {};
      element.pause();
    };
  }, []);

  return (
    <div className="hero-media">
      <Image
        src={posterSource}
        alt="Bubble tea de Kybo con perlas sobre un fondo naranja"
        width={720}
        height={1280}
        priority
        unoptimized
        className="hero-video-poster"
      />
      <video
        ref={video}
        className="hero-video"
        width={720}
        height={1280}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        style={{ opacity: hasFrame && !failed ? 1 : 0 }}
        onLoadedData={() => setHasFrame(true)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
      {!failed && (
        <button
          type="button"
          className="hero-video-toggle"
          aria-label={playing ? "Pausar video" : "Reproducir video"}
          title={playing ? "Pausar video" : "Reproducir video"}
          onClick={() => {
            preference.current = video.current?.paused ? "play" : "pause";
            syncPlayback.current();
          }}
        >
          {playing ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
        </button>
      )}
    </div>
  );
}
