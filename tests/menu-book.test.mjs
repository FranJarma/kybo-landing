import assert from "node:assert/strict";
import test from "node:test";

import { getBookLayout, getBookSpread } from "../lib/menu-book.ts";

for (const [width, height] of [
  [288, 450],
  [358, 600],
  [736, 800],
  [992, 600],
  [1408, 780],
  [804, 220],
]) {
  test(`complete pages fit a ${width} by ${height} reading area`, () => {
    const result = getBookLayout(width, height);
    assert.ok(result.pageWidth > 0 && result.pageHeight > 0);
    assert.ok(result.pageWidth * result.spread <= width);
    assert.ok(result.pageHeight <= height);
    assert.ok(Math.abs(result.pageWidth / result.pageHeight - 420 / 595) < 0.01);
    assert.equal(result.spread, width >= 800 ? 2 : 1);
  });
}

test("spread ranges preserve every page including an odd final page", () => {
  assert.deepEqual(getBookSpread(0, 2, 9), [0, 1]);
  assert.deepEqual(getBookSpread(3, 2, 9), [2, 3]);
  assert.deepEqual(getBookSpread(8, 2, 9), [8]);
  assert.deepEqual(getBookSpread(99, 2, 9), [8]);
  assert.deepEqual(getBookSpread(4, 1, 9), [4]);
  assert.deepEqual(getBookSpread(-1, 1, 9), [0]);
});
