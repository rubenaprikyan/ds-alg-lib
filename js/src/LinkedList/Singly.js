"use strict";

function SinglyLinkedList(data = null, next = null) {
  this.data = data;
  this.next = next;
}

SinglyLinkedList.fromArray = function (arr) {
  let root = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    root = new SinglyLinkedList(arr[i], root);
  }

  return root;
};

SinglyLinkedList.fromReverseArray = function (arr) {
  let root = null;

  for (let i = 0; i < arr.length; i++) {
    root = new SinglyLinkedList(arr[i], root);
  }

  return root;
};

SinglyLinkedList.toArray = function (root) {
  const arr = [];
  let current = root;

  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }

  return arr;
};

SinglyLinkedList.toReverseArray = function (root) {
  const arr = [];
  let current = root;

  while (current !== null) {
    arr.push(current.data);
    current = current.next;
  }

  return arr.reverse();
};

module.exports = SinglyLinkedList;
