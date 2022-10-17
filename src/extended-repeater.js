const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes,separator='+',addition='',additionRepeatTimes=1,additionSeparator='|'}) {

  str = `${str}`
  addition = `${addition}`

  if(!repeatTimes) return str+addition


  let result = ''

  for(let i=0; i<repeatTimes; i++){
    result += str
    result += (addition+additionSeparator).repeat(additionRepeatTimes).slice(0,additionSeparator?-additionSeparator.length:undefined)
    result += separator
  }

  return result.slice(0, -separator.length)
}

module.exports = {
  repeater
};
