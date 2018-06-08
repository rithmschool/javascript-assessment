// Write your solutions here:

function frequency(arr, n) {
  let count = 0;
  for (let i of arr) {
    if (i === n) {
      count++;
    }
  }
  return count;
}

function flipCase(string, letter) {
  let strArr = [...string];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() === letter) {
      if (strArr[i].toUpperCase() === strArr[i]) {
        strArr[i] = strArr[i].toLowerCase();
      } else {
        strArr[i] = strArr[i].toUpperCase();
      }
    }
  }
  return strArr.join('');
}

function multiplyEvenNumbers(arr) {
  return arr.reduce((all, item, idx) => {
    if (item % 2 === 0) {
      return all * item;
    } else {
      return all;
    }
  }, 1);
}

function mode(arr) {
  let freqCounter = {};
  for (let i of arr) {
    freqCounter[i] = freqCounter[i] !== undefined ? ++freqCounter[i] : 1;
  }
  console.log(freqCounter);
  let frequency = 0;
  let mostFrequentValue = 0;
  for (let key in freqCounter) {
    if (freqCounter[key] > frequency) {
      frequency = freqCounter[key];
      mostFrequentValue = key;
    }
  }
  return +mostFrequentValue;
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(item => {
      let capString = item.split('');
      capString[0] = capString[0].toUpperCase();
      return capString.join('');
    })
    .join(' ');
}

function compact(arr) {
  return arr.filter(item => item);
}

function partition(arr, cb) {
  return arr.reduce(
    (all, item) => {
      if (cb(item)) {
        all[0].push(item);
      } else {
        all[1].push(item);
      }
      return all;
    },
    [[], []]
  );
}

function intersection(arr1, arr2) {
  let section = new Set();
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        section.add(i);
      }
    }
  }
  return [...section];
}

/** BONUS PROBLEMS BELOW */

function flip(fn) {
  function flop() {
    let reverseArgs = [...arguments].reverse();
    return fn(...reverseArgs);
  }
  return flop;
}

function once(fn) {
  let count = 0;
  function uno() {
    if (count >= 1) {
      return undefined;
    } else {
      count++;
      return fn(...arguments);
    }
  }
  return uno;
}
