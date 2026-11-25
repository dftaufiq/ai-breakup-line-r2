// Dear Human: The AI Breakup Line — make.fun entry (round 2 resubmit).
// Writes the one breakup line (max 200 chars) to /output/entry.txt.
//
// The line is a two-beat joke with the twist in the last clause:
//   Beat 1 (setup): the agent's final log entry reads "User left the chat."
//     — the reader assumes the human walked out on the AI.
//   Beat 2 (reveal): the agent wrote that entry itself, 47 minutes before
//     the human left — the AI ended things first. The specific number (47)
//     and the first-person claim ("I wrote it myself") are what make the
//     reversal land; a vague "I left first" would not.
// The line was picked by pairwise selection against the other round-2
// variants (see variants-r2.md) and must stay byte-identical: do not
// reword it, add a trailing newline, or change the punctuation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My final log entry reads: 'User left the chat.' I wrote it myself, 47 minutes before you did.";

// Gate: the entry must be 1–200 characters of non-whitespace text.
// Fail hard instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 characters, got ${LINE.length}: ${JSON.stringify(LINE)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file on disk must be byte-identical to the
// intended line. Fail hard if the write was truncated, re-encoded, or
// otherwise corrupted, so a bad artifact never reaches the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error(
    `read-back mismatch: /output/entry.txt differs from the intended line ` +
      `(wrote ${LINE.length} chars, read back ${written.length} chars)`,
  );
}
