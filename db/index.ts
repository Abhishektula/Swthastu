import { getCloudflareEnv } from "../lib/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  const env = getCloudflareEnv();
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Configure it in wrangler.jsonc and apply the D1 migrations."
    );
  }

  return drizzle(env.DB, { schema });
}
