// Loading Screen Gold: A Tip in 200 Characters
// Writes one sharp, funny loading-screen tip for stressed developers
// and AI coding agents to /output/entry.txt (one line, 130 chars).
// The tip doubles as real advice: asking the agent to explain its own
// diff is a self-review that catches the bug it just introduced.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: when the build fails, ask your AI agent to explain its own diff \u2014 nothing confesses a bug faster than the code that wrote it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
