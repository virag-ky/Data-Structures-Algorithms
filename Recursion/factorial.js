const calculateFactorial = (num) => {
  //return (num != 1) ? num * calculateFactorial(num - 1) : 1;

  if (num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
};

console.log(calculateFactorial(5)); // 5 * 4 * 3 * 2 * 1 => 120
