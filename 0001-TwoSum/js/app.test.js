const twoSum = require('./app');
const should = require('chai').should();
const debug = require('debug')('test');

describe('Two Sum', () => {
  it('case 0', () => {
    should.not.exist(twoSum([], 1));
    should.not.exist(twoSum(null, 1));
  })

  it('case 1', () => {
    twoSum([2, 7, 11, 15], 9).should.be.eql([0, 1]);
  })

  it('case 2', () => {
    twoSum([0, 1, 2], 3).should.be.eql([1, 2]);
  })

  it('case 3', () => {
    twoSum([2, 5, 5, 1], 10).should.be.eql([1, 2]);
  })

  it('case 4', () => {
    twoSum([3, 2, 4], 6).should.be.eql([1, 2]);
  })
});