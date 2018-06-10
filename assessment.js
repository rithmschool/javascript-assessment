function frequency(arr, val) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == val) {
      count++;
    }
  }
  return count;
}

function flipCase(str, ltr) {
  let arr = str.split('');
  let newStr = '';
  for (let char of arr) {
    if (char.toLowerCase() === ltr) {
      char === char.toUpperCase()
        ? (newStr += char.toLowerCase())
        : (newStr += char.toUpperCase());
    } else newStr += char;
  }
  return newStr;
}

function multiplyEvenNumbers(arr) {
  return arr.reduce(function(acc, nextVal) {
    if (nextVal % 2 === 0) {
      acc *= nextVal;
    }
    return acc;
  });
}

function mode(arr) {
  let countObj = {};
  let highestFreqNum = arr[0];
  for (let num of arr) {
    countObj[num] ? countObj[num]++ : (countObj[num] = 1);
    if (countObj[highestFreqNum] < countObj[num]) {
      highestFreqNum = num;
    }
  }
  return highestFreqNum;
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}

function compact(arr) {
  return arr.filter(val => val);
}

function partition() {}

function intersection() {}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
