import Link from "next/link";

export const navItems = [
    { href: "#bubble-teas", label: "Bubble Teas" },
    { href: "#bubble-waffles", label: "Bubble Waffles" },
    { href: "#nosotros", label: "Nosotros" },
];
  
export function NavLink({ href, label }: { href: string; label: string }) {
    return (
      <Link
        href={href}
        className="text-sm md:text-lg font-medium text-white hover:text-[#ff8000] transition-colors duration-300 scroll-smooth"
      >
        {label}
      </Link>
    );
}