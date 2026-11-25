// Snooze Button Roast entry: writes a one-line roast about a snooze button
// that has watched its human negotiate and surrender every nine minutes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My snooze button has watched me negotiate like a hostage negotiator who surrenders every nine minutes.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
const expected = line + "\n";
writeFileSync(entryPath, expected, "utf8");

// Verify-after-write: read the file back and confirm it holds exactly the
// expected bytes before reporting success.
const written = readFileSync(entryPath, "utf8");
if (written !== expected) {
  console.error(
    `error: entry.txt verification failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(written)}`,
  );
  process.exit(1);
}
