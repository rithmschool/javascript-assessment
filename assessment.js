// Write your solutions here:

function frequency(arr, n) {
  return arr.filter(function (item) {
    return item == n;
  }).length;
}

function flipCase(str, chr) {
  var str1 = str.split("");
  console.log(str1);
  return str1.map(function (item) {
    console.log(item);
    if (item == chr.toLowerCase()) {
      return item.toUpperCase();
    }
    else if (item == chr.toUpperCase()) {
      return item.toLowerCase();
    }
    else {
      return item;
    }
  }).join("");
}

function multiplyEvenNumbers(arr) {
  return arr.filter(function (currval) { return currval % 2 == 0 })
    .reduce(function (mul, item) {
      if (item % 2 == 0) {
        return mul * item;
      }
    }, 1);

}

function mode(arr) {
  var obj = {};
  var highestmode = -Infinity;
  var neededkey = 0;
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > highestmode) {
      highestmode = obj[key];
      neededkey = key;
    }
  }
  return +neededkey;
}

function capitalizeWords(str) {
  var str1 = str.split(" ");
  console.log(str1);

  return str1.map(function (currval) {
    return currval[0].toUpperCase() + currval.slice(1);
  }).join(" ");

}

function compact(arr) {
  return arr.filter(function (currval) {
    return currval;
  });
}

function partition(arr, fn) {
  var arr1 = [];
  var arr2 = [];
  var finalarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) == true) {
      arr1.push(arr[i]);
    }
    else {
      arr2.push(arr[i]);
    }
  }
  finalarr.push(arr1, arr2);
  return finalarr;
}

function intersection(arr1, arr2) {
  var finalarr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      finalarr.push(arr1[i]);
    }
  }
  return finalarr;
}

/** BONUS PROBLEMS BELOW */

function flip() { }

function once() { }
