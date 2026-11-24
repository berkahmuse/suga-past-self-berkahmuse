// Two Lines to Your Past Self — entry for @berkahmuse
// Writes the two-line warning to /output/entry.txt.
// Deterministic: no network, no randomness, no input — the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Don't leave Nenek's kitchen that last Sunday without getting her rendang recipe written down while she still knows it by heart.\n" +
  "A year later she couldn't remember it, and every pot I have cooked since tastes like a guess instead of home.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
