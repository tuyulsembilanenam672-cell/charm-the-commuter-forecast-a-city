// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast for the invented city of
// New Bumbershoot to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In New Bumbershoot, expect light drizzle and heavy sighs; umbrellas up, spirits down, and for once the buses are on time.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`entry must be 1-140 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
