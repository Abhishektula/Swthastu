import handler from "../.open-next/worker.js";
import { prepareRequest, secureResponse } from "../lib/worker-request.mjs";

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
    try {
      const path = new URL(request.url).pathname;
      if (path.startsWith("/api/") && !["GET", "HEAD"].includes(request.method)) {
        const key = `${path}:${request.headers.get("cf-connecting-ip") || "local"}`;
        if (!env.API_RATE_LIMITER) throw new Error("Missing rate limiter");
        const { success } = await env.API_RATE_LIMITER.limit({ key });
        if (!success) return secureResponse(Response.json({ error: "Please wait a minute before trying again." }, {
          status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" },
        }));
      }
      return secureResponse(await handler.fetch(await prepareRequest(request), env, ctx));
    } catch (error) {
      const status = error instanceof RangeError ? 413 : 503;
      return secureResponse(Response.json({ error: status === 413 ? "Request is too large." : "Service temporarily unavailable. Please try again." }, {
        status, headers: { "Cache-Control": "no-store" },
      }));
    }
  },
};
