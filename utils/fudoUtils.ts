import { CustomerFudoRequest } from "@/app/api/types/fudo";

const customersFudoUrl = `${process.env.FUDO_API_URL}/customers`;

export async function getFudoToken(apiKey: string, apiSecret: string) {
  const res = await fetch(process.env.FUDO_TOKEN_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, apiSecret }),
  });

  const data = await res.json();
  return data.token as string;
}

export async function getCustomers(token: string) {
  return await fetch(customersFudoUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}

export async function createCustomer(token: string, fudoBody: CustomerFudoRequest) {
  return await fetch(customersFudoUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fudoBody),
  });
}
