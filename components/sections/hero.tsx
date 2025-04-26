import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden bg-[#013e5e] py-20 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
            <div className="bubble"></div>
            <div className="bubble absolute top-10 left-10 h-20 w-20 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-40 right-20 h-32 w-32 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-1/3 right-1/3 h-16 w-16 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-20 right-10 h-28 w-28 rounded-full bg-[#ff8000]/20"></div>
            <div className="bubble absolute top-20 right-50 h-32 w-32 rounded-full bg-[#ff8000]/30"></div>
            <div className="bubble absolute bottom-40 left-1/2 h-24 w-24 rounded-full bg-[#ff8000]/20"></div>
            </div>
            <div className="relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
                <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2 md:max-w-8/12">
                    <h1 className="text-4xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
                    Descubrí el sabor de la felicidad junto a <span className="text-[#ff8000]">Kybo</span>
                    </h1>
                    <p className="tracking-wide text-white/90 md:text-xl">
                    Nos preocupamos por crear experiencias únicas a través de nuestros Bubble Teas y Bubble Waffles artesanales,
                    elaborados con ingredientes de primera calidad en Salta, Argentina.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-[#ff8000] hover:bg-[#ff8000]/90 text-white text-lg" asChild>
                        <Link target="_blank" href="https://menu.fu.do/kybo">Ver Menú</Link>
                    </Button>
                    <Button size="lg" className="text-lg outline-[#ff8000]" variant="outline" asChild>
                        <Link target="_blank" href="https://menu.fu.do/kybo">Mi tarjeta de puntos</Link>
                    </Button>
                </div>
                </div>
                <div className="hidden md:block relative mx-auto aspect-square w-full max-w-md rounded-full bg-[#ff8000] p-4 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                    src="/images/mona-lisa.webp"
                    width={350}
                    height={350}
                    alt="Bubble Tea Kybo"
                    className="rounded-full object-cover"
                    />
                </div>
                <div className="absolute -right-4 -top-10 h-40 w-8 rotate-12 rounded-full bg-[#013e5e] shadow-lg"></div>
                </div>
            </div>
            </div>
        </section>
    )
}