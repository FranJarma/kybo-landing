declare module "page-flip" {
  export class PageFlip {
    constructor(element: HTMLElement, settings: Record<string, number | string | boolean>);
    destroy(): void;
    loadFromImages(images: string[]): void;
    loadFromHTML(pages: HTMLElement[]): void;
    on(event: string, callback: (event: { data: unknown; object: PageFlip }) => void): void;
    getCurrentPageIndex(): number;
    getOrientation(): "portrait" | "landscape";
    getState(): string;
    flipNext(corner?: "top" | "bottom"): void;
    flipPrev(corner?: "top" | "bottom"): void;
    flip(page: number, corner?: "top" | "bottom"): void;
    turnToPage(page: number): void;
    turnToNextPage(): void;
    turnToPrevPage(): void;
  }
}
