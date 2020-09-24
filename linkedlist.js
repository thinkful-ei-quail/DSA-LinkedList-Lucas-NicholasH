"use strict";

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode.value !== key && currentNode !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        console.log("Key not found");
      }
      let newNode = new _Node(item, currentNode);
      previousNode.next = newNode;
    }
  }

  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.value !== key && currentNode !== null) {
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        console.log("Key not found");
      }
      let newNode = new _Node(item, currentNode.next);
      currentNode.next = newNode;
    }
  }

  insertAt(item, index) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      for (let i = 0; i < index; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode === null) {
          console.log("Index out of range");
        }
      }
      let newNode = new _Node(item, currentNode);
      previousNode.next = newNode;
    }
  }

  find(item) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      while (currentNode.value !== item) {
        if (currentNode.next === null) {
          return null;
        }
        currentNode = currentNode.next;
      }
      return currentNode;
    }
  }

  remove(item) {
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    } else if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while (currentNode !== null && currentNode.value !== item) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        throw new Error("Item not found");
      }
      previousNode.next = currentNode.next;
    }
  }

  toString() {
    if (this.head === null) {
      return "List empty";
    }
    let fullList = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      fullList += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    return fullList;
  }
}

const main = function () {
  const SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Helo");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Husker");
  SLL.insertLast("Boomer");
  SLL.insertAt("Kat", 2);
  SLL.remove("Boomer");
  //console.log(SLL.toString());
  return SLL;
};

const names = main();

const emptyList = new LinkedList();

const display = function (linkedList) {
  let displayList = "";
  let currentNode = linkedList.head;
  while (currentNode !== null) {
    displayList += `${currentNode.value}, `;
    currentNode = currentNode.next;
  }
  return displayList;
};

console.log(display(names));

const size = function (linkedList) {
  let ticker = 0;
  let currentNode = linkedList.head;
  while (currentNode !== null) {
    ticker++;
    currentNode = currentNode.next;
  }
  return ticker;
};

//console.log(size(names));
//console.log(size(emptyList));

const isEmpty = function (linkedList) {
  return linkedList.head === null;
};

//console.log(isEmpty(names));
//console.log(isEmpty(emptyList));

const findPrevious = function (linkedList, item) {
  if (!linkedList.head) {
    console.log("List is empty");
    return;
  }
  if (linkedList.head.value === item) {
    console.log("Item is first, so no previous item");
    return;
  }
  let currentNode = linkedList.head;
  while (currentNode.next.value !== item) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

// console.log(findPrevious(names, "Helo"));
// console.log(findPrevious(names, "Apollo"));
// console.log(findPrevious(emptyList, "Helo"));

const findLast = function (linkedList) {
  if (!linkedList.head) {
    console.log("List is empty");
    return;
  }
  let node = linkedList.head;
  while (node.next) {
    node = node.next;
  }
  return node;
};

console.log(findLast(emptyList));
console.log(findLast(names));

// iteratation????
const reverseList = function (linkedList) {
  const listSize = size(linkedList);
  if (listSize === 0 || listSize === 1) {
    return linkedList;
  }
  let headNode = linkedList.head;
  while (headNode.next) {
    let tempNode = headNode.next;
    headNode.next === headNode.next.next;
  }
};

// recursion
const newLinkedList = new LinkedList();
const reverseListR = function (linkedList) {
  //base case
  if (!linkedList.head) {
    return;
  }

  //general case
  let currentNode = linkedList.head;
  let value = currentNode.value;
  while (currentNode.next !== null) {
    value = currentNode.next.value;
    currentNode = currentNode.next;
  }
  newLinkedList.insertLast(value);
  linkedList.remove(currentNode.value);
  reverseListR(linkedList);
  return newLinkedList;
};

console.log(display(reverseListR(names)));
