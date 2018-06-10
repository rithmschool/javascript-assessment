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
  let arr = str.split('');
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] || arr[i - 1] === ' ') {
      newStr += arr[i].toUpperCase();
    } else newStr += arr[i];
  }
  return newStr;
}

function compact(arr) {
  return arr.filter(val => {
    return val === true;
  });
}

function partition() {}

function intersection() {}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
