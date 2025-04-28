import Link from "next/link";

export const navItems = [
    { href: "#bubble-teas", label: "Bubble Teas" },
    { href: "#bubble-waffles", label: "Bubble Waffles" },
    { href: "#nosotros", label: "Los Pibardos" },
    { href: "#ustedes", label: "La people" },
];
 
type NavLinkProps = {
    href: string;
    label: string;
    onClick?: () => void;
}

export function NavLink({ href, label, onClick }: NavLinkProps) {
    return (
      <Link
        href={href}
        className="text-4xl md:text-lg font-medium text-white hover:text-kybo-orange transition-colors duration-300 scroll-smooth"
        onClick={onClick}
      >
        {label}
      </Link>
    );
}