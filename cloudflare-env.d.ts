interface CloudflareEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  OPENAI_API_KEY?: string;
  OPENAI_MODEL?: string;
}
declare namespace Cloudflare { interface Env extends CloudflareEnv {} }
