"use client";

import type { PageFlip } from "page-flip";
import { useEffect, useRef } from "react";

import type { BookCommand, BookEvent } from "@/lib/menu-book-protocol";
import menu from "@/lib/menu-document.json";

import styles from "./menu-book.module.css";

// The isolated document also disposes the legacy engine's animation loop on resize/unmount.
export function MenuBookFrame() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let book: PageFlip | null = null;
    let initializing = false;
    let disposed = false;
    let reduced = false;
    let pagesPerSpread = 1;
    let touch: { x: number; y: number } | null = null;
    const container = host.current;
    const send = (event: BookEvent) => window.parent.postMessage(event, window.location.origin);
    const change = (direction: "next" | "previous") => {
      if (!book || book.getState() !== "read") return;
      const page = book.getCurrentPageIndex();
      if (direction === "next" ? page + pagesPerSpread >= menu.pageCount : page === 0) return;
      if (direction === "next") {
        if (reduced) book.turnToNextPage();
        else book.flipNext("bottom");
      } else if (reduced) book.turnToPrevPage();
      else book.flipPrev("bottom");
    };

    const receive = async (event: MessageEvent<BookCommand>) => {
      if (event.origin !== window.location.origin || event.source !== window.parent) return;
      const command = event.data;
      if (command?.type === "kybo-book-probe") {
        if (book) send({ type: "kybo-book-page", page: book.getCurrentPageIndex() });
        else if (!initializing) send({ type: "kybo-book-ready" });
      } else if (command?.type === "kybo-book-init" && !initializing) {
        initializing = true;
        reduced = command.reduced;
        try {
          const { PageFlip } = await import("page-flip");
          if (disposed || !host.current) return;
          const { pageHeight, pageWidth, spread } = command.layout;
          pagesPerSpread = spread;
          const element = document.createElement("div");
          element.style.width = `${pageWidth * spread}px`;
          element.style.height = `${pageHeight}px`;
          host.current.append(element);
          const pages = menu.pages.map(page => {
            const leaf = document.createElement("div");
            leaf.className = styles.paper;
            leaf.dataset.density = "soft";
            const image = document.createElement("img");
            image.src = page.image;
            image.alt = `Página ${page.number}: ${page.title}`;
            image.draggable = false;
            leaf.append(image);
            return leaf;
          });
          book = new PageFlip(element, {
            width: pageWidth,
            height: pageHeight,
            size: "fixed",
            autoSize: false,
            usePortrait: spread === 1,
            startPage: command.page,
            showCover: false,
            drawShadow: !reduced,
            maxShadowOpacity: 0.3,
            flippingTime: 650,
            mobileScrollSupport: false,
            useMouseEvents: !reduced,
            showPageCorners: false,
            swipeDistance: 35,
          });
          book.on("flip", event => {
            if (typeof event.data === "number") send({ type: "kybo-book-page", page: event.data });
          });
          book.on("changeState", event =>
            send({ type: "kybo-book-state", turning: event.data !== "read" }),
          );
          book.on("init", () =>
            send({ type: "kybo-book-page", page: book?.getCurrentPageIndex() ?? command.page }),
          );
          book.loadFromHTML(pages);
        } catch {
          send({ type: "kybo-book-error" });
        }
      } else if (book && command?.type === "kybo-book-go") {
        if (command.animate && !reduced) book.flip(command.page, "bottom");
        else book.turnToPage(command.page);
      } else if (command?.type === "kybo-book-next") change("next");
      else if (command?.type === "kybo-book-previous") change("previous");
    };
    const keyboard = (event: KeyboardEvent) => {
      if (!book || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        change(event.key === "ArrowRight" ? "next" : "previous");
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        book.turnToPage(event.key === "Home" ? 0 : menu.pageCount - 1);
      }
    };
    // Interpret swipes consistently without the engine's 250ms touch/drag race.
    const touchStart = (event: TouchEvent) => {
      event.stopPropagation();
      touch = null;
      if (!book || book.getState() !== "read" || event.touches.length !== 1) return;
      touch = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      if (event.cancelable) event.preventDefault();
    };
    const touchMove = (event: TouchEvent) => {
      event.stopPropagation();
      if (event.touches.length !== 1) touch = null;
      if (touch && event.cancelable) event.preventDefault();
    };
    const touchEnd = (event: TouchEvent) => {
      event.stopPropagation();
      if (!touch || !event.changedTouches.length) return;
      const point = event.changedTouches[0];
      const dx = point.clientX - touch.x;
      const dy = point.clientY - touch.y;
      touch = null;
      if (event.cancelable) event.preventDefault();
      if (Math.abs(dx) >= 35 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        change(dx < 0 ? "next" : "previous");
      }
    };
    window.addEventListener("message", receive);
    window.addEventListener("keydown", keyboard);
    container?.addEventListener("touchstart", touchStart, { capture: true, passive: false });
    container?.addEventListener("touchmove", touchMove, { capture: true, passive: false });
    container?.addEventListener("touchend", touchEnd, { capture: true, passive: false });
    send({ type: "kybo-book-ready" });
    return () => {
      disposed = true;
      window.removeEventListener("message", receive);
      window.removeEventListener("keydown", keyboard);
      container?.removeEventListener("touchstart", touchStart, true);
      container?.removeEventListener("touchmove", touchMove, true);
      container?.removeEventListener("touchend", touchEnd, true);
      book?.destroy();
    };
  }, []);

  return (
    <main
      id="main-content"
      className={styles.frameRoot}
      ref={host}
      aria-label="Hojas del menú de Kybo"
    />
  );
}
