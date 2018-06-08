// Write your solutions here:

function frequency(arr, n) {
  return arr.filter(x => x === n).length;
}

function flipCase(str, char) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {
      newStr +=
        str[i] === char.toUpperCase()
          ? str[i].toLowerCase()
          : str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function multiplyEvenNumbers(arr) {
  return arr.filter(x => x % 2 === 0).reduce((t, y) => t * y, 1);
}

function mode(arr) {
  let obj = {};

  arr.map(x => (obj[x] = ++obj[x] || 1));
  return +Object.keys(obj).sort((a, b) => obj[b] - obj[a])[0];
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function compact(arr) {
  return arr.filter(x => x);
}

function partition(arr, cb) {
  return [arr.filter(x => cb(x)), arr.filter(y => !cb(y))];
}

function intersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

/** BONUS PROBLEMS BELOW */

function flip() {
  return function(a, b, c) {
    return a - b - c;
  };
}
function once(cb) {
  let a, b;
  return cb(a, b);
}
