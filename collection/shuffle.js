/**
Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
@arguments
collection (Array|Object): The collection to shuffle.
@returns
(Array): Returns the new shuffled array.
@example
_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
*/
const shuffle = (collection) => {
  const isObject = typeof collection === "object";

  if (!isObject) return [];

  const isArray = Array.isArray(collection);

  const result = [];
  const length = isArray ? collection.length : Object.keys(collection).length;

  const sh = (arr, rs, len) => {
    if (Array.isArray(arr)) {
      if (len === 0) return rs;

      const rand = Math.floor(Math.random() * (len - 1));

      rs.push(arr[rand]);

      arr.splice(rand, 1);

      len--;

      return sh(arr, rs, len);
    } else {
      if (len === 0) return rs;

      const rand = Math.floor(Math.random() * (len - 1));
      const randKey = Object.keys(arr)[rand];
      const randValue = Object.values(arr)[rand];

      const randObj = {};
      randObj[randKey] = randValue;

      rs.push(randObj);

      delete arr[randKey];
      len--;
      return sh(arr, rs, len);
    }
  };

  return sh(collection, result, length);
};

export { shuffle };
