const sumFibonacci = (num) => {
  let a = 1;
  let b = 1;
  for (let i = 0; i < num - 2; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

console.log(sumFibonacci(7)); // 1,1,2,3,5,8,13 => 13

const fib = (num) => {
  let a = 0;
  let b = 1;
  let arr = [];

  arr.push(a, b);

  for (let i = 0; i < num - 2; i++) {
    let c = a + b;
    a = b;
    b = c;

    arr.push(c);
  }
  return arr;
};

//console.log(fib(8)); // [0,1,1,2,3,5,8,13]

const fibRecursive = (n) => {
  if (n < 2) {
    return [1];
  }
  if (n < 3) {
    return [1, 1];
  }

  let a = fib(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return a;
};

console.log(fibRecursive(8)); // [0,1,1,2,3,5,8,13]
