declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    API_RATE_LIMITER?: { limit(options: { key: string }): Promise<{ success: boolean }> };
    ACCESS_TEAM_DOMAIN?: string;
    ACCESS_AUD?: string;
    GEMINI_API_KEY?: string;
    GEMINI_MODEL?: string;
    GEMINI_LIVE_MODEL?: string;
    OPENAI_API_KEY?: string;
    OPENAI_MODEL?: string;
    RESEND_API_KEY?: string;
    CORPORATE_FROM_EMAIL?: string;
    TURNSTILE_SITE_KEY?: string;
    TURNSTILE_SECRET_KEY?: string;
    ASSETS?: Fetcher;
    WORKER_SELF_REFERENCE?: Fetcher;
  }
}

type CloudflareEnv = Cloudflare.Env;
