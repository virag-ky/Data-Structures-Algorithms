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

printList(list); //1,2,3,4

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

printListReversed(list); //4,3,2,1
