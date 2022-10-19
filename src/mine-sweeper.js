const { NotImplementedError } = require('../extensions/index.js');

/**
 *В популярной игре MineSweeper у вас есть доска с некоторыми шахтами и этими ячейками
 * что не содержат шахты, в нем есть число, которое указывает на общее количество шахт
 * В соседних клетках.Начиная с некоторой аранжировки шахт
 * Мы хотим создать настройку шахты.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
