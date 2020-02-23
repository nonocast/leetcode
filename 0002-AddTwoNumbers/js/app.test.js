const addTwoNumbers = require('./app');
const should = require('chai').should();
const debug = require('debug')('test');

describe('Add Two Numbers', () => {
  it('case 0', () => {
    addTwoNumbers([2, 4, 3], [5, 6, 4]).should.be.eql([7, 0, 8]);
  })

  it('case 1', () => {
    addTwoNumbers([1], [1]).should.be.eql([2]);
  })

  it('case 2', () => {
    addTwoNumbers([1], [2]).should.be.eql([3]);
  })

  it('case 3', () => {
    addTwoNumbers([1, 1], [2, 1]).should.be.eql([3, 2]);
  })

  it('case 4', () => {
    addTwoNumbers([9], [1]).should.be.eql([0, 1]);
  })
});