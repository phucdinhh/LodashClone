/**
  Creates an array of elements split into groups the length of size.
  If array can't be split evenly, the final chunk will be the remaining elements.
  @example
  _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/
const chunk = (array, size = 1) => {
  // if (!Number.isInteger(size)) {
  //   throw "size must be number";
  // }

  const length = array === null ? 0 : array.length;
  let chunkSize;

  if (size === undefined) {
    chunkSize = 1;
  } else if (!size) {
    chunkSize = 0;
  } else chunkSize = size;

  // chunkSize = !size && size !== undefined ? 0 : 1;
  let checkSize = Math.max(chunkSize, 0);

  if (!length || checkSize < 1) {
    return [];
  }

  checkSize = Math.floor(checkSize);

  const newArray = [];
  for (let i = 0; i < array.length; i += checkSize) {
    const chunk = array.slice(i, i + checkSize);
    newArray.push(chunk);
  }
  return newArray;
};

// =================================================================

/** 
  Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  @example
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/
const compact = (array) => {
  const newArray = array.filter((val) => Boolean(val));
  return newArray;
};

// =================================================================

/** 
Creates a new array concatenating array with any additional arrays and/or values. 

@example

var array = [1];

var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other); // => [1, 2, 3, [4]]
 
console.log(array); // => [1]
*/
const concat = (array, ...values) => {
  for (let i = 0; i < values.length; i++) {
    array = array.concat(values[i]);
  }
  return array;
};

// =================================================================

/**
Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
The order and references of result values are determined by the first array.
@example
_.difference([2, 1], [2, 3]); // => [1]
*/
const difference = (arr, ...excludeArr) => {
  // console.log(excludeArr);

  const lengthExc = excludeArr.length;

  let excArr = [];

  if (lengthExc > 1) {
    for (let i = 0; i < lengthExc; i++) {
      excArr = excArr.concat(excludeArr[i]);
    }
  } else excArr = excludeArr[0];

  const diff = [];
  for (let i = 0; i < arr.length; i++) {
    const idx = excArr.findIndex((val) => {
      return val === arr[i] || (isNaN(val) && isNaN(arr[i]));
    });

    if (idx < 0) {
      diff.push(parseInt(arr[i]));
    }
  }

  return diff;
};

// =================================================================

export { chunk, compact, concat, difference };
