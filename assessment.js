// Write your solutions here:

// PART I

function frequency(arr, val) {
  // find the number of times the value occurs in the array
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) count++;
  }
  return count;
}

function flipCase(str, char) {
  // find the character in the str and flip the case (lower to upper, vice versa)
  // return a new string with flipped cases for target character
  var splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].toLowerCase() === char.toLowerCase()) {
      // if it's upper case, make it lower. otherwise vice versa
      splitStr[i] = splitStr[i] === splitStr[i].toUpperCase() ? splitStr[i].toLowerCase() : splitStr[i].toUpperCase();
    }
  }
  return splitStr.join("");
}

function multiplyEvenNumbers(arr) {
  // multiply all even numbers together and return
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      product *= arr[i];
    }
  }
  // if (product === 1) return "There were no even numbers in the array.";
  return product;
}

function mode(arr) {
  // find the value in the array that occurs most frequently
  // set a current value
  // find all subsequent occurrences
  // set the next value to check
  // if number of occurrences of that one is higher than previous,
  // update result
  var result;
  var count = 0;
  let tempVal;
  let tempHighestCount;
  for (let i = 0; i < arr.length; i++) {
    tempVal = arr[i];
    tempHighestCount = 1;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) tempHighestCount++;
    }
    if (tempHighestCount > count) {
      count = tempHighestCount;
      result = tempVal;
    }
  }
  return result;
}

function capitalize(str) {
  // returns the string passed in with first character capitalized
  var splitStr = str.split("");
  splitStr = splitStr[0].toUpperCase() + str.slice(1);
  return splitStr;
}

function compact(arr) {
  var result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

function partition(arr, fn) {
  // the callback will return true or false
  // if value in arr is true, push into one array
  // if value in arr is false, push into another
  // return a larger array containing the two arrays
  var trueArr = [];
  var falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]) ? trueArr.push(arr[i]) : falseArr.push(arr[i]);
  }
  return [trueArr, falseArr];
}

function intersection(arr1, arr2) {
  // return an array that contains the values that occur in both arr1 and arr2
  var outerLimit;
  var innerLimit;
  var largerArr;
  var smallerArr;
  var result = [];
  if (arr1.length > arr2.length) {
    outerLimit = arr2.length;
    largerArr = arr1;
    innerLimit = arr1.length;
    smallerArr = arr2;
  } else {
    outerLimit = arr1.length;
    largerArr = arr2;
    innerLimit = arr2.length;
    smallerArr = arr1;
  }
  for (let i = 0; i < outerLimit; i++) {
    for (let j = 0; j < innerLimit; j++) {
      if (smallerArr[i] === largerArr[j]) {
        result.push(smallerArr[i]);
        break;
      }
    }
  }
  return result;
}

function flip(fn) {
  // return another function with the arguments switched
  return function() {
    var args = [].slice.call(arguments); // grab arguments
    args.reverse(); // reverse
    return fn(...args); // pass reversed args into callback
  }
}

function once(fn) {
  // returns a function that can only be invoked once
  // subsequent invocations should return undefined
  var count = 1;
  return function() {
    if (count === 0) {
      return;
    }
    else count--;
    return fn(...arguments);
  }
}

// PART II

// Book

function Book(title, genre, pageCount, author, numChapters) {
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}

Book.prototype.toString = function() {
  return `${this.title}: ${this.pageCount}`;
};

Book.prototype.pagesPerChapter = function() {
  return Math.round(this.pageCount / this.numChapters);
};

// Library

function Library(name, location, books=[]) {
  this.name = name;
  this.location = location;
  this.books = books;
}

Library.prototype.addBook = function(bookOrBooks) {
  // accepts a single book or an array of books and adds to library's books array
  // returns new list of books
  // no duplicates and make sure it is a Book object
  if (Array.isArray(bookOrBooks)) {
    for (let i = 0; i < bookOrBooks.length; i++) {
      if (bookOrBooks[i] instanceof Book && this.books.indexOf(bookOrBooks[i]) === -1) {
        this.books.push(bookOrBooks[i]);
      }
    }
  } else {
    if (bookOrBooks instanceof Book && this.books.indexOf(bookOrBooks) === -1) {
      this.books.push(bookOrBooks);
    }
  }
  return this.books;
};

Library.prototype.listAuthors = function(wantUniqueList) {
  // returns an array of the names of the authors of each book in the library
  // if boolean true is also passed in, should return list of unique authors; no duplicates
  var authors = [];
  if (wantUniqueList) {
    for (let i = 0; i < this.books.length; i++) {
      if (authors.indexOf(this.books[i].author) === -1) {
        authors.push(this.books[i].author); 
      }
    }
  } else {
    for (let i = 0; i < this.books.length; i++) {
      authors.push(this.books[i].author); 
    }
  }
  return authors;
};

Library.prototype.sumPages = function() {
  // returns total number of pages of each book in the array of books
  var sum = 0;
  for (let i = 0; i < this.books.length; i++) {
    sum += this.books[i].pageCount;
  }
  return sum;
};

Library.prototype.filterByAuthor = function(author) {
  // accepts name of author
  // returns array of books with that author
  var booksByAuthor = [];
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].author === author) {
      booksByAuthor.push(this.books[i]);
    }
  }
  return booksByAuthor;
};