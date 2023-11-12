import { describe, expect, test } from "vitest";
import { cn } from "../helper-functions";

describe("helper-functions", () => {
  describe("cn", () => {
    test("should merge class values", () => {
      const classes1 = "p-1 m-1 bg-red-500";
      const classes2 = "p-1 flex items-center";
      const expected = "m-1 bg-red-500 p-1 flex items-center";
      expect(cn(classes1, classes2)).toEqual(expected);
    });
  });
});
