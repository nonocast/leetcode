const { lengthOfLongestSubstring } = require('./app');
const should = require('chai').should();
const debug = require('debug')('app');

describe('Longest Substring without repeat char', () => {
  it('case 1', () => {
    lengthOfLongestSubstring('abcabcbb').should.eq(3);
  })

  it('case 2', () => {
    lengthOfLongestSubstring('bbbbb').should.eq(1);
  })

  it('case 3', () => {
    lengthOfLongestSubstring('pwwkew').should.eq(3);
  })
});