/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

const sumFibs = (num) => {
  let a = 1;
  let b = 1;
  let c;
  let sum = 0;
  let array = [1, 1];

  for (let i = 0; i < num - 2; i++) {
    c = a + b;
    a = b;
    b = c;
    array.push(c);
  }

  array = array.filter((num) => num % 2 !== 0);

  let index = 0;
  while (sum < num) {
    sum += array[index];
    index++;
  }
  return sum;
};

console.log(sumFibs(10)); // 1 + 1 + 3 + 5 = 10
