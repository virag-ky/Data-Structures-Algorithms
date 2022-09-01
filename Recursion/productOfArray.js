//Write a function called productOfArray which takes in an array of numbers and returns the product of them all

const productOfArray = (arr, result = 1) => {
  if (arr.length === 0) {
    return result;
  } else {
    result *= arr[0];
    arr.shift();
    return productOfArray(arr, result);
  }
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
