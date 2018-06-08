// Write your solutions here:
// 1)
// input: array, number
// output: number
// it should accept an array and count how many times a given target value is
// the element in the array will always be a primitive value
function frequency(arr, target) {
  // counter
  let counter = 0;
  // iterate through array
  for (let val of arr) {
    // check if array val is === target element
    if (val === target) {
      ++counter;
    }
    // add to counter
  }
  // return counter
  return counter;
}
// input: string, letter
// output: string
// it should take in a string and a letter
// it should flip the case of the passed in letter found in the string

//2)
function flipCase(str, tarChar) {
  // need to turn str into array
  let strArr = str.split('');
  // iterate through strArr
  for (let i = 0; i < strArr.length; i++) {
    // check each str character for target char
    if (strArr[i] === tarChar) {
      strArr[i] = strArr[i].toUpperCase();
    } else if (strArr[i].toLowerCase() === tarChar) {
      strArr[i] = strArr[i].toLowerCase();
    }
    // if it is then flip case
  }
  return strArr.join('');
}

// input: array
// output: number
// assumption: array is only numbers
// it should take in an array of numbers and
// return the product of all EVEN numbers in the array
// going to try and use filter and reduce, if doens't work
// ask about this

//3)
function multiplyEvenNumbers(arr) {
  // filter array for evens
  // chain with reduce and multiply
  return arr
    .filter(val => {
      return val % 2 === 0;
    })
    .reduce((product, even) => {
      return product * even;
    });

  // iterate over array
  // check if number is even
  // if it is then multiply
  // return product
}

//4)
// input: array
// output: num
// assumptions: array is only full of numbers
// also assume that there is only 1 mode
// it should accept an array of numbers and return
// the most frequent number
// create freq counter
// check obj's value for highest
// return key
// *** ask about iterating through objects ***

function mode(arr) {
  // create freq counter obj
  let freqObj = {};
  let highest = 0;
  let freqNum = 0;
  // iterate through array
  for (let num of arr) {
    // assign key value based on freq
    freqObj[num] = ++freqObj[num] || 1;
  }
  // iterate through obj
  for (let key in freqObj) {
    // mathmax for highest freq
    if (freqObj[key] > highest) {
      highest = freqObj[key];
      freqNum = key;
    }
    //     highest = Math.max(highest, freqObj[key]);
  }
  // return key for highest freq
  console.log(freqObj);
  return +freqNum;
}

function capitalizeWords() {}

function compact() {}

function partition() {}

function intersection() {}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
