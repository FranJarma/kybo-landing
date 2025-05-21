"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

import { navItems, NavLink } from "../ui/nav-link";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className="bg-kybo-blue sticky top-0 z-50 w-full transition-all">
      <div className="relative z-50 flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex h-14 w-14 items-center md:h-10 md:w-10">
          <Image
            alt="Kybo Logo"
            className="h-full w-full"
            height={100}
            src="/images/logo2.webp"
            width={100}
          />
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          className="flex items-center md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir o cerrar menú"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <BiX className="h-6 w-6 text-white" />
          ) : (
            <BiMenu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-kybo-blue fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold text-white backdrop-blur-sm md:hidden">
          {navItems.map(item => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
