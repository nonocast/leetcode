const _ = require('lodash');
const debug = require('debug')('app');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
  if (!nums) return null;

  let result = null;

  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) {
        result = [i, j];
        break;
      }
    }
    if (result) break;
  }

  return result;
};

module.exports = twoSum;