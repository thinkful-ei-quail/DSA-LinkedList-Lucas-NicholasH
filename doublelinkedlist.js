"use strict";

class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, null);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new _Node(item, null, currentNode);
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
      let newNode = new _Node(item, currentNode, previousNode);
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
      let newNode = new _Node(item, currentNode.next, currentNode);
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
      let newNode = new _Node(item, currentNode, previousNode);
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
      fullList += `${currentNode.value} (next: ${currentNode.next ? currentNode.next.value : 'none'}, prev: ${currentNode.prev ? currentNode.prev.value : 'none'}), `;
      currentNode = currentNode.next;
    }
    return fullList;
  }
}

const dllMain = function () {
  const DLL = new DoubleLinkedList();
  DLL.insertFirst('Red');
  DLL.insertLast('Orange');
  DLL.insertLast('Yellow');
  DLL.insertLast('Green');
  DLL.insertLast('Blue');
  // console.log(DLL.toString());
  // DLL.insertBefore('Cyan', 'Blue');
  // console.log(DLL.toString());
  // DLL.remove('Green');
  // console.log(DLL.toString());
  return DLL;
};

const DLL = dllMain();

const newLinkedList = new DoubleLinkedList();
const reverseDoubleListR = function (linkedList) {
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
  reverseDoubleListR(linkedList);
  return newLinkedList;
};

console.log(reverseDoubleListR(DLL).toString());