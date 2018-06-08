// Write your solutions here:

function frequency(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

//not finished
function flipCase(str, char) {
  let newStr = str.toLowerCase();
  let finalStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char && newStr[i] !== char) {
      finalStr += newStr[i];
    } else {
      finalStr += str[i];
    }
  }
  return finalStr;
}

function multiplyEvenNumbers(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result *= arr[i];
    }
  }
  return result;
}

function mode(arr) {
  let sorted = arr.sort(function(a, b) {
    return a - b;
  });
  let currCount = 0;
  var currEl;
  let highCount = 0;
  var highEl;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      currCount++;
      currEl = sorted[i];
    } else {
      if (currCount > highCount) {
        highCount = currCount;
        highEl = currEl;
      }
      currCount = 0;
    }
  }
  return highEl;
}

function capitalizeWords(str) {
  let arr = str.split(' ');
  let newArray = [];
  let joined = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].split(''));
  }
  for (let i = 0; i < newArray.length; i++) {
    newArray[i].splice(0, 1, newArray[i][0].toUpperCase());
    joined.push(newArray[i].join(''));
  }
  return joined.join(' ');
}

function compact(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function partition(arr, callBack) {
  let newArray = [[], []];
  arr.forEach(function(el) {
    if (callBack(el)) {
      newArray[0].push(el);
    } else {
      newArray[1].push(el);
    }
  });
  return newArray;
}

function intersection(arr1, arr2) {
  let set = new Set(arr2);
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr1[i])) {
      newArray.push(arr1[i]);
    }
  }
  return newArray;
}

/** BONUS PROBLEMS BELOW */

function flip() {}

// function once() {
//   let count = 0;
//   return function myFunction() {
//     if (count === 0) {
//       return ++count;
//     } else {
//       return undefined;
//     }
//   };
// }
