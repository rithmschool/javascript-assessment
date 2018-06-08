// Write your solutions here:

function frequency(arr, searchTerm) {
  let count = 0;
  arr.forEach(function(val) {
    if (val === searchTerm) {
      count++;
    }
  });
  return count;
}

function flipCase(str, ltr) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== ltr.toLowerCase()) {
      newStr.push(str[i]);
    } else if (str[i].toLowerCase() === str[i]) {
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push(str[i].toLowerCase());
    }
  }
  return newStr.join('');
}

function multiplyEvenNumbers(arr) {
  return arr.reduce(function(acc, val, idx, arr) {
    if (val % 2 === 0) {
      acc = acc * val;
    }
    return acc;
  }, 1);
}

function mode(arr) {
  let count = 0;
  let win = 0;
  let winNum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) {
        count++;
        if (count > win) {
          win = count;
          winNum = arr[j];
        }
      }
    count = 0;
  }
  return winNum;
}

function capitalizeWords(str) {
  let strArr = [];
  strArr.push(str[0].toUpperCase());
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      strArr.push(str[i].toUpperCase());
    } else {
      strArr.push(str[i]);
    }
  }
  return strArr.join('');
}

function compact(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function partition(arr, callback) {
  let trueArr = [];
  let falseArr = [];
  arr.forEach(function(val) {
    if (callback(val) === true) {
      trueArr.push(val);
    } else {
      falseArr.push(val);
    }
  });
  return [trueArr, falseArr];
}

function intersection(arr1, arr2) {
  return arr2.reduce(function(acc, val) {
    if (arr1.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
}

/** BONUS PROBLEMS BELOW */
// This function should return another function with the arguments switched.
// function subtract(a, b, c) {
//   return a - b - c;
// }

// subtract(10, 5, 2); // 3

// flipped = flip(subtract);

// flipped(10, 5, 2); // -13
function flip(callback) {
  function subtract(a, b, c) {
    return a - b - c;
  }

  function flip(callback) {
    console.log(callback());
    //     let newArgs= [args].reverse();
    //     console.log(newArgs)
  }

  var flipped = flip(subtract);

  flipped(10, 5, 2);
}

function once() {}
