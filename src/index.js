module.exports = function toReadable (number) {
  let numObject = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  }

  let tensObject = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
  }

  let numString = number.toString();

  if (numString.length === 1) {
    return numObject[numString] || 'zero';
  } 

  if (numString.length === 2) {
    if (tensObject[numString[0]]) {
        return tensObject[numString[0]] + (numObject[numString[1]] ? ' ' + numObject[numString[1]] : '');
    }

    switch (numString) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen'
        case '15':
            return 'fifteen';
        case '18':
            return 'eighteen';
        default:
            return numObject[numString[1]] + 'teen';
    }
  }

  if (numString.length === 3) {
    let newNumber = parseInt(numString.slice(1));
    return numObject[numString[0]] + ' hundred' + (newNumber === 0 ? '' : ' ' + toReadable(newNumber));
  }
}
