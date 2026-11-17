export async function prepareRequest(request) {
  const headers = new Headers(request.headers);
  for (const name of [...headers.keys()]) {
    if (name.startsWith("oai-authenticated-user-")) headers.delete(name);
  }
  const clean = new Request(request, { headers });
  if (!new URL(clean.url).pathname.startsWith("/api/") || !clean.body) return clean;
  const reader = clean.body.getReader();
  const chunks = [];
  const path = new URL(clean.url).pathname;
  const limit = ["/api/rishi", "/api/rishi/voice"].includes(path) ? 200_000 : 50_000;
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) {
      await reader.cancel();
      throw new RangeError("Request too large");
    }
    chunks.push(value);
  }
  return new Request(clean, { body: new Blob(chunks), headers });
}

export function secureResponse(response) {
  const result = new Response(response.body, response);
  result.headers.set("X-Content-Type-Options", "nosniff");
  result.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  result.headers.set("X-Frame-Options", "DENY");
  result.headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=(self)");
  result.headers.set("Strict-Transport-Security", "max-age=31536000");
  return result;
}
