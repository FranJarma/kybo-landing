import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f9fa] p-6 text-center">
      <div className="max-w-lg">
        <Image
          src="/images/estatua.webp"
          alt="Estatua con bubble tea"
          width={300}
          height={300}
          className="mx-auto mb-6 rounded-2xl shadow-lg"
          priority
        />

        <h1 className="text-kybo-blue text-4xl font-bold">¡Oops! Página no encontrada</h1>
        <p className="mt-4 text-lg text-gray-700">
          Parece que la URL que escribiste no existe. Mejor volvamos a disfrutar la{" "}
          <span className="text-kybo-orange font-semibold">Experiencia Kybo</span>.
        </p>

        <Link
          href="/"
          className="bg-kybo-orange hover:bg-kybo-orange/90 mt-6 inline-block rounded-2xl px-6 py-3 text-lg font-semibold text-white shadow-md transition"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
