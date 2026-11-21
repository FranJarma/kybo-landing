export type CarouselGeometry = {
  cardWidth: number;
  gap: number;
  scrollLeft: number;
  total: number;
  viewportWidth: number;
};

export type CarouselDirection = "previous" | "next" | "first" | "last";

export function getCarouselRange(geometry: CarouselGeometry) {
  const { cardWidth, gap, scrollLeft, total, viewportWidth } = geometry;
  const step = Math.max(1, cardWidth + gap);
  const visible = Math.max(1, Math.round((viewportWidth + gap) / step));
  const maxScroll = Math.max(0, total * step - gap - viewportWidth);
  const index = Math.min(Math.max(0, total - visible), Math.max(0, Math.round(scrollLeft / step)));

  return {
    end: scrollLeft >= maxScroll - 2,
    first: total ? index + 1 : 0,
    last: Math.min(total, index + visible),
    start: scrollLeft < 2,
    visible,
  };
}

export function getCarouselTarget(geometry: CarouselGeometry, direction: CarouselDirection) {
  const { cardWidth, gap, total, viewportWidth } = geometry;
  const range = getCarouselRange(geometry);
  const step = cardWidth + gap;
  const maxScroll = Math.max(0, total * step - gap - viewportWidth);
  if (direction === "first") return 0;
  if (direction === "last") return maxScroll;
  const index = range.first - 1 + (direction === "next" ? range.visible : -range.visible);
  return Math.max(0, Math.min(maxScroll, index * step));
}
