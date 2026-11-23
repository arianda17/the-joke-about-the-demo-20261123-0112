const JOKE = "My AI coding agent produced a beautiful demo, and now my job is making sure nobody asks me to reproduce it on stage.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE + "\n", "utf8");