import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-kybo-blue">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 h-20 w-20 rounded-full bg-kybo-orange/20" />
        <div className="absolute top-40 right-20 h-32 w-32 rounded-full bg-kybo-orange/30" />
        <div className="absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-kybo-orange/20" />
        <div className="absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-kybo-orange/30" />
        <div className="absolute bottom-20 right-10 h-28 w-28 rounded-full bg-kybo-orange/20" />
        <div className="absolute bottom-40 left-1/2 h-24 w-24 rounded-full bg-kybo-orange/20" />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-40 md:px-6 md:justify-between">
        <div className="max-w-4xl space-y-6 text-left text-white">
          <h1 className="text-4xl font-bold tracking-wide sm:text-5xl xl:text-6xl">
            Si te gustan las cosas random, es por acá, nada más ni nada menos que en <span className="text-kybo-orange">Kybo</span>
          </h1>
          <p className="text-white/90 md:text-xl">
            Si nunca probaste un Bubble Tea o un Bubble Waffle, no sé qué bubble estás esperando. Y si ya lo hiciste... bueno, sabés que siempre hay lugar para uno más.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button size="lg" className="bg-kybo-orange hover:bg-kybo-orange/90 text-white text-lg" asChild>
              <Link target="_blank" href="https://menu.fu.do/kybo">Ver Menú</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-[#ff8000] text-kybo-orange" asChild>
              <Link target="_blank" href="https://menu.fu.do/kybo">Mi tarjeta de puntos</Link>
            </Button>
          </div>
        </div>

        <div className="relative aspect-square max-w-md items-center justify-center rounded-full hidden mt-10 bg-kybo-orange p-4 shadow-xl md:w-full md:flex">
          <Image
            src="/images/mona-lisa.webp"
            width={350}
            height={350}
            alt="Bubble Tea Kybo"
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
