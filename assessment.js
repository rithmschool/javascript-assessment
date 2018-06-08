// Write your solutions here:

function frequency(arr, target) {
  let count = 0;
  arr.forEach(val => {
    if (val === target) count++;
  });
  return count;
}

function flipCase(str, letter) {
  let flippedCaseString = '';
  let lowerCaseLetter = letter.toLowerCase();
  let upperCaseLetter = letter.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === lowerCaseLetter) {
      flippedCaseString += char.toUpperCase();
    } else if (char === upperCaseLetter) {
      flippedCaseString += char.toLowerCase();
    } else {
      flippedCaseString += char;
    }
  }
  return flippedCaseString;
}

function multiplyEvenNumbers(arr) {
  const evenArray = arr.filter(val => {
    return val % 2 === 0;
  });
  if (evenArray.length === 0) return 0;
  let product = 1;
  evenArray.forEach(val => {
    product *= val;
  });
  return product;
}

function mode(arr) {
  let freq = {};
  let highestCount = 0;
  let mode = arr[0];
  arr.forEach(val => {
    freq[val] = freq[val] + 1 || 1;
    highestCount = Math.max(highestCount, freq[val]);
    mode = highestCount === freq[val] ? val : mode;
  });
  return mode;
}

function capitalizeWords(str) {
  let splitStr = str.split(' ');
  let upperCaseSplitStr = splitStr.map(word => {
    let splitWord = word.split('');
    splitWord.splice(0, 1, splitWord[0].toUpperCase());
    return splitWord.join('');
  });
  return upperCaseSplitStr.join(' ');
}

function compact(arr) {
  return arr.filter(val => val);
}

function partition(arr, callback) {
  let truthy = [];
  let falsey = [];
  arr.forEach(val => {
    if (callback(val)) {
      truthy.push(val);
    } else {
      falsey.push(val);
    }
  });
  return [truthy, falsey];
}

function intersection(arr1, arr2) {
  return arr1.filter(val => {
    return arr2.includes(val);
  });
}

/** BONUS PROBLEMS BELOW */

function flip(func) {
  return function() {
    return func(...Array.from(arguments).reverse());
  };
}

function once(func) {
  let count = 0;
  return function() {
    if (count < 1) {
      count++;
      return func(...arguments);
    }
  };
}
