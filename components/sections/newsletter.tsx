import { NewsletterForm } from "../newsteller-form";

export function Newsletter() {
  return (
    <section id="newsteller" className="w-full bg-white py-32 md:py-48">
      <div className="mx-auto max-w-xl px-4 text-center md:px-6">
        <h2 className="text-kybo-blue mb-4 text-3xl font-bold">Recibí novedades y beneficios</h2>
        <p className="mb-6 text-gray-500">
          Dejanos tu email para recibir noticias, promociones, descuentos y beneficios exclusivos.
          Solo te enviaremos información relevante y podés darte de baja cuando quieras.
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}
