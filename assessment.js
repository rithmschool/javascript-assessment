// Write your solutions here:

function frequency(array, searchTerm) {
  var count = 0;
  function helper(index) {
    if (index > array.length -1) return;
    if (array[index] === searchTerm) count++;
    helper(index+1)
  }
  helper(0);
  return count;
}

function flipCase(string, letter) {
  var str = ""; // Trying to avoid mutating original.
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === letter.toLowerCase()) {
      //console.log(string[i] + " " + string.charCodeAt(i))
      if (string.charCodeAt(i) <= 90) {
        str = str.concat(string[i].toLowerCase());
      } else {
        str = str.concat(string[i].toUpperCase());
      }
    } else {
      str = str.concat(string[i]);
    }
  }
  return str;
}
//console.log(flipCase("AZaz", "z"));

function multiplyEvenNumbers(array) {
  //var product = 1;
  var value = array[0] % 2 === 0? array[0] : 1;

  if (array.length > 1) return value * multiplyEvenNumbers(array.slice(1));
  
  return value;
}

// T: O(n) S: O(n)
function mode(array) {
  var mostFrequent = 0;
  var numbers = {};

  for (var i = 0; i < array.length; i++) {
    if (array[i] in numbers === false ){
      numbers[array[i]] = 1;
      if (i === 0) mostFrequent = array[i];
    } else {
      numbers[array[i]]++;
    }

    if (numbers[array[i]] > numbers[mostFrequent]) mostFrequent = array[i];
  }
  return mostFrequent;
}

// T: O(n) S: O(n) - I think.
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}


// T: O(n) S: O(n) - I think.
function compact(array) {
  return array.filter(function(val) {
    if (val) return true;
    return false;
  });
}


// T: O(n) S: O(n) - I think.
function partition(array, cb) {
  var arrays = [
    [], // True Array
    []  // False Array
  ];

  for (var i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      arrays[0].push(array[i]);
    } else {
      arrays[1].push(array[i]);
    }
  }

  return arrays;
}

// T: O(n) S: O(n) - I think.
function intersection(arr1, arr2) {
  var results = [];
  var left = 0;
  var right = 0;
  var index = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] === arr2[right]) {
      results.push(arr1[left]);
      left++;
      right++;
    } else if (arr1[left] < arr2[right]) {
      left++;
    } else if (arr2[right] < arr1[left]) {
      right++
    }
  }
  return results;
}

// This one took me the longest. I couldn't let it go (but I did do it last.)
function flip(fn) {
  return function() {
    return fn.apply(this, [].reverse.apply(arguments));
  }
}

function subtract(a,b,c){
    return a-b-c;
}

subtract(10,5,2); // 3

flipped = flip(subtract);

console.log(flipped(10,5,2)); // -13


function once(fn) {
  var count = 0;

  return function() {
    if (count === 0) {
      count++;
      return fn.apply(this ,arguments);
    }
  }
}

function add(a,b){
    return a+b;
}

// Had to test the junk outta that one.
var oneAddition = once(add);

// console.log(oneAddition);
// console.log(oneAddition(2,2)); // 4
// console.log(oneAddition(2,2)); // undefined
// console.log(oneAddition(12,200)); // undefined


// Part II - Just kidding
// And this looked more fun than PI :( I love OOP <3 <3



























