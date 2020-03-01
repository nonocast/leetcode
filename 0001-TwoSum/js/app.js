const _ = require('lodash');
const debug = require('debug')('app');


/**
 * 思路:
 * 1. 设计一个hash存放配对数据
 * 2. 再次遍历在hash中寻找配对
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  let len = nums.length;
  let hash = {};
  for (let i = 0; i < len; ++i) {
    hash[nums[i]] = i;
  }

  for (let i = 0; i < len; ++i) {
    let x = target - nums[i];
    if ((x in hash) && i !== hash[x]) {
      return [i, hash[x]];
    }
  }

  return null;
};

if (!module.parent) {
  debug(twoSum([1, 2, 3, 4, 5], 3));
}

module.exports = twoSum;