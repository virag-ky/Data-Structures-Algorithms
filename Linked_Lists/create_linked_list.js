/* Create your own LinkedList class for storing integers which should include two methods:
add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. get(index) - Return the value of the Node at position index in the List.

Example


This is an example of a test case:  

const list = new LinkedList()

list.add(3)
list.add(5)
console.log(list.get(1))
// => 5
The 2 add operations create the list: [3, 5]. The get operation, gets the number located at position 1. */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(num) {
    const node = new Node(num);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      temp.next = this.tail;
    }
    this.size++;
  }

  prepend(num) {
    const node = new Node(num);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  printList() {
    let list = [];
    let current = this.head;

    while (current !== null) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }

  removeFirst() {
    if (this.size === 0) {
      return null;
    }
    let data = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.size--;
      return data;
    }
  }

  removeLast() {
    if (this.size === 0) {
      return null;
    }
    let data = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
        this.size--;
      }
      current.next = null;
      this.tail = current;
      return data;
    }
  }

  insertAt(index, num) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(num);
    } else if (index === this.size) {
      this.append(num);
    } else {
      const node = new Node(num);
      let prev = null;
      let current = this.head;
      let counter = 0;
      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      node.next = current;
      prev.next = node;
      this.size++;
    }
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size - 1) {
      this.removeLast();
    } else {
      let prev = null;
      let current = this.head;
      let counter = 0;
      while (counter < index) {
        prev = current;
        current = current.next;
        counter++;
      }
      prev.next = current.next;
      this.size--;
      return current.value;
    }
  }

  getIndex(index) {
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current.value;
  }
}

const list = new LinkedList();

list.append(3);
list.append(5);
list.append(8);
//console.log(list);
/* LinkedList {
  head: Node { value: 3, next: null },
  tail: Node { value: 8, next: null },
  size: 3
} */
list.prepend(2);
//console.log(list);
/* LinkedList {
  head: Node { value: 2, next: Node { value: 3, next: null } },
  tail: Node { value: 8, next: null },
  size: 4
} */
console.log(list.printList()); // [2, 3, 5, 8]
list.removeFirst();
console.log(list.printList()); // [3, 5, 8]
list.removeLast();
console.log(list.printList()); // [3, 5]
list.append(2);
list.append(6);
list.append(1);
console.log(list.printList()); // [3, 5, 2, 6, 1]
list.insertAt(2, 7);
console.log(list.printList()); // [3, 5, 7, 2, 6, 1]
list.removeAt(1);
console.log(list.printList()); // [3, 7, 2, 6, 1]
console.log(list.getIndex(3)); // 6
