import fs from "node:fs";

const src1 = '/Users/bastroelstra/.gemini/antigravity/brain/45595c2b-9cce-4585-b653-fe41428bfc3a/hero_float_1_1773261503159.png';
const dest1 = '/Users/bastroelstra/nr1websites/public/images/hero_float_1.png';

const src2 = '/Users/bastroelstra/.gemini/antigravity/brain/45595c2b-9cce-4585-b653-fe41428bfc3a/hero_float_2_1773261517370.png';
const dest2 = '/Users/bastroelstra/nr1websites/public/images/hero_float_2.png';

const src3 = '/Users/bastroelstra/.gemini/antigravity/brain/45595c2b-9cce-4585-b653-fe41428bfc3a/hero_float_3_1773261532177.png';
const dest3 = '/Users/bastroelstra/nr1websites/public/images/hero_float_3.png';

try {
  fs.copyFileSync(src1, dest1);
  fs.copyFileSync(src2, dest2);
  fs.copyFileSync(src3, dest3);
  console.log("Files copied successfully.");
} catch (err) {
  console.error("Error copying files:", err);
}
