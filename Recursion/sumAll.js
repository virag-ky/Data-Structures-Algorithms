const sumAll = (num) => {
  /*for loop*/
  // let sum = 0;
  // for (let i = num; i > 0; i--) {
  //   sum += i;
  // }
  // return sum;

  /*Arithmetic progression formula*/
  // return (num * (num + 1)) / 2;

  /*recursion*/
  if (num === 1) {
    return 1;
  } else {
    return num + sumAll(num - 1);
  }
};

console.log(sumAll(4)); // 4 + 3 + 2 + 1 => 10
