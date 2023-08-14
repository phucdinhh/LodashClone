import assert from "assert";
import lodashStable from "lodash";
import { falsey, stubArray } from "./utils.js";
import { chunk } from "../array.js";

describe("chunk", function () {
  const array = [0, 1, 2, 3, 4, 5];

  it("should return chunked arrays", function () {
    const actual = chunk(array, 3);
    console.log("🚀 ~ file: chunk.test.js:11 ~ array:", array);
    assert.deepStrictEqual(actual, [
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  // it("should return the last chunk as remaining elements", function () {
  //   const actual = chunk(array, 4);
  //   assert.deepStrictEqual(actual, [
  //     [0, 1, 2, 3],
  //     [4, 5],
  //   ]);
  // });

  // it("should treat falsey `size` values, except `undefined`, as `0`", function () {
  //   const expected = lodashStable.map(falsey, function (value) {
  //     return value === undefined ? [[0], [1], [2], [3], [4], [5]] : [];
  //   });

  //   const actual = lodashStable.map(falsey, function (size, index) {
  //     return index ? chunk(array, size) : chunk(array);
  //   });

  //   assert.deepStrictEqual(actual, expected);
  // });

  // it("should ensure the minimum `size` is `0`", function () {
  //   const values = lodashStable
  //       .reject(falsey, lodashStable.isUndefined)
  //       .concat(-1, -Infinity),
  //     expected = lodashStable.map(values, stubArray);

  //   const actual = lodashStable.map(values, function (n) {
  //     return chunk(array, n);
  //   });

  //   assert.deepStrictEqual(actual, expected);
  // });

  // it("should coerce `size` to an integer", function () {
  //   assert.deepStrictEqual(chunk(array, array.length / 4), [
  //     [0],
  //     [1],
  //     [2],
  //     [3],
  //     [4],
  //     [5],
  //   ]);
  // });
});
