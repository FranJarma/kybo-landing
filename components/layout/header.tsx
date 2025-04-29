"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navItems, NavLink } from "../ui/nav-link";
import { BiMenu, BiX } from "react-icons/bi";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const MenuIcon = () =>{
    return (
      isMobileMenuOpen ? <BiX className="h-6 w-6 text-white cursor-pointer" /> : <BiMenu className="h-6 w-6 text-white cursor-pointer" />
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-kybo-blue transition-all">
      <div className="flex h-16 items-center justify-between relative z-50">
        <Link href="#" className="flex items-center gap-2 h-14 w-14 ml-4 md:h-10 md:w-10">
          <Image src="/images/logo2.webp" alt="Kybo Logo" height={100} width={100} className="h-full w-full" />
        </Link>

        <nav className="hidden md:flex gap-6 mr-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          className="md:hidden mr-4 flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <MenuIcon/>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-kybo-blue/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 z-40">
          {navItems.map((item) => (
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
