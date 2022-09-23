//Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

const unsortedArray = [32, 1, 4, 5, 23, 67, 66, 20, 8, 0];

const mergeSort = (arr) => {
  //if the array has only 1 item or none, return the array
  if (arr.length <= 1) {
    return arr;
  }

  //declare a mid-point which is the half of the array length
  let mid = Math.floor(arr.length / 2);
  //declare the left array
  //by copying the original array from the zero index until the mid-point(not included)
  let leftArray = mergeSort(arr.slice(0, mid));
  //declare the right array
  //by copying the original array from the mid-point(not included) until the end
  let rightArray = mergeSort(arr.slice(mid));

  //merge the two arrays (left and right arrays)
  return merge(leftArray, rightArray);
};

const merge = (arr1, arr2) => {
  //declare an empty array where we are going to push the values in order
  let sortedArray = [];

  //while both arrays have a length (they have items)
  while (arr1.length && arr2.length) {
    //if the first element of the left array is smaller than the first element of the right array
    if (arr1[0] < arr2[0]) {
      //then remove the first value of the left array and push it in the sorted array
      sortedArray.push(arr1.shift());
    } else {
      //otherwise, remove the first element of the right array and push that one in the sorted array
      sortedArray.push(arr2.shift());
    }
  }

  //return the sorted array with the combined left and right array
  //and also if there's leftover (there are elements left in one of the arrays and zero elements left in the other array)
  //then just copy the leftover into the sorted array
  return [...sortedArray, ...arr1, ...arr2];
};

console.log(mergeSort(unsortedArray)); // [0, 1, 4, 5, 8, 20, 23, 32, 66, 67]
