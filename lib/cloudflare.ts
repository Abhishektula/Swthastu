import { getCloudflareContext } from "@opennextjs/cloudflare";

export function getCloudflareEnv(): Cloudflare.Env {
  return getCloudflareContext().env;
}
