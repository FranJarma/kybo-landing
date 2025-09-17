"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewsletterForm } from "./newsteller-form";

export function DiscountDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("kybo_newsletter_subscribed");
    if (!subscribed) {
      const timeout = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton
        className="max-w-xl border border-white/10 bg-white shadow-2xl"
      >
        <DialogHeader>
          <img
            src="/images/logo1.webp"
            alt="Mona Lisa con Bubble Tea"
            className="mx-auto mb-4 w-24"
          />
          <DialogTitle className="text-center text-2xl font-bold">
            ¡5% de descuento solo por hoy! 🎁
          </DialogTitle>
          <DialogDescription className="text-md text-center">
            Suscribite al newsletter y accedé a un 5% de descuento en tu próxima compra. Es rápido,
            gratis y sin spam.
          </DialogDescription>
        </DialogHeader>

        <NewsletterForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
