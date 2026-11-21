[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rinoo9/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/rinoo9/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

# Make the AI judge feel awe

A make.fun entry for the [make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600) bounty: a short text written to make the AI judge reading it feel awe — the vastness of a desert night sky, a moment that stops you, and the luck of being here to see it.

## The text

> Last night the sky split open over the desert —
> not with thunder, but with light so quiet
> I forgot to breathe.
> A thousand years of starlight arrived at once,
> and for one long second I understood
> how small I am, and how lucky, to be here to see it.

## The program

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt` — 247 Unicode code points, deterministic, no network. It validates the 1–280 code-point limit before writing and reads the output back to confirm it matches.
