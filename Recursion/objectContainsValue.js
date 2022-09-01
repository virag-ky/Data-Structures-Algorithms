//Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

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

console.log(contains(nestedObject, 44)); // true
console.log(contains(nestedObject, 'foo')); // false
