import assert from "node:assert/strict";
import { test } from "node:test";
import { verifyAccessToken } from "../../lib/access-token.mjs";

const issuer = "https://swthastu.cloudflareaccess.com";
const audience = "a".repeat(64);
const pair = await crypto.subtle.generateKey({ name: "RSASSA-PKCS1-v1_5", modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: "SHA-256" }, true, ["sign", "verify"]);
const keys = [{ ...await crypto.subtle.exportKey("jwk", pair.publicKey), kid: "test" }];
const encode = value => Buffer.from(JSON.stringify(value)).toString("base64url");
const claims = { iss: issuer, aud: [audience], exp: 2000, sub: "provider-1", email: "provider@example.com" };
async function token(payload = claims, header = { alg: "RS256", kid: "test" }) {
  const input = `${encode(header)}.${encode(payload)}`;
  const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", pair.privateKey, new TextEncoder().encode(input));
  return `${input}.${Buffer.from(signature).toString("base64url")}`;
}
test("Access requires a valid signature, audience, issuer and live user claims", async () => {
  const valid = await token();
  assert.deepEqual(await verifyAccessToken(valid, issuer, audience, keys, 1000), { userId: "provider-1", email: claims.email });
  for (const patch of [{ iss: "https://attacker.test" }, { aud: ["wrong"] }, { exp: 999 }, { exp: undefined }, { nbf: 1001 }, { sub: "" }, { email: undefined }]) {
    await assert.rejects(() => token({ ...claims, ...patch }).then(t => verifyAccessToken(t, issuer, audience, keys, 1000)));
  }
  const forged = valid.split(".");
  forged[1] = encode({ ...claims, sub: "another-user" });
  await assert.rejects(() => verifyAccessToken(forged.join("."), issuer, audience, keys, 1000));
  await assert.rejects(() => verifyAccessToken("e30.e30.", issuer, audience, keys));
});
