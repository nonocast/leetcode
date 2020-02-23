const twoSum = require('./app');
const should = require('chai').should();
const debug = require('debug')('test');

describe('Two Sum', () => {
  it('test case 0', () => {
    should.not.exist(twoSum([], 1));
    should.not.exist(twoSum(null, 1));
  })

  it('test case 1', () => {
    twoSum([2, 7, 11, 15], 9).should.be.eql([0, 1]);
  })

  it('test case 2', () => {
    twoSum([0, 1, 2], 3).should.be.eql([1, 2]);
  })

  it('test case 3', () => {
    twoSum([0, 0, 0], 0).should.be.eql([0, 1]);
  })
});