import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The office printer only jams on deadline day, so I CC it on every email now — it replies faster than my boss, and with fewer typos.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
