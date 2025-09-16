"use client";
import { useState } from "react";
import { InputMessage } from "../ui/input-message";
import { Button } from "../ui/button";
import { toast } from "sonner";

export function Newsletter() {
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [showErrors, setShowErrors] = useState(false);
  const { email, fullName, phone } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isValid = () => {
    return fullName.trim() && email.trim() && consent;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid()) {
      setShowErrors(true);
      return;
    }

    setIsSubmitting(true);
    setShowErrors(false);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("¡Gracias por suscribirte! 🎉");
        setFormData({ fullName: "", email: "", phone: "" });
        setConsent(false);
      } else {
        toast.error("Ocurrió un error. Probá con otro mail o nombre.");
      }
    } catch (err) {
      toast.error("Error de conexión. Intentá más tarde.");
      console.error("Error al suscribirse:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsteller" className="w-full bg-white py-32 md:py-48">
      <div className="mx-auto max-w-xl px-4 text-center md:px-6">
        <h2 className="text-kybo-blue mb-4 text-3xl font-bold">Recibí novedades y beneficios</h2>
        <p className="mb-6 text-gray-500">
          Dejanos tu email para recibir noticias, promociones, descuentos y beneficios exclusivos.
          Solo te enviaremos información relevante y podés darte de baja cuando quieras.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Tu nombre completo"
              value={fullName}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />
            {showErrors && !fullName.trim() && <InputMessage message="El nombre es obligatorio" />}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />
            {showErrors && !email.trim() && <InputMessage message="El email es obligatorio" />}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Tu teléfono"
              value={phone}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              name="consent"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
            />
            Doy mi consentimiento para recibir emails de Kybo con novedades y promociones.
          </label>

          {showErrors && !consent && <InputMessage message="Tenés que aceptar el consentimiento" />}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-kybo-orange w-full rounded-lg px-6 py-2 font-bold text-white hover:bg-orange-600 disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Suscribirme"}
          </Button>
        </form>
      </div>
    </section>
  );
}
