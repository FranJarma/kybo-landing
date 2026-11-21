import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { URL } from "node:url";

import { getCarouselRange, getCarouselTarget } from "../lib/carousel-navigation.ts";
import { productCategories, products } from "../lib/products.ts";

test("the complete catalogue keeps its 43 unique products and nine category counts", () => {
  assert.equal(products.length, 43);
  assert.equal(new Set(products.map(product => product.id)).size, 43);
  assert.deepEqual(
    productCategories.map(
      category => products.filter(product => product.category === category.id).length,
    ),
    [3, 4, 3, 7, 3, 3, 6, 5, 9],
  );
  for (const product of products) {
    assert.ok(existsSync(new URL(`../public${product.image}`, import.meta.url)), product.image);
  }
});

for (const visible of [1, 2, 3]) {
  test(`the last page keeps ${visible} complete cards and disables the forward control`, () => {
    const geometry = {
      cardWidth: 280,
      gap: 24,
      viewportWidth: visible * 280 + (visible - 1) * 24,
      scrollLeft: 0,
      total: 43,
    };
    const scrollLeft = getCarouselTarget(geometry, "last");
    const range = getCarouselRange({ ...geometry, scrollLeft });
    assert.equal(range.last, 43);
    assert.equal(range.last - range.first + 1, visible);
    assert.equal(range.end, true);
    assert.equal(getCarouselTarget({ ...geometry, scrollLeft }, "next"), scrollLeft);
  });
}

test("forward/backward movement uses a complete visible page and clamps at the start", () => {
  const geometry = { cardWidth: 400, gap: 24, viewportWidth: 1248, scrollLeft: 0, total: 7 };
  assert.equal(getCarouselTarget(geometry, "next"), 1272);
  assert.equal(getCarouselTarget({ ...geometry, scrollLeft: 1272 }, "previous"), 0);
  assert.equal(getCarouselTarget(geometry, "previous"), 0);
});

test("fractional card widths do not create an incomplete last page", () => {
  const geometry = { cardWidth: 282.65625, gap: 24, viewportWidth: 896, scrollLeft: 0, total: 4 };
  const target = getCarouselTarget(geometry, "next");
  assert.equal(getCarouselRange({ ...geometry, scrollLeft: target }).first, 2);
  assert.equal(getCarouselRange({ ...geometry, scrollLeft: target }).last, 4);
});

test("short categories and an empty catalogue have no enabled movement", () => {
  for (const total of [0, 1, 2, 3]) {
    const geometry = { cardWidth: 400, gap: 24, viewportWidth: 1248, scrollLeft: 0, total };
    assert.equal(getCarouselTarget(geometry, "next"), 0);
    const range = getCarouselRange(geometry);
    assert.equal(range.start, true);
    assert.equal(range.end, true);
    assert.equal(range.last, total);
  }
});
