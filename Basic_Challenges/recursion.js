/* You will be given a positive integer number . Fill in the method sum so that it adds up all the positive integers up to number and returns the sum. For example, when given 4 it should return 10 (4+3+2+1).

While there are other ways to solve this challenge, you should use recursion to get the sum.

Examples
console.log(sum(4))
// => (4 + 3 + 2 + 1) = 10

console.log(sum(10))
// => 55 */

const sum = (num, total = 0) => {
  if (num === 0) {
    return total;
  } else {
    return sum(num - 1, (total += num));
  }
};

console.log(sum(4)); // 4 + 3 + 2 + 1 = 10
