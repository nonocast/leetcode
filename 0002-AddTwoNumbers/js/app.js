const _ = require('lodash');
const debug = require('debug')('app');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = [];

  // 进位标志 - carry flag
  let carry = false;

  let len = Math.max(l1.length, l2.length) + 1;

  for (let i = 0; i < len; ++i) {
    let op1 = l1.length > i ? l1[i] : 0;
    let op2 = l2.length > i ? l2[i] : 0;
    let v = op1 + op2;
    if (carry) {
      v += 1;
      carry = false;
    }
    carry = v > 9;
    result.push(v % 10);
  }

  if (result[result.length - 1] === 0) {
    result = result.slice(0, result.length - 1);
  }

  return result;
};

if (!module.parent) {
  debug(addTwoNumbers([1], [9]));
}

module.exports = addTwoNumbers;