import Image from "next/image";
import Link from "next/link";
import { navItems, NavLink } from "../ui/nav-link";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#013e5e] transition-all">
            <div className="flex h-16 items-center justify-between">
            <Link href="#" className="flex items-center gap-2 ml-4">
                <Image src="/images/logo2.webp" alt="Kybo Logo" width={100} height={50} className="h-auto" />
            </Link>
            <nav className="flex gap-6 mr-4">
                {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} label={item.label} />
                ))}
            </nav>
            </div>
      </header>
    )
}