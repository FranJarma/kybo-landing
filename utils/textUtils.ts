export function capitalize(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function slugify(name: string): string {
  return name.toLowerCase().trim().replace(/\s+/g, "-");
}
