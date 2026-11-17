import assert from "node:assert/strict";
import { test } from "node:test";
import { DatabaseSync } from "node:sqlite";
import { readdirSync, readFileSync } from "node:fs";

test("D1 SQL migrations create both application tables and consent defaults", () => {
  const db = new DatabaseSync(":memory:");
  const directory = new URL("../../drizzle/", import.meta.url);
  try {
    for (const file of readdirSync(directory).filter(f => f.endsWith(".sql")).sort()) db.exec(readFileSync(new URL(file, directory), "utf8"));
    db.prepare("INSERT INTO enquiries (id,name,email,interest,created_at) VALUES (?,?,?,?,?)").run("test-1", "Test User", "test@example.com", "Retreat", "2026-10-11T00:00:00.000Z");
    const row = db.prepare("SELECT status, consent_version FROM enquiries WHERE id = ?").get("test-1");
    assert.equal(row.status, "requested");
    assert.equal(row.consent_version, "enquiry-v1-2026-10-09");
    const columns = db.prepare("PRAGMA table_info(provider_applications)").all().map(c => c.name);
    for (const name of ["user_id", "expires_at", "consent_version", "status"]) assert(columns.includes(name));
  } finally { db.close(); }
});
