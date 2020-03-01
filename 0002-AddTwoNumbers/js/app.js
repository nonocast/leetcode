const _ = require('lodash');
const debug = require('debug')('app');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
  this.valueOf = () => {
    let digits = [];
    let node = this;

    do {
      digits.push(node.val);
    } while ((node = node.next) !== null)


    return Number.parseInt(digits.reverse().join(''));
  }
}

/**
 * @param {Number} number
 * @return {ListNode}
 * 
 * example: 123 => ListNode [3, 2, 1]
 */
function buildList(number) {
  let digits = (new String(number)).split('');
  let result = null;
  for (let each of digits) {
    let p = new ListNode(Number.parseInt(each));
    p.next = result;
    result = p;
  }
  return result;
}

/**
 * 思路:
 * 1. 将节点对应的位相加存到新链表
 * 2. 考虑l1, l2长度不一致，缺失补0
 * 3. 设计进位机制
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (l1, l2) => {
  return add(l1, l2, false);
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {Boolean} carry
 */

let add = (l1, l2, carry) => {
  let v1 = l1 ? l1.val : 0;
  let v2 = l2 ? l2.val : 0;
  let val = v1 + v2 + (carry ? 1 : 0);
  let node = new ListNode(val % 10);
  if (l1 || l2 || carry) {
    node.next = add(l1 && l1.next, l2 && l2.next, val > 9);
    return node;
  }
  return null;
}

if (!module.parent) {
  let p1 = buildList(342);
  let p2 = buildList(465);
  let result = addTwoNumbers(p1, p2);
  debug(result);
}

module.exports = {
  addTwoNumbers,
  buildList
}