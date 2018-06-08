// Write your solutions here:

function frequency(arr, search) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      count++;
    }
  }
  return count;
}

function flipCase(str, ltr) {
  let newStrArr = [];
  ltr = [ltr.toUpperCase(), ltr.toLowerCase()];
  for (let i = 0; i < str.length; i++) {
    if (!ltr.includes(str[i])) {
      newStrArr.push(str[i]);
    } else if (ltr[0] === str[i]) {
      newStrArr.push(ltr[1]);
    } else {
      newStrArr.push(ltr[0]);
    }
  }
  return newStrArr.join('');
}

function multiplyEvenNumbers(arr) {
  arr = arr.filter(function(val) {
    return val % 2 === 0;
  });
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce(function(acc, next) {
    return acc * next;
  });
}

function mode(arr) {
  let modeCount = 0;
  let modeNum;
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen.hasOwnProperty(arr[i])) {
      seen[arr[i]]++;
    } else {
      seen[arr[i]] = 1;
    }
    if (seen[arr[i]] > modeCount) {
      modeCount = seen[arr[i]];
      modeNum = arr[i];
    }
  }
  return modeNum;
}

function capitalizeWords(str) {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

function compact(arr) {
  return arr.filter(function(val) {
    if (val) {
      return val;
    }
  });
}

function partition(arr, callback) {
  let passArr = [];
  let failArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      passArr.push(arr[i]);
    } else {
      failArr.push(arr[i]);
    }
  }
  return [passArr, failArr];
}

function intersection(arr1, arr2) {
  let intersectArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersectArr.push(arr1[i]);
    }
  }
  return intersectArr;
}

/** BONUS PROBLEMS BELOW */

function flip() {}

// function once(callback) {
//   let usable = 1;
//   return function oneShot() {
//     if (usable === 1) {
//       usable--;
//       return callback();
//     } else {
//       return 'bar';
//     }
//   };
// }
// function once(callback) {
//   let usable = 1;
//   if (usable === 1) {
//     usable--;
//     return callback;
//   } else {
//     return 'bar';
//   }
// }
// returns NaN. I don't know.
