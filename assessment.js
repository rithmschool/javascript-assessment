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

// 5)
// input: string
// output: string
// assumptions: only strings will be passed in
// edge cases: if letter is already cap leave it cap
// it should capitalize the first letter of each word in the passed in string
// can i use a modified version of flip case?

function capitalizeWords(str) {
  // split str into an array of each word
  let words = str.split(' ');
  let newArr = [];
  //console.log(words);
  // iterate this array of words
  for (let j = 0; j < words.length; j++) {
    // need to turn word into array
    var strArr = words[j].split('');
    //console.log(strArr);
    strArr[0] = strArr[0].toUpperCase();
    var capWord = strArr.join('');
    newArr.push(capWord);
    console.log(strArr);
  }
  return newArr.join(' ');
  // check the first index of each word for capitalization
  // if it is not then cap it
  // if it is then leave it alone
}

// input: array
// output: array
// it hsould return an array with all the truthy values
// iterate through array and check if a value is truthy
// 6)
function compact(arr) {
  // filter will evaluate truthi-ness is this correct?
  // **** ask to clarify ****
  return arr.filter(val => {
    return val;
  });
}
// 7)
// input: array
// output: array
// it should take in an array and a cb
// with the call back it will evaluate something and if it is true
// then it puts it in the left array, if not right array
// then puts both array into a final array
// almost like a filter function
// *** ask if we can use map or reduce? ***

function partition(arr, cb) {
  // main array
  // left arr
  // right arr
  let mainArr = [[], []]; // main[0], main[1]
  // iterate through passed in arr
  for (let val of arr) {
    // check if val passes cb
    if (cb(val)) {
      mainArr[0].push(val);
    } else {
      mainArr[1].push(val);
    }
    // if it does put in left arr
    // if it does not put in right arr
  }
  return mainArr;
}

//8)
// input: array, array
// output: array
// it should take all the values that are the same in each array
// and return that in an array
// iterate through both arrays and check values?
// use indexof?

function intersection(arr1, arr2) {
  // storage array
  let newArr = [];
  // iterate through arr for val
  for (let val of arr1) {
    // use indexof to check if val is there
    if (arr2.indexOf(val) > -1) {
      newArr.push(val);
    }
    // push to new arr if it is
  }
  // return new arr
  return newArr;
}

/** BONUS PROBLEMS BELOW */

function flip() {}

function once() {}
