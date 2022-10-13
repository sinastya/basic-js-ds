const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let arr = [];

  const listToArr = (obj) => {
    arr.push(obj.value);
    obj = obj.next
    if (obj) {listToArr(obj)}
  }

  listToArr(l)

  arr = arr.filter(el => el != +k)

  class LinkedList {
    constructor (){
      this.head = null;
		  this.length = 0;
    }

    getList() {
      return this.head
    }

    add(value) {
      if (this.length === 0) {
			  this.head = new ListNode(value)
		  } else {
			  let currentNode = this.head;
			  while(currentNode.next) {
				  currentNode = currentNode.next
			  }
			  currentNode.next = new ListNode(value)
		  }
		  this.length ++
    }
  }

  const list = new LinkedList()

  arr.forEach(el => list.add(el))
  return list.getList()
}

module.exports = {
  removeKFromList
};
