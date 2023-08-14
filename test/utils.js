/** Used as a reference to the global object. */
var root = (typeof global === "object" && global) || this;

const stubArray = function () {
    return [];
  },
  stubObject = function () {
    return {};
  },
  stubString = function () {
    return "";
  };

var stubZero = function () {
    return 0;
  },
  stubOne = function () {
    return 1;
  },
  stubTwo = function () {
    return 2;
  },
  stubThree = function () {
    return 3;
  },
  stubFour = function () {
    return 4;
  };

var stubNaN = function () {
    return NaN;
  },
  stubNull = function () {
    return null;
  };

var args = toArgs([1, 2, 3]);

/**
 * Converts `array` to an `arguments` object.
 *
 * @private
 * @param {Array} array The array to convert.
 * @returns {Object} Returns the converted `arguments` object.
 */
function toArgs(array) {
  return function () {
    return arguments;
  }.apply(undefined, array);
}

var _ = root._;

/** Used to provide falsey values to methods. */
const falsey = [, null, undefined, false, 0, NaN, ""];

/** Used as the size to cover large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

export { falsey, stubArray, _, LARGE_ARRAY_SIZE, stubOne, stubNaN, args };
