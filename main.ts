// One Word From Your Ex — the whole entry is a single word.
// The word: "unsubscribed" — the ex didn't argue, didn't explain,
// didn't even say goodbye. They just quietly unsubscribed, like
// this whole relationship was a newsletter they never signed up for.
// Output contract: entry.txt holds exactly the word, byte-for-byte,
// with no trailing newline and no extra whitespace. The output
// directory comes only from MAKEFUN_OUTPUT_DIR (fallback "/output");
// the script never writes into its own (read-only) repo directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "unsubscribed";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
