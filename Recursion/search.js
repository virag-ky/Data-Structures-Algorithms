//Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

const search = (arr, val) => {
  //return arr.includes(val) ? arr.indexOf(val) : -1;

  let mid;
  let beginning = arr[0];
  let end = arr[arr.length - 1];

  while (beginning < end) {
    mid = Math.ceil((beginning + end) / 2);

    if (mid === val) {
      return arr.indexOf(mid);
    } else if (mid > val) {
      end = mid - 1;
    } else {
      beginning = mid + 1;
    }
  }
  return -1;
};

console.log(search([1, 2, 3, 4, 5], 5)); // 4
console.log(search([1, 2, 3, 4, 5], 15)); // -1
