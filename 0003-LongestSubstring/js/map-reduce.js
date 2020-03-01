require('dotenv').config();
const _ = require('lodash');
const debug = require('debug')('app');

let pow = x => x * x;

// debug(pow(3));

// debug([1, 2, 3].map(pow));

// debug('>>>', [1, 2, 3].reduce((pv, cv, i) => {
//   debug(i);
//   debug('pv:', pv);
//   debug('cv:', cv);
//   debug('---');

//   return 0;
// }));

// debug([1, 2, 3].reduce((pv, cv, i) => pv + cv));

// debug([1, 2, 3].map(pow).reduce((pv, cv, i) => pv + cv));

/**
 * [ '1', 0, [ '1', '2', '3' ] ]
 * [ '2', 1, [ '1', '2', '3' ] ]
 * [ '3', 2, [ '1', '2', '3' ] ]
 * 
 * 第二参数传入parseInt的radix
 * 
 * parseInt(string, radix) 
 */
parseInt = (...args) => {
  console.log(args);
}

debug(['1', '2', '3'].map(parseInt));