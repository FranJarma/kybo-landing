import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Kybo presentación"
      className="bg-kybo-blue relative h-screen overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="bg-kybo-orange/20 absolute top-10 left-10 h-20 w-20 rounded-full" />
        <div className="bg-kybo-orange/30 absolute top-40 right-20 h-32 w-32 rounded-full" />
        <div className="bg-kybo-orange/20 absolute bottom-10 left-1/4 h-24 w-24 rounded-full" />
        <div className="bg-kybo-orange/30 absolute top-1/3 right-1/3 h-16 w-16 rounded-full" />
        <div className="bg-kybo-orange/20 absolute right-10 bottom-20 h-28 w-28 rounded-full" />
        <div className="bg-kybo-orange/20 absolute bottom-40 left-1/2 h-24 w-24 rounded-full" />
      </div>

      <div className="relative mt-10 flex h-full flex-col items-center justify-between px-4 md:mt-0 md:flex-row md:gap-40 md:px-6">
        <div className="max-w-4xl space-y-6 text-left text-white">
          <h1 className="text-5xl font-bold tracking-wide sm:text-5xl xl:text-6xl">
            Si te gustan las cosas random, es por acá, nada más ni nada menos que en{" "}
            <span className="text-kybo-orange">Kybo</span>
          </h1>

          <p className="text-white/90 md:text-xl">
            Si nunca probaste un Bubble Tea o un Bubble Waffle, no sé qué bubble estás esperando. Y
            si ya lo hiciste... bueno, sabés que siempre hay lugar para uno más.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-kybo-orange hover:bg-kybo-orange/90 w-full text-center text-lg text-white"
              asChild
            >
              <Link href="https://menu.fu.do/kybo" target="_blank" rel="noopener">
                Ver Menú
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-kybo-orange w-full border-[#ff8000] text-center text-lg"
              asChild
            >
              <Link href="https://menu.fu.do/kybo" target="_blank" rel="noopener">
                Mi tarjeta de puntos
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="bg-kybo-orange relative mt-10 hidden aspect-square max-w-md items-center justify-center rounded-full p-4 shadow-xl md:flex md:w-full"
          role="presentation"
        >
          <Image
            src="/images/mona-lisa.webp"
            width={350}
            height={350}
            alt="Bubble Tea Kybo"
            priority
            sizes="(min-width: 768px) 350px, 100vw"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
