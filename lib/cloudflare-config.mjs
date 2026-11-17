export function validateProductionConfig(config) {
  const database = config.d1_databases?.find(d => d.binding === "DB");
  if (!database || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(database.database_id) ||
      database.database_id.startsWith("00000000-")) throw new Error("Set the real production D1 database_id in wrangler.jsonc.");
  if (!/^https:\/\/[a-z0-9-]+\.cloudflareaccess\.com$/.test(config.vars?.ACCESS_TEAM_DOMAIN || "") ||
      !/^[0-9a-f]{64}$/i.test(config.vars?.ACCESS_AUD || "")) throw new Error("Configure ACCESS_TEAM_DOMAIN and ACCESS_AUD in wrangler.jsonc before deployment.");
  if (!config.ratelimits?.some(r => r.name === "API_RATE_LIMITER")) throw new Error("API_RATE_LIMITER binding is required.");
  if (config.services?.find(s => s.binding === "WORKER_SELF_REFERENCE")?.service !== config.name) throw new Error("WORKER_SELF_REFERENCE service must match the Worker name.");
  return config;
}
