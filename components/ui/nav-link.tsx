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
