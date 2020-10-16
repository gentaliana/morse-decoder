const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const arr = expr.match(/.{1,10}/g);
  const arrayLength = arr.length;
  let result = '';

  for (let i = 0; i < arrayLength; i++) {
    let temp = '';
    let arrayLengthWord = arr[i].length;
    for (let j = 0; j < arrayLengthWord; j += 2) {
      if (arr[i][j] + arr[i][j + 1] === '10') temp += '.';
      else if (arr[i][j] + arr[i][j + 1] === '11') temp += '-';
    }
    arr.splice(i, 1, temp);
    temp = '';
  }

  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] !== '') {
      arr.splice(i, 1, MORSE_TABLE[arr[i]]);
    }
  }

  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] == '') {
      result += ' ';
    } else {
      result += arr[i];
    }
  }

  return result;
}

module.exports = {
  decode,
};
