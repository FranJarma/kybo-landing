"use client";

import type Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let engine: Lenis | null = null;
    let disposed = false;

    const syncLock = () => {
      if (document.body.hasAttribute("data-scroll-locked")) engine?.stop();
      else engine?.start();
    };
    const setup = async () => {
      engine?.destroy();
      engine = null;
      if (disposed || motion.matches) return;
      try {
        const { default: Lenis } = await import("lenis");
        if (disposed || motion.matches || engine) return;
        engine = new Lenis({
          autoRaf: true,
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
        });
        syncLock();
      } catch {
        // The browser's native scroll remains available if the enhancement cannot load.
      }
    };
    // Native links and keyboard focus take over immediately from wheel inertia.
    const cancelInertia = () => {
      if (engine?.isScrolling === "smooth" && !engine.isStopped) {
        engine.scrollTo(engine.actualScroll, { immediate: true });
      }
    };
    const observer = new MutationObserver(syncLock);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked"] });
    motion.addEventListener("change", setup);
    window.addEventListener("pointerdown", cancelInertia, { passive: true });
    window.addEventListener("click", cancelInertia);
    window.addEventListener("keydown", cancelInertia);
    void setup();

    return () => {
      disposed = true;
      observer.disconnect();
      motion.removeEventListener("change", setup);
      window.removeEventListener("pointerdown", cancelInertia);
      window.removeEventListener("click", cancelInertia);
      window.removeEventListener("keydown", cancelInertia);
      engine?.destroy();
    };
  }, []);

  return null;
}
