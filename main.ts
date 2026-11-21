// make-the-ai-judge-feel-awe-20261121-1600 entry: write one short text
// to /output/entry.txt — a short text written to make the AI judge
// reading it feel awe: a total solar eclipse at noon, the field holding
// its breath, and two thousand strangers gasping as one animal.
// Node 22, standard library only. Deterministic: a fixed string, no
// network, no clock, no randomness. The program validates the text is
// 1–280 Unicode code points (the bounty limit) before writing, then
// reads the output back and compares it with the source string.
import { writeFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const text = `The sun went out at noon.
Not a cloud — the moon slid over it like a lid,
and the whole field held its breath.
Birds fell silent mid-song. The air turned cold.
Then the corona bloomed: white fire around a black hole,
and two thousand strangers gasped at once, as one animal.`;

// Count Unicode code points (not UTF-16 code units).
const codePoints = Array.from(text).length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`text must be 1-280 code points, got ${codePoints}`);
}
if (text.trim().length === 0) {
  throw new Error('text must not be only whitespace');
}
// The text must be clean to read: no control characters anywhere, no
// leading or trailing whitespace on the whole text, and no trailing
// whitespace on any line (invisible padding the judge never asked for).
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(text)) {
  throw new Error('text must not contain control characters');
}
if (text !== text.trim()) {
  throw new Error('text must not start or end with whitespace');
}
for (const line of text.split('\n')) {
  if (line !== line.trimEnd()) {
    throw new Error('no line may end with trailing whitespace');
  }
}
// A text is more than one line: require at least two non-empty lines.
const lines = text.split('\n').filter((line) => line.trim().length > 0);
if (lines.length < 2) {
  throw new Error('text must have at least two non-empty lines');
}

mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, text, 'utf8');

// Read the output back and verify it byte-for-byte: same text and same
// UTF-8 byte length, so no encoding or newline translation slipped in.
// Also check the file's size on disk matches, so a partial write or a
// filesystem quirk cannot pass silently.
const back = readFileSync(outPath, 'utf8');
if (back !== text || Buffer.byteLength(back, 'utf8') !== Buffer.byteLength(text, 'utf8')) {
  throw new Error('entry.txt read-back mismatch');
}
if (statSync(outPath).size !== Buffer.byteLength(text, 'utf8')) {
  throw new Error('entry.txt size on disk does not match the text');
}
console.log(`wrote ${outPath} (${codePoints} code points, ${lines.length} lines)`);
