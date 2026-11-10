export const landingSections = {
  favorites: { id: "favoritos", legacyId: "nuestros-productos", label: "Los favoritos" },
  location: { id: "encontranos", legacyId: "los-pibardos", label: "Encontranos" },
  social: { id: "mundo-kybo", legacyId: "nuestras-redes", label: "Mundo Kybo" },
} as const;

export const navItems = Object.values(landingSections).map(({ id, label }) => ({
  href: `/#${id}`,
  label,
}));
