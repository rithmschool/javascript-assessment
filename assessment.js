// Write your solutions here:
function frequency(arr, searchItem) {
  var count = 0;
  var arrSort = arr.sort();
  for (var i = 0; i <= arrSort.length; i++) {
    if (arrSort[i] === arrSort[i + 1]) {
      count++;
    }
  }
  return count;
}

function flipCase(str, l) {
  var arr = str.split('');
  var endArr = [];
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] === l) {
      endArr.push(arr[i].toUpperCase());
    } else if (arr[i] === l.toUpperCase()) {
      endArr.push(arr[i].toLowerCase());
    } else {
      endArr.push(arr[i]);
    }
  }
  return endArr.join('');
}

function multiplyEvenNumbers(arr) {
  var evens = arr.filter(el => el % 2 === 0);
  return evens.reduce(function(product, value) {
    return product * value;
  }, evens[0]) / 2;
}

function mode(arr) {
  var sortedArr = arr.sort();
  var obj = {};
  for (var i = 0; i < sortedArr.length; i++) {
    if (obj[sortedArr[i]] === undefined) {
      obj[sortedArr[i]] = 1;
    } else {
      obj[sortedArr[i]]++;
    }
  }
  return parseInt(Object.keys(obj).reduce(function(a, b) {
    return obj[a] > obj[b] ? a : b
  }));
}

function capitalize(str) {
  var arr = str.split('');
  var firstL = arr.shift().toUpperCase();
  arr.unshift(firstL);
  return arr.join('');

}

function compact(arr) {
  var endArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      endArr.push(arr[i]);
    }
  }
  return endArr;
}

function partition() {

}

//function intersection(arr1, arr2) {
  //var endArr = [];
  //for (var i = 0; i < arr1.length; i++) {
    //if (arr2.indexOf(arr1[i] !== -1) {
        //endArr.push(arr1[i]);
      //}
    //}
    //return endArr;
  //}
