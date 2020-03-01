const _ = require('lodash');
const debug = require('debug')('app');

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const map = {};
  var left = 0;

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left;
    map[v] = i;
    return Math.max(max, i - left + 1);
  }, 0);
}

if (!module.parent) {
  let result = lengthOfLongestSubstring('abcabcbb');
  debug(result);
}

module.exports = {
  lengthOfLongestSubstring
}