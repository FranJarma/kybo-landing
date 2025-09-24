import { createCustomer, getCustomers, getFudoToken } from "@/utils/fudoUtils";
import { capitalize, slugify } from "@/utils/textUtils";
import { NextRequest, NextResponse } from "next/server";
import { CustomerFudoRequest, FudoCustomerResponse } from "../types/fudo";
import { Resend } from "resend";

const FUDO_API_KEY = process.env.FUDO_API_KEY!;
const FUDO_API_SECRET = process.env.FUDO_API_SECRET!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;

const resend = new Resend(RESEND_API_KEY);

type NewsletterBody = {
  email: string;
  fullName: string;
};

export async function POST(req: NextRequest) {
  let body: NewsletterBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Body inválido" }, { status: 400 });
  }

  const { fullName, email } = body;

  try {
    const token = await getFudoToken(FUDO_API_KEY, FUDO_API_SECRET);

    const fudoCustomers = await getCustomers(token);

    const jsonResponse: FudoCustomerResponse = await fudoCustomers.json();

    const isAlreadyRegistered = jsonResponse.data.some(
      customer => customer.attributes.email === email,
    );

    if (isAlreadyRegistered) {
      return NextResponse.json({ error: "Este email ya está registrado" }, { status: 400 });
    }

    const createCustomerBody: CustomerFudoRequest = {
      data: {
        type: "Customer",
        attributes: {
          name: capitalize(fullName),
          email: email.toLowerCase(),
          active: true,
          discountPercentage: 5,
          comment:
            "Registrado desde el formulario de contacto de Kybo con el debido consentimiento",
        },
      },
    };

    const response = await createCustomer(token, createCustomerBody);

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: 500 });
    }

    const slugFullName = slugify(fullName);
    const discountCode = `${slugFullName}-descuento-kybo`;

    await resend.emails.send({
      from: "info@kybo.com.ar",
      to: email,
      subject: "🎉 ¡Gracias por suscribirte a Kybo!",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #eee;">
        <div style="background: #013e5e; padding: 20px; text-align: center;">
          <img src="https://kybo.com.ar/images/logo.png" alt="Kybo Logo" style="height: 60px; margin-bottom: 10px;" />
          <h1 style="color: #fff; margin: 0;">¡Bienvenido a Kybo! 🎉</h1>
        </div>
        <div style="padding: 30px; color: #333;">
          <p style="font-size: 18px;">Hola <strong>${capitalize(fullName)}</strong> 👋</p>
          <p>Gracias por sumarte a la experiencia Kybo. Tu código de descuento del <strong>5%</strong> es:</p>
          <p style="font-size: 22px; font-weight: bold; color: #013e5e; text-align: center; margin: 20px 0;">
            ${discountCode}
          </p>
          <p style="margin-top: 20px;">¡Te esperamos para que disfrutes de nuestros <strong>Bubble Teas</strong> y <strong>Waffles</strong>!</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://menu.fu.do/kybo" target="_blank" style="background: #f97316; color: #fff; text-decoration: none; padding: 12px 20px; border-radius: 5px; font-size: 16px;">
              Ver nuestro Menú 🍹🧇
            </a>
          </div>
        </div>
        <div style="background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #555;">
          © ${new Date().getFullYear()} Kybo - Todos los derechos reservados
        </div>
      </div>
      `,
    });

    return NextResponse.json({ success: true, discountCode });
  } catch (err) {
    console.error("Error en newsletter API:", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
