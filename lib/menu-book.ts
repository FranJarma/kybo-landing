const PAGE_RATIO = 420 / 595;

export function getBookLayout(width: number, height: number) {
  const spread = width >= 800 ? 2 : 1;
  const pageWidth = Math.max(1, Math.floor(Math.min(width / spread, height * PAGE_RATIO)));
  const pageHeight = Math.max(1, Math.floor(pageWidth / PAGE_RATIO));
  return { pageHeight, pageWidth, spread };
}

export function getBookSpread(page: number, spread: number, count: number) {
  const selected = Math.max(0, Math.min(count - 1, page));
  const first = Math.floor(selected / spread) * spread;
  return Array.from({ length: Math.min(spread, count - first) }, (_, index) => first + index);
}
