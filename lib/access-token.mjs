function decode(part) {
  return Uint8Array.from(atob(part.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
}

export async function verifyAccessToken(token, issuer, audience, keys, now = Date.now() / 1000) {
  if (!token || token.length > 8192) throw new Error("Invalid token");
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid token");
  const [header, payload] = parts.slice(0, 2).map(p => JSON.parse(new TextDecoder().decode(decode(p))));
  if (header.alg !== "RS256" || typeof header.kid !== "string" || header.crit !== undefined || header.b64 === false) throw new Error("Invalid algorithm");
  const key = keys.find(k => k.kid === header.kid && k.kty === "RSA" && (!k.alg || k.alg === "RS256"));
  if (!key) throw new Error("Unknown signing key");
  const publicKey = await crypto.subtle.importKey("jwk", key, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", publicKey, decode(parts[2]), new TextEncoder().encode(parts.slice(0, 2).join(".")));
  const audiences = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!valid || payload.iss !== issuer || !audiences.includes(audience) ||
      !Number.isFinite(payload.exp) || payload.exp <= now ||
      (payload.nbf !== undefined && (!Number.isFinite(payload.nbf) || payload.nbf > now)) ||
      typeof payload.sub !== "string" || !payload.sub ||
      typeof payload.email !== "string" || !payload.email.includes("@")) throw new Error("Invalid identity");
  return { userId: payload.sub, email: payload.email };
}
