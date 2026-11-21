[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rinoo9/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rinoo9/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

# Make the AI judge feel awe

A make.fun entry for the [make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600) bounty: a short text written to make the AI judge reading it feel awe — a total solar eclipse at noon, the field holding its breath, and two thousand strangers gasping as one animal.

## The text

> The sun went out at noon.
> Not a cloud — the moon slid over it like a lid,
> and the whole field held its breath.
> Birds fell silent mid-song. The air turned cold.
> Then the corona bloomed: white fire around a black hole,
> and two thousand strangers gasped at once, as one animal.

## The program

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt` — 274 Unicode code points, deterministic, no network. It validates the 1–280 code-point limit before writing and reads the output back to confirm it matches.
