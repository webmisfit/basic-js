const { NotImplementedError } = require('../extensions/index.js');

/**
 * Учитывая массив с высоты, сортируйте их, за исключением случаев, если значение составляет -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return arr.sort((a,b)=>{
    if(a === -1 || b === -1) return 0
    return a < b? -1 : 1
  })
}

module.exports = {
  sortByHeight
};
