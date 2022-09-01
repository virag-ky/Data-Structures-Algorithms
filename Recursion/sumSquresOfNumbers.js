/* Write a function that sums squares of numbers in list that may contain more lists
Example:

var l = [1,2,3]
SumSquares(l) == 14

var l = [[1,2],3]
SumSquares(l) == 14

var l = [[[[[[[[[1]]]]]]]]]
SumSquares(l) == 1

var l = [10,[[10],10],[10]]
SumSquares(l) == 400 */

const SumSquares = (l) => {
  const outputArray = [];
  recursive(0, l, outputArray);
  return outputArray.reduce((acc, c) => acc + c * c, 0);
};

const recursive = (index, inputArray, outputArray) => {
  if (index >= inputArray.length) {
    return;
  }

  if (Array.isArray(inputArray[index])) {
    recursive(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursive(index + 1, inputArray, outputArray);
};
