import { describe, expect, it } from "vitest";

const sum = (...args: number[]) => args.reduce((a, b) => a + b, 0);

describe("smoke test", () => {
  it.each([
    [[1, 2], 3],
    [[1, 2, 3], 6],
    [[1, 2, 3, 4, 5], 15],
    [[5], 5],
    [[], 0], // empty args → 0
    [[-1, -2, 3], 0], // negatives
    [[0.1, 0.2], 0.30000000000000004], // float caveat!
  ])("sum(%j) -> %i", (nums, expected) => {
    expect(sum(...nums)).toBe(expected);
  });
});
