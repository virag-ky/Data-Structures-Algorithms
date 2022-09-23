/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method. */

const repeatAString = (str, num) => {
  let repeatedStr = '';

  if (num < 0) {
    return '';
  }

  for (let i = 0; i < num; i++) {
    repeatedStr += str + ' ';
  }

  return repeatedStr;
};

console.log(repeatAString('hello', 3));
