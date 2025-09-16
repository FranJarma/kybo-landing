export async function getFudoToken(apiKey: string, apiSecret: string) {
  const res = await fetch("https://auth.fu.do/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ apiKey, apiSecret }),
  });

  const data = await res.json();
  return data.token as string;
}
