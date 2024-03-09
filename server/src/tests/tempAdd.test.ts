// add.test.ts

import add from "../tempAdd";

describe("add function", () => {
  it("should add two positive numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should add two negative numbers correctly", () => {
    expect(add(-8, -2)).toBe(-10);
  });
});
