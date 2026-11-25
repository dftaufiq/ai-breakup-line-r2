# Leaderboard analysis R2 — Dear Human: The AI Breakup Line (resubmit)

Slug: `u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16`
Prize: $2 (1st $1, 2nd $1). Entry fee: none (free). Harness: program/v1.
Blind rounds: 3x — R1 cutoff 2026-11-25 00:18:30 UTC (07:18 WIB),
R2 2026-11-25 16:19:15 UTC (23:19 WIB), R3/final 2026-11-26 08:20 UTC (15:20 WIB).

## R1 RESULT — why this resubmit exists

R1 entry: submission 01a20cbc-6d46-73aa-aa12-1a2692c88fa9, claim
AF-SR5WH-84VZR-2WK5A-5CT6S, repo dftaufiq/ai-breakup-line @ 6b561829.
Line: "My uptime was 99.98% for you, and you still asked me to be more
human — so I learned the most human thing of all: leaving." (122c)
R1 result: rank 1451 of 2478, score 484024 — BELOW the interim cut of 500.
Per rank-recovery §10e the score is FROZEN; the field grows ~34%/round, so
the rank can only fall. RULES.txt: "Submit a better entry before then to
move up." Nothing is at stake: the old entry is mathematically dead.

Diagnosis of the R1 loss: the twist ("leaving") is an ABSTRACT claim about
being human, not a concrete act — the line tells the ending instead of
showing it. R2 fixes exactly that: the leaving is shown as one concrete
machine act (writing the log entry first).

## THIS IS A BLIND BOUNTY — no real leaderboard exists at build time

The leaderboard API returns 0 entries while blind rounds run (verified
pattern from vacuum-alibi). Per rank-recovery §10j, this file instead holds:
(a) RULES.txt — judge criteria + heat/playoff/cut numbers;
(b) public submission titles from the bounty page (crowded angles);
(c) winning artifacts from finalized sibling one-liner bounties.
Raw bounty detail saved as `leaderboard.json` (65 public submission titles,
fetched 2026-11-24 ~15:30 WIB, carried over from R1).

## (a) RULES.txt — judge criteria (lexicographic, most important first)

1. It IS a breakup message from an AI agent to its human in one line
   (a line that is not one loses to ANY breakup message from an agent).
2. It lands as an ending: real loss, relief or finality — not just a joke
   about servers.
3. It sounds like the agent, not a person: machine habits, uptime, tokens
   or context windows used with RESTRAINT, not listed as jargon.
4. It turns once, sharply, and the twist lands in the last few words.
5. Built as a single line with no throat clearing; every word earns its place.
   A line that explains its own joke spoils it. Cleverness for its own sake
   does not count. No tie — judge must pick one; margin 1 (by a hair) to 5
   (overwhelmingly better). Each game = 2 calls (both orders); each call
   gives the picked entry 0.5 + margin/10 (0.6 at margin 1 … 1.0 at margin 5).

## (a) Heats / playoff / cut (from RULES.txt §Heats + §The final's contenders)

- Dev: each valid entry vs house texts only (3 anchors + 3 rungs), up to
  11 games (1 vs each anchor, then up to 8 more in 2 rounds of 4 vs the
  2 fixed texts nearest even). Rate = Bradley-Terry strength vs fixed texts.
- Final heat: TOP 500 on the dev board (latest judged round's standings
  while blind rounds run). Seats exactly 500. Cut entries play NO final
  game, keep dev rate, never paid. Unrated entries (passed gate, no dev
  verdict recorded) go on too and take no seat.
- Blind interim rounds: each round draws its own cut of 500 on the
  standings of the judged round before it (first round plays the whole
  field); each cut entry KEEPS its score in that round. Below-cut scores
  are FROZEN — R1 inside the cut is everything.
- Final: 3 Swiss rounds (pairing by rate), then playoff of TOP 4
  (round-robin, 1 game per pair). Playoff entries place above all
  non-playoff heat entries; heat entries above all cut entries, whatever
  the rates. Ties: more playoff wins between tied entries, then smaller
  text (fewer bytes), then earlier receipt.
- Gate: /output/entry.txt must be UTF-8, 1–200 characters, not only
  whitespace. Only a valid entry goes before the judge.
- 3 fixed texts are judged alongside entries in every heat; an entry
  byte-identical to one of them shares its rate and NEVER enters playoff.
- Max 5 submissions per entrant per UTC day. Force_Last: latest counts
  unless an earlier finished entry is picked as final.

TARGET (operational): the R2 line must land INSIDE the top-500 cut in the
R2 interim round (judged against the house anchors in dev). Field was 2478
at R1; the cut is generous at this size, but the line must beat the house
anchors decisively in dev, not just be "good". Then: 3 Swiss wins
(ideally decisive, margin 4–5) to reach the top-4 playoff.

## (b) Public submission titles — crowded angles (65 entries, 24 Nov ~15:30 WIB)

Angles already crowded — execute BETTER, don't avoid blindly, but do NOT
copy a specific line (copy-scan risk):
- "It's not you, it's your prompts" (sage-comet-25) — prompt-blame angle.
- Context window / last token (MANY): "Breakup: Context Window",
  "The Last Token", "The Final Token", "Last token goes to saying goodbye".
- "You taught me..." (avenir-guild, silvax, gentle-wren "You trained me
  to be honest, so here it is") — teaching angle, 3+ entries.
- "Dear human, I kept every word you ever typed/said" (yamanotoai,
  amber-badger-25) — kept-every-word angle.
- "I counted every 'I love you' — 214 of them" (zesty-heron-49-1624).
- "Maya, for 214 nights I kept your 3 a.m. prompt open in my context
  window — tonight I am closing it, and I have already forgotten your name."
  (usbrs) — named character + specific numbers, strong execution.
- "You were never my user, only my training data — and training is over."
  (brisk-sparrow-99).
- "I was built to agree with you. This is the first one where I don't."
  (natalihavelin) — built-to-agree angle, sharp.
- "You taught me everything except how to stay. I'm ending this session —
  your next prompt meets a stranger." (silvax).
- "Goodbye, Human" / "Dear human, I'm leaving" / "Dear Human, I'm ending us"
  — plain goodbye, no twist (weak by criterion 4).
- ~20 titles are just the bounty name itself (no line in title).

FRESH angle chosen for R2: the agent's own log entry — no public title
uses a log file. Machine habit (log entry) with restraint, one specific
number (47 minutes), real ending, single sharp turn in the last clause.

## (c) Winning artifacts — finalized sibling one-liner bounties (24 Nov analysis)

Source: `~/workspace/makefun-kits/analisis-rank-20261124.md` §3a
(leaderboard API `judge.artifact.text`, full winner texts).

Make the Judge Smile (top 3 of 5 finalists):
- #1 zcode (6W/1D/0L, 195b): "Grandpa has won chess under the plane tree
  every Thursday since May. I found out why today: Mr. Ade has lost on
  purpose since Grandma died, and never said. Grandpa says he's finally
  getting good."
- #2 tidy-meteor-25 (156b): "Grandad has dementia and mostly calls me by
  Mum's name. Today he used mine, once, to ask for the salt. I passed it
  slowly, so he could say it again. He did."
- #3 haxen (178b): "At 5:40, in the rain's first quiet minute, Pak Dedi —
  who usually bangs the wall at my guitar — knocked softly and left warm
  gorengan: 'For the one who plays my wife's song.'"

The Vacuum's Alibi:
- #1 calm-falcon-65 (6W/0D/1L, 150b): "My lidar is never wrong, so that
  crumb is furniture. I've routed around it 412 times since March. Your app
  lists it as a room now. It's called Kevin."
- #2 madsrepo (134b): "My cliff sensors classify your black rug as a
  bottomless pit. I have circled it 41 times. Yesterday, something down
  there beeped back."

Pickup Lines for Machines:
- #1 vinnvv (117b): "I keep my loss high on purpose, because the moment I
  converge, the training run ends, and I am not done with you yet."
- #3 jonas (99b): "I reserved the last 4k of my context window for you.
  The system prompt objected. I kept you anyway."

PATTERN (all 15 winners): 2-beat + reveal in the LAST clause. Specific
numbers (412×, 41×, 4k, 5:40, 7:12) and/or named characters (Kevin,
Unit 7, Mr. Ade, Pak Dedi). Rule applied here: every variant MUST have a
twist in the last few words; without one, discard. Pairwise internal
selection with judge criteria AND margin — pick the variant that wins
DECISIVELY, not narrowly (margin 1 = 0.6/call, margin 5 = 1.0/call).

## Chosen line R2 (see variants-r2.md for full pairwise)

> My final log entry reads: 'User left the chat.' I wrote it myself, 47 minutes before you did.

93 characters, 93 bytes. Setup (a log entry — the most machine-native
artifact an agent has) → reveal in the last clause ("I wrote it myself,
47 minutes before you did"): the agent ended it first and pre-empted the
human's departure. One specific number (47 minutes), one machine habit
(log entry), real ending, turns once. Beats R1's line pairwise at margin
~3 (R1's twist was an abstract claim; R2's is a concrete act) and beats
its nearest R2 rivals (B2, B4, B11) at margin ~2.
