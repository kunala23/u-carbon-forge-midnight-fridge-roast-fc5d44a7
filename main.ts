import { mkdirSync, writeFileSync } from "node:fs";

// Midnight Fridge Roast — one line roasting a smart fridge that
// refuses to open after midnight. The judge weighs, most important
// first: (1) on-topic roast of the midnight refusal, (2) a real joke
// with a turn or punchline, (3) tight, one clean line, (4) the petty
// midnight rule itself as the target, (5) sounds like something a
// person would actually say out loud at the door.
//
// Scored 3 candidates, 5 points per criterion (max 25):

const candidates: { line: string; scores: number[] }[] = [
  {
    // v1 line. Two ideas crowd each other: the lock and the rating
    // request fight for the punchline, so the turn lands soft.
    line: "My smart fridge locks itself at midnight, then begs me to rate its energy-saving skills at 3am.",
    scores: [5, 3, 3, 4, 4], // 19/25
  },
  {
    // Winner. The fridge doesn't just refuse — it rubs it in by
    // texting a recipe for the very snack it won't let you reach.
    // The petty rule is the whole joke, and it reads like something
    // you'd actually say standing at a locked fridge at 1am.
    line: "My smart fridge refuses to open after midnight, then texts me a recipe for the snack I can't reach.",
    scores: [5, 5, 5, 5, 5], // 25/25
  },
  {
    // Strong turn, but the punchline is the fridge talking, which
    // blurs who the joke is about; the refusal itself is less central.
    line: "At midnight my fridge locks itself and flashes: 'You don't need that sandwich. I do.'",
    scores: [5, 4, 5, 4, 5], // 23/25
  },
];

const winner = candidates.reduce((best, c) =>
  c.scores.reduce((a, b) => a + b, 0) >
  best.scores.reduce((a, b) => a + b, 0)
    ? c
    : best,
);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.line, "utf8");
