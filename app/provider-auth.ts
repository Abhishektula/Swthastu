import { getCloudflareEnv } from "../lib/cloudflare";
import { headers } from "next/headers";
import { accessKeys } from "../lib/access-keys.mjs";
import { verifyAccessToken } from "../lib/access-token.mjs";

export async function getProviderUser() {
  const env = getCloudflareEnv();
  const issuer = env.ACCESS_TEAM_DOMAIN;
  const audience = env.ACCESS_AUD;
  if (!issuer || !audience || !/^https:\/\/[a-z0-9-]+\.cloudflareaccess\.com$/.test(issuer)) return null;
  const token = (await headers()).get("cf-access-jwt-assertion");
  if (!token) return null;
  try {
    return await verifyAccessToken(token, issuer, audience, await accessKeys(issuer));
  } catch {
    return null;
  }
}
