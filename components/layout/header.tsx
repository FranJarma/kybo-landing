"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, NavLink } from "../ui/nav-link";
import { BiMenu, BiX } from "react-icons/bi";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MenuIcon = () => {
    return isMobileMenuOpen ? (
      <BiX className="h-6 w-6 cursor-pointer text-white" />
    ) : (
      <BiMenu className="h-6 w-6 cursor-pointer text-white" />
    );
  };

  return (
    <header className="bg-kybo-blue sticky top-0 z-50 w-full transition-all">
      <div className="relative z-50 flex h-16 items-center justify-between">
        <Link href="#" className="ml-4 flex h-14 w-14 items-center gap-2 md:h-10 md:w-10">
          <Image
            src="/images/logo2.webp"
            alt="Kybo Logo"
            height={100}
            width={100}
            className="h-full w-full"
          />
        </Link>

        <nav className="mr-6 hidden gap-6 md:flex">
          {navItems.map(item => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          className="mr-4 flex items-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-kybo-blue/90 fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-sm">
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
