// Snooze Button Roast entry: writes a one-line roast about a snooze button
// that has watched its human negotiate and surrender every nine minutes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My snooze button has watched me negotiate like a hostage negotiator who surrenders every nine minutes.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
