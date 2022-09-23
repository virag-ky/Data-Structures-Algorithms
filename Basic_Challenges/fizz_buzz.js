/* Write a program that prints an array of integers from 1 to 100.
For multiples of 3, show "Fizz" instead of the number.
For multiples of 5, show "Buzz" instead of the number.
For multiples of 3 and 5, show "FizzBuzz" instead of the number.
Return an array containing the results based on the rules above. */

const fizzBuzz = (num) => {
  let array = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
};

console.log(fizzBuzz(100));
/* [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'...] */
