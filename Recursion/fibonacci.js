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
