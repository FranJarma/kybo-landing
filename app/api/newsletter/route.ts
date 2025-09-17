import { getFudoToken } from "@/utils/fudoUtils";
import { capitalize } from "@/utils/textUtils";
import { NextRequest, NextResponse } from "next/server";
import { CustomerFudoRequest, FudoCustomerResponse } from "../types/fudo";

const API_KEY = process.env.FUDO_API_KEY!;
const API_SECRET = process.env.FUDO_API_SECRET!;

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
    const token = await getFudoToken(API_KEY, API_SECRET);

    const fudoCustomers = await fetch(`${process.env.FUDO_API_URL}/customers`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const jsonResponse: FudoCustomerResponse = await fudoCustomers.json();

    const isAlreadyRegistered = jsonResponse.data.some(
      customer => customer.attributes.email === email,
    );

    if (isAlreadyRegistered) {
      return NextResponse.json({ error: "Este email ya está registrado" }, { status: 400 });
    }

    const fudoBody: CustomerFudoRequest = {
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

    const fudoUrl = `${process.env.FUDO_API_URL}/customers`;
    const res = await fetch(fudoUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fudoBody),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
