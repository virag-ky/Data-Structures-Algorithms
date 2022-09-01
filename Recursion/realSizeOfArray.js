/* Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.

Example:

Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers. */

const realSize = (arrays) => {
  const arr = [];
  recursion(0, arrays, arr);
  return arr.length;
};

const recursion = (index, inputArray, outputArray) => {
  if (index >= inputArray.length) {
    return;
  }

  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursion(index + 1, inputArray, outputArray);
};

console.log(realSize([1, 2, [3, 4], 5, [6, [7, 8]]])); //8
