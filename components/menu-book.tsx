"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Download, Expand, Minimize, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getBookLayout, getBookSpread } from "@/lib/menu-book";
import type { BookCommand, BookEvent, BookLayout } from "@/lib/menu-book-protocol";
import menu from "@/lib/menu-document.json";

import styles from "./menu-book.module.css";

export function MenuBook() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const currentPage = useRef(0);
  const [layout, setLayout] = useState<BookLayout | null>(null);
  const [page, setPage] = useState(0);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [turning, setTurning] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [canFullscreen, setCanFullscreen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [zoomPage, setZoomPage] = useState(0);
  const pagesPerSpread = failed ? 1 : (layout?.spread ?? 1);
  const spread = getBookSpread(page, pagesPerSpread, menu.pageCount);
  const first = spread[0];
  const last = spread[spread.length - 1];
  const range = first === last ? `${first + 1}` : `${first + 1}–${last + 1}`;
  const pdfUrl = `/menu.pdf?v=${menu.version}`;
  const send = (command: BookCommand) =>
    frame.current?.contentWindow?.postMessage(command, window.location.origin);

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    let timer: ReturnType<typeof setTimeout>;
    const measure = () => {
      const { height, width } = element.getBoundingClientRect();
      if (!width || !height) return;
      const next = getBookLayout(width, height);
      setLayout(previous =>
        previous?.pageWidth === next.pageWidth &&
        previous.pageHeight === next.pageHeight &&
        previous.spread === next.spread
          ? previous
          : next,
      );
    };
    measure();
    const observer = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(measure, 120);
    });
    observer.observe(element);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = () => setReduced(preference.matches);
    const syncFullscreen = () => setFullscreen(!!document.fullscreenElement);
    motion();
    setCanFullscreen(document.fullscreenEnabled);
    preference.addEventListener("change", motion);
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      preference.removeEventListener("change", motion);
      document.removeEventListener("fullscreenchange", syncFullscreen);
    };
  }, []);

  useEffect(() => {
    setReady(false);
    setTurning(false);
    const probe = window.setInterval(() => send({ type: "kybo-book-probe" }), 250);
    const receive = (event: MessageEvent<BookEvent>) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== frame.current?.contentWindow ||
        !layout
      )
        return;
      if (event.data?.type === "kybo-book-ready") {
        const start = getBookSpread(currentPage.current, layout.spread, menu.pageCount)[0];
        send({ type: "kybo-book-init", layout, page: start, reduced });
      } else if (event.data?.type === "kybo-book-page") {
        clearInterval(probe);
        currentPage.current = event.data.page;
        setPage(event.data.page);
        setReady(true);
        setFailed(false);
      } else if (event.data?.type === "kybo-book-state") setTurning(event.data.turning);
      else if (event.data?.type === "kybo-book-error") {
        clearInterval(probe);
        setTurning(false);
        setFailed(true);
        setReady(false);
      }
    };
    window.addEventListener("message", receive);
    return () => {
      clearInterval(probe);
      window.removeEventListener("message", receive);
    };
  }, [layout, reduced]);

  useEffect(() => {
    // A boundary page disables its arrow after render; keep keyboard navigation available.
    if (
      ready &&
      (document.activeElement === document.body || document.activeElement?.id === "main-content")
    ) {
      root.current?.focus({ preventScroll: true });
    }
  }, [first, ready]);

  const go = (target: number, animate = !reduced) => {
    if (turning) return;
    if (failed) {
      currentPage.current = target;
      setPage(target);
    } else send({ type: "kybo-book-go", page: target, animate });
  };
  const move = (direction: "next" | "previous") => {
    if (turning || (direction === "next" ? last === menu.pageCount - 1 : first === 0)) return;
    if (failed)
      go(Math.max(0, Math.min(menu.pageCount - 1, first + (direction === "next" ? 1 : -1))));
    else
      send({
        type: direction === "next" ? "kybo-book-next" : "kybo-book-previous",
        animate: !reduced,
      });
  };
  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await root.current?.requestFullscreen();
    } catch {
      setCanFullscreen(false);
    }
  };

  useEffect(() => {
    const keyboard = (event: KeyboardEvent) => {
      if (
        zoomed ||
        (!ready && !failed) ||
        (event.target as HTMLElement).closest("select,a,input,textarea,[contenteditable='true']") ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      )
        return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        move(event.key === "ArrowRight" ? "next" : "previous");
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        go(event.key === "Home" ? 0 : menu.pageCount - 1, false);
      }
    };
    window.addEventListener("keydown", keyboard);
    return () => window.removeEventListener("keydown", keyboard);
  });

  return (
    <div ref={root} tabIndex={-1} className={styles.reader}>
      <header className={styles.toolbar}>
        <h1 className={styles.srOnly}>Menú</h1>
        <Link href="/" className={styles.back} aria-label="Volver al inicio de Kybo">
          <Image src="/images/logo1.webp" alt="Kybo" width={100} height={43} priority />
        </Link>
        <div className={styles.tools}>
          <a
            href={pdfUrl}
            download="menu.pdf"
            className={styles.tool}
            aria-label="Descargar el menú en PDF"
            title="Descargar PDF"
          >
            <Download size={20} aria-hidden="true" />
            <span>PDF</span>
          </a>
          {canFullscreen && (
            <button
              type="button"
              className={styles.tool}
              onClick={toggleFullscreen}
              aria-label={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
              title="Pantalla completa"
            >
              {fullscreen ? <Minimize size={20} /> : <Expand size={20} />}
            </button>
          )}
        </div>
      </header>
      <div className={styles.stage} ref={stage} aria-busy={!ready && !failed}>
        {(!ready || failed) && (
          <div className={styles.fallback}>
            <Image
              src={menu.pages[page].image}
              alt={`Página ${page + 1}: ${menu.pages[page].title}`}
              fill
              unoptimized
              priority
              sizes="100vw"
            />
          </div>
        )}
        {layout && (
          <iframe
            key={`${layout.pageWidth}-${layout.pageHeight}-${layout.spread}-${reduced}`}
            ref={frame}
            src="/menu/frame"
            title="Libro interactivo del menú de Kybo: arrastrá una esquina para pasar las hojas"
            tabIndex={-1}
            className={styles.book}
            style={{
              width: layout.pageWidth * layout.spread,
              height: layout.pageHeight,
              opacity: ready ? 1 : 0,
              pointerEvents: ready ? "auto" : "none",
            }}
          />
        )}
      </div>
      <nav className={styles.controls} aria-label="Páginas del menú">
        <button
          type="button"
          className={styles.arrow}
          onClick={() => move("previous")}
          disabled={first === 0 || (!ready && !failed)}
          aria-disabled={first === 0 || turning || (!ready && !failed)}
          aria-label="Página anterior"
        >
          <ArrowLeft aria-hidden="true" />
        </button>
        <div className={styles.position}>
          <output aria-live="polite" aria-atomic="true">
            {first === last ? "Página" : "Páginas"} {range} de {menu.pageCount}
          </output>
          <select
            aria-label="Ir a una página del menú"
            value={first}
            onChange={event => go(Number(event.target.value))}
            disabled={!ready && !failed}
          >
            {Array.from(
              { length: Math.ceil(menu.pageCount / pagesPerSpread) },
              (_, index) => index * pagesPerSpread,
            ).map(index => (
              <option key={index} value={index}>
                {index + 1}. {menu.pages[index].title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => move("next")}
          disabled={last === menu.pageCount - 1 || (!ready && !failed)}
          aria-disabled={last === menu.pageCount - 1 || turning || (!ready && !failed)}
          aria-label="Página siguiente"
        >
          <ArrowRight aria-hidden="true" />
        </button>
        <Dialog.Root open={zoomed} onOpenChange={setZoomed}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className={styles.zoomButton}
              onClick={() => setZoomPage(first)}
              aria-label="Ampliar página"
              title="Ampliar página"
            >
              <ZoomIn size={22} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal container={root.current}>
            <Dialog.Overlay className={styles.zoomOverlay} />
            <Dialog.Content className={styles.zoomDialog}>
              <Dialog.Title className={styles.srOnly}>Menú ampliado</Dialog.Title>
              <Dialog.Description className={styles.srOnly}>
                Desplazate para leer la página completa. Elegí otra página o cerrá para volver al
                libro.
              </Dialog.Description>
              <div className={styles.zoomToolbar}>
                <select
                  aria-label="Página ampliada"
                  value={zoomPage}
                  onChange={event => setZoomPage(Number(event.target.value))}
                >
                  {menu.pages.map((p, i) => (
                    <option value={i} key={i}>
                      {p.number}. {p.title}
                    </option>
                  ))}
                </select>
                <Dialog.Close asChild>
                  <button type="button" className={styles.tool} aria-label="Cerrar ampliación">
                    <X />
                  </button>
                </Dialog.Close>
              </div>
              <div className={styles.zoomScroll} tabIndex={0}>
                <Image
                  src={menu.pages[zoomPage].image}
                  alt={`Página ${zoomPage + 1}: ${menu.pages[zoomPage].title}`}
                  width={1800}
                  height={2550}
                  unoptimized
                  className={styles.zoomImage}
                />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
      {failed && (
        <p className={styles.error} role="status">
          Podés recorrer las páginas con las flechas o descargar el PDF.
        </p>
      )}
      <div className={styles.srOnly} aria-label="Contenido del menú en texto">
        {menu.pages.map(p => (
          <section key={p.number}>
            <h2>{p.title}</h2>
            <p>{p.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
