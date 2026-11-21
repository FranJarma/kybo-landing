import type { getBookLayout } from "./menu-book";

export type BookLayout = ReturnType<typeof getBookLayout>;

export type BookCommand =
  | { type: "kybo-book-probe" }
  | { layout: BookLayout; page: number; reduced: boolean; type: "kybo-book-init" }
  | { animate: boolean; page: number; type: "kybo-book-go" }
  | { animate: boolean; type: "kybo-book-next" | "kybo-book-previous" };

export type BookEvent =
  | { type: "kybo-book-ready" }
  | { page: number; type: "kybo-book-page" }
  | { turning: boolean; type: "kybo-book-state" }
  | { type: "kybo-book-error" };
