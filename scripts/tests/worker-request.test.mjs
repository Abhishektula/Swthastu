import assert from "node:assert/strict";
import { test } from "node:test";
import { prepareRequest, secureResponse } from "../../lib/worker-request.mjs";
import { validateProductionConfig } from "../../lib/cloudflare-config.mjs";
import { readFileSync } from "node:fs";

test("API body bytes are limited even without Content-Length; identity headers are stripped", async () => {
  const headers = { "oai-authenticated-user-id": "spoofed", "content-type": "application/json" };
  const request = new Request("https://example.test/api/enquiries", { method: "POST", headers, body: JSON.stringify({ message: "नमस्ते" }) });
  const clean = await prepareRequest(request);
  assert.equal(clean.headers.get("oai-authenticated-user-id"), null);
  assert.deepEqual(await clean.json(), { message: "नमस्ते" });
  for (const body of ["a".repeat(50001), "ह".repeat(17000)]) {
    await assert.rejects(() => prepareRequest(new Request(request.url, { method: "POST", body })), RangeError);
  }
  const response = secureResponse(Response.json({ ok: true }, { status: 201 }));
  assert.equal(response.status, 201);
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.deepEqual(await response.json(), { ok: true });
});
test("production deployment refuses placeholders and missing authentication", () => {
  const config = JSON.parse(readFileSync(new URL("../../wrangler.jsonc", import.meta.url), "utf8"));
  config.d1_databases[0].database_id = "00000000-0000-4000-8000-000000000000";
  config.vars = {};
  assert.throws(() => validateProductionConfig(config), /database_id/);
  config.d1_databases[0].database_id = "12345678-1234-4234-8234-123456789012";
  assert.throws(() => validateProductionConfig(config), /ACCESS/);
  config.vars = { ACCESS_TEAM_DOMAIN: "https://swthastu.cloudflareaccess.com", ACCESS_AUD: "a".repeat(64) };
  assert.equal(validateProductionConfig(config), config);
});
