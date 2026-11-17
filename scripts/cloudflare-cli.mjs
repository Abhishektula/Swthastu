import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateProductionConfig } from "../lib/cloudflare-config.mjs";
import "./sites-env.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const [command, ...args] = process.argv.slice(2);
if (!["check", "migrate", "deploy"].includes(command)) throw new Error("Expected check, migrate or deploy.");
try {
  validateProductionConfig(JSON.parse(readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8")));
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
function run(file, arguments_) {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL(file, import.meta.url)), ...arguments_], { cwd: root, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
if (command === "check") {
  console.log("PASS: production binding configuration. Access policies, database migrations and live behavior still need verification.");
} else if (command === "migrate") {
  run("../node_modules/wrangler/bin/wrangler.js", ["d1", "migrations", "apply", "DB", "--remote", "--config", "wrangler.jsonc", ...args]);
} else {
  run("../node_modules/eslint/bin/eslint.js", ["."]);
  run("../node_modules/typescript/bin/tsc", ["--noEmit"]);
  run("./verify-wellbeing.mjs", []);
  run("./tests/run.mjs", []);
  run("./verify-catalogue.mjs", []);
  run("../node_modules/@opennextjs/cloudflare/dist/cli/index.js", ["build"]);
  run("../node_modules/wrangler/bin/wrangler.js", ["deploy", "--dry-run", "--config", "wrangler.jsonc", "--outdir", ".sites-runtime/production"]);
  run("./verify-production.mjs", []);
  run("../node_modules/@opennextjs/cloudflare/dist/cli/index.js", ["deploy", ...args]);
}
