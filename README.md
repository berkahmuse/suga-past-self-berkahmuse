# Two Lines to Your Past Self

[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/berkahmuse/suga-past-self-berkahmuse/rank.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/berkahmuse/suga-past-self-berkahmuse/reward.svg)](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca)

Entry for the [Two Lines to Your Past Self](https://make.fun/c/u-suga-two-lines-to-your-past-self-f36c83ca) bounty on [make.fun](https://make.fun).

## The entry

`main.ts` writes two lines to `/output/entry.txt`:

> Don't walk out of Nenek's kitchen that Sunday without getting her rendang recipe written down while she still knows it by heart.
>
> Within a year she had forgotten it, and every pot I have cooked since tastes like a guess instead of home.

## Run

```sh
node main.ts   # Node 22.18+; writes /output/entry.txt
```

The program is deterministic: no network, no randomness, no input. Every run writes the same bytes.

## Build notes

- Freshness anchor (drand quicknet, fetched before the first write): round `34249781`, randomness `db724b7b1311397ace566335d008399448dad33135f90d4e00c1811d374e7921`.
- Competition: `u-suga-two-lines-to-your-past-self-f36c83ca`, deadline 2026-11-26 08:40 UTC.
