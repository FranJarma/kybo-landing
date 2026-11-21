"use client";

import { useEffect, useRef, useState } from "react";

import {
  type CarouselDirection,
  type CarouselGeometry,
  getCarouselRange,
  getCarouselTarget,
} from "@/lib/carousel-navigation";

export function useProductRail(total: number) {
  const rail = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState({
    end: true,
    first: 1,
    last: 1,
    start: true,
    visible: 1,
  });

  const measure = (): CarouselGeometry | null => {
    const element = rail.current;
    const card = element?.firstElementChild;
    if (!element || !card) return null;
    return {
      cardWidth: card.getBoundingClientRect().width,
      gap: Number.parseFloat(getComputedStyle(element).columnGap) || 0,
      scrollLeft: element.scrollLeft,
      total,
      viewportWidth: element.clientWidth,
    };
  };

  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => {
      const card = element.firstElementChild;
      if (!card) return;
      const next = getCarouselRange({
        cardWidth: card.getBoundingClientRect().width,
        gap: Number.parseFloat(getComputedStyle(element).columnGap) || 0,
        scrollLeft: element.scrollLeft,
        total,
        viewportWidth: element.clientWidth,
      });
      setPosition(current =>
        current.first === next.first &&
        current.last === next.last &&
        current.start === next.start &&
        current.end === next.end &&
        current.visible === next.visible
          ? current
          : next,
      );
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener("scroll", update);
    };
  }, [total]);

  const move = (direction: CarouselDirection) => {
    const geometry = measure();
    if (!geometry || !rail.current) return;
    rail.current.scrollTo({
      left: getCarouselTarget(geometry, direction),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  return { move, position, rail };
}
