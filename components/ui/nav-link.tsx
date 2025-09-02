import Link from "next/link";

export const navItems = [
  { href: "#nuestros-productos", label: "Nuestros productos" },
  { href: "#nosotros", label: "Los pibardos" },
  { href: "#ustedes", label: "La people" },
];

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

export function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-kybo-orange scroll-smooth text-4xl font-medium text-white transition-colors duration-300 md:text-lg"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
