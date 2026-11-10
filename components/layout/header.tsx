"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navItems } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const selectedDestination = useRef<string | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const selectDestination = (href: string) => {
    selectedDestination.current = href;
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" aria-label="Kybo, inicio" className="brand">
          <Image src="/images/logo1.webp" width={150} height={64} alt="Kybo" priority />
        </Link>
        <nav className="site-nav" aria-label="Principal">
          {navItems.map(item => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="action action-small" href="/menu">
            Ver menú <ArrowUpRight size={18} />
          </Link>
        </nav>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className="menu-toggle" aria-label="Abrir navegación">
              <Menu aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-menu-overlay" />
            <Dialog.Content
              className="mobile-menu-panel"
              aria-modal="true"
              aria-describedby={undefined}
              onOpenAutoFocus={event => {
                event.preventDefault();
                closeButton.current?.focus();
              }}
              onCloseAutoFocus={event => {
                const destination = selectedDestination.current;
                selectedDestination.current = null;
                if (!destination) return;
                event.preventDefault();
                if (destination.startsWith("/#") && window.location.pathname === "/") {
                  document.getElementById(destination.slice(2))?.focus({ preventScroll: true });
                }
              }}
            >
              <Dialog.Title className="sr-only">Navegación de Kybo</Dialog.Title>
              <div className="shell mobile-menu-header">
                <Link
                  href="/"
                  className="brand"
                  aria-label="Kybo, inicio"
                  onClick={() => selectDestination("/")}
                >
                  <Image src="/images/logo1.webp" width={150} height={64} alt="Kybo" />
                </Link>
                <Dialog.Close asChild>
                  <button
                    ref={closeButton}
                    className="mobile-menu-close"
                    aria-label="Cerrar navegación"
                  >
                    <X aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="shell mobile-menu-navigation" aria-label="Principal">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => selectDestination(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link className="action" href="/menu" onClick={() => selectDestination("/menu")}>
                  Ver menú <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
