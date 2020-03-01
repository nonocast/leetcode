const { buildList, addTwoNumbers } = require('./app');
const should = require('chai').should();
const debug = require('debug')('app');

describe('Add Two Numbers', () => {
  it('test list node valueOf', () => {
    buildList(567).valueOf().should.be.eq(567);
  });

  it('case 1', () => {
    addTwoNumbers(buildList(243), buildList(465)).valueOf().should.eq(708);
  })

  it('case 2', () => {
    addTwoNumbers(buildList(1), buildList(1)).valueOf().should.eq(2);
  })

  it('case 3', () => {
    addTwoNumbers(buildList(1), buildList(2)).valueOf().should.eq(3);
  })

  it('case 4', () => {
    addTwoNumbers(buildList(1), buildList(9)).valueOf().should.eq(10);
  })

  it('case 5', () => {
    addTwoNumbers(buildList(100), buildList(9)).valueOf().should.eq(109);
  })
});