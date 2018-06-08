// Write your solutions here:

function frequency(arr, search) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      counter += 1;
    }
  }
  return counter;
}

function flipCase(str, ltr) {
  let i = 0;
  str = str.split('');
  while (i < str.length - 1) {
    if (str[i].toLowerCase() === ltr.toLowerCase()) {
      str[i] = str[i].toUpperCase();
      i++;
    } else {
      i++;
    }
  }
  return str.join('');
}

function multiplyEvenNumbers(arr) {
  var result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result *= arr[i];
    }
  }
  return result > 1 ? result : 0;
}

function mode(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] += 1;
  }
  for (let key in frequency) {
  }
}

function capitalizeWords(word) {
  word = word.split('');
  // word[0] = word[0].toUpperCase;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === ' ') {
      word[i + 1] = word[i + 1].toUpperCase();
    }
  }
  return word.join('');
}

function compact(arr) {
  var newArr = [];
  for (let i = 0; i > arr.length; i++) {
    if (typeof arr[i] === 'number' || typeof arr[i] === 'string') {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function partition(arr, cb) {
  let newArr = [[], []];
  arr.map(val => {
    if (cb(val) === true) {
      newArr[0].push(val);
    } else {
      newArr[1].push(val);
    }
  });
  return newArr;
}

function intersection(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr2.forEach(element => {
      if (element === arr1[i]) {
        newArr.push(arr1[i]);
      }
    });
  }
  return newArr;
}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
