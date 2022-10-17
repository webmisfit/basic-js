const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!date) return 'Unable to determine the time of year!'
  if(!(date instanceof Date))  throw new Error("Invalid date!")
  else{
    date.setMonth(date.getMonth()+1)
    return ['winter','winter','winter','spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn','autumn', 'autumn'][date.getMonth()]
  }

  // if(!(`${date}` instanceof Date)) throw new Error("Invalid date!")

 
}

module.exports = {
  getSeason
};
