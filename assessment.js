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

function multiplyEvenNumbers() {}

function mode(arr) {}

function capitalizeWords() {}

function compact() {}

function partition() {}

function intersection() {}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
