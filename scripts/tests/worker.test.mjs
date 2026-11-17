import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { stripTypeScriptTypes } from "node:module";

let source = stripTypeScriptTypes(readFileSync(new URL("../../worker/index.ts", import.meta.url), "utf8"));
source = source.replace('import handler from "../.open-next/worker.js";', 'const handler = {fetch: async request => Response.json({ identity: request.headers.get("oai-authenticated-user-id"), body: await request.text() })};');
source = source.replace('"../lib/worker-request.mjs"', JSON.stringify(new URL("../../lib/worker-request.mjs", import.meta.url).href));
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
const url = "https://example.test/api/enquiries";
const request = body => new Request(url, { method: "POST", body, headers: { "oai-authenticated-user-id": "spoofed" } });

test("Worker returns controlled errors for rate limits and oversized API requests", async () => {
  const allowed = { API_RATE_LIMITER: { limit: async () => ({ success: true }) } };
  const blocked = { API_RATE_LIMITER: { limit: async () => ({ success: false }) } };
  const result = await worker.fetch(request("{}"), allowed, {});
  assert.equal(result.status, 200);
  assert.deepEqual(await result.json(), { identity: null, body: "{}" });
  const limited = await worker.fetch(request("{}"), blocked, {});
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get("retry-after"), "60");
  assert.equal((await worker.fetch(request("x".repeat(50001)), allowed, {})).status, 413);
  assert.equal((await worker.fetch(request("{}"), {}, {})).status, 503);
});
