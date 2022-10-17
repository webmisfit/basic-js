const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  return str.match(/(.?)(\1*)/g).reduce((a,c)=>a+(c.length>1? c.length+c[0] : c),'')

}

module.exports = {
  encodeLine
};
