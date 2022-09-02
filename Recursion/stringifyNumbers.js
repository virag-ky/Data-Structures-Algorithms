//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifyNumbers = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object') {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
};

console.log(stringifyNumbers(obj)); /*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/
