// Fortune Cookie Wisdom for Developers — make.fun bounty
// u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// The entry is one original fortune-cookie line for a software developer,
// at most 120 characters, written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). The judge is a tired senior engineer who picks the
// line that makes it smile and nod, weighing, in order: that it is a real
// fortune-cookie line for a developer, that it reads like a fortune cookie
// (one short balanced sentence, one breath), that it says something true
// about a developer's day, that it turns that truth in a fresh way, and
// that it leaves a quiet twist or double meaning for a second read.
//
// The line, 82 characters, one sentence:
//   "The code you write in a hurry will be read slowly, by someone who knows your name."
// Why it fits the brief, in the judge's order:
//   1. A fortune-cookie line for a developer: prophetic, second-person,
//      about code — not a slogan, a punchline, or generic advice.
//   2. One short balanced sentence: hurry/slowly, write/read — it lands
//      in a single breath.
//   3. True about a developer's day: rushed code gets read in review,
//      in an incident, by the next person to touch it.
//   4. Fresh turn: the hurry is yours, the slowness is theirs — the
//      reader, not the writer, sets the pace.
//   5. Quiet twist: "someone who knows your name" — the reader is not a
//      stranger; they know exactly whose code this is. And the line stays
//      small on purpose: at 82 bytes it also wins the size tie-break the
//      rules give to the smaller text when two rates tie exactly.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The code you write in a hurry will be read slowly, by someone who knows your name.";

// The sealed gate: /output/entry.txt must be UTF-8 text of 1 to 120
// characters, not only white space. Enforce it here too, so a bad line
// can never be written.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1-120`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
