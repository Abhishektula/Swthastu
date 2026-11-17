let cached;
let pending;

export async function accessKeys(issuer) {
  if (cached?.issuer === issuer && cached.until > Date.now()) return cached.keys;
  if (pending?.issuer === issuer) return pending.promise;
  const promise = (async () => {
    const response = await fetch(`${issuer}/cdn-cgi/access/certs`, {
      signal: AbortSignal.timeout(5000), redirect: "error",
    });
    if (!response.ok) throw new Error("Access keys unavailable");
    const { keys } = await response.json();
    if (!Array.isArray(keys) || keys.length > 20) throw new Error("Invalid Access keys");
    cached = { issuer, keys, until: Date.now() + 300_000 };
    return keys;
  })();
  pending = { issuer, promise };
  try { return await promise; } finally { pending = undefined; }
}
