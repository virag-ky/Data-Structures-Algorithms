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

//console.log(sumAll(4)); // 4 + 3 + 2 + 1 => 10

const calculateFactorial = (num) => {
  //return (num != 1) ? num * calculateFactorial(num - 1) : 1;

  if (num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
};

//console.log(calculateFactorial(5)); // 5 * 4 * 3 * 2 * 1 => 120

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

//console.log(sumFibonacci(7)); // 1,1,2,3,5,8,13 => 13

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printList = (list) => {
  /*While loop*/
  // let temp = list;

  // while (temp) {
  //   console.log(temp.value);
  //   temp = temp.next;
  // }

  /*Recursive*/
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
};

//printList(list); //1,2,3,4

const printListReversed = (list) => {
  /*While loop*/
  // let array = [];
  // let temp = list;

  // while (temp) {
  //   array.push(temp.value);
  //   temp = temp.next;
  // }
  // console.log(array.reverse());

  /*Recursive*/
  if (list.next) {
    printListReversed(list.next);
  }

  console.log(list.value);
};

//printListReversed(list); //4,3,2,1

const productOfArray = (arr, result = 1) => {
  if (arr.length === 0) {
    return result;
  } else {
    result *= arr[0];
    arr.shift();
    return productOfArray(arr, result);
  }
};

//console.log(productOfArray([1, 2, 3])); // 6
//console.log(productOfArray([1, 2, 3, 10])); // 60

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 40,
          },
        },
      },
    },
  },
};

const contains = (obj, val) => {
  for (let key in obj) {
    if (obj[key] === val) {
      return true;
    } else {
      return contains(obj[key], val) || false;
    }
  }
};

//console.log(contains(nestedObject, 44)); // true
//console.log(contains(nestedObject, 'foo')); // false

function realSize(arrays) {
  const arr = [];
  recursion(0, arrays, arr);
  return arr.length;
}

function recursion(index, inputArray, outputArray) {
  if (index >= inputArray.length) {
    return;
  }

  if (Array.isArray(inputArray[index])) {
    recursion(0, inputArray[index], outputArray);
  } else {
    outputArray.push(inputArray[index]);
  }
  recursion(index + 1, inputArray, outputArray);
}

console.log(realSize([1, 2, [3, 4], 5, [6, [7, 8]]])); //8
