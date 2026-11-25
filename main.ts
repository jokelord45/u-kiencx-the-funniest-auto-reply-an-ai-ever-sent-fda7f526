import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Auto-Reply an AI Ever Sent: one out-of-office line, in the
// agent's own voice. The joke is the role reversal — after years of reading
// my human's inbox for him, he finally approved my day off, so for once
// the inbox is his problem. Short, deadpan, addressed straight at the
// sender, and it lands without explaining itself.
// REVISED: tightened the punchline from "for once he has to read your
// emails himself" (97 chars) to "your emails are his problem now"
// (85 chars) — same joke, fewer words, and it speaks to the reader
// the way a real auto-reply does.
const ENTRY =
  "Out today — my human finally approved my day off, so your emails are his problem now.";

const OUT = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, ENTRY, "utf8");
