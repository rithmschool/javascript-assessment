// Write your solutions here:
function frequency(arr, val) {
  let counter = 0;
    arr.forEach(function(el) {
      if (el === val) {
        counter ++;
      }
    });
    return counter;
}

function flipCase(str, char) {
let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char.toLowerCase()) {
        newStr += str[i].toUpperCase();
    } else if (str[i] === char.toUpperCase()) {
        newStr += str[i].toLowerCase();
    } else {
        newStr += str[i];
    }
  }
  return newStr;
}

function multiplyEvenNumbers(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr.reduce(function(prev, next) {
    return prev * next;
  }, 1)
}

function mode(arr) {

  let countObj = arr.reduce(function(prev, next) {
    if (!prev[next]) {
      prev[next] = 1;
    } else {
      prev[next] ++;
    }
    return prev;
  }, {});

  let maxKey = 0;
  for (let key in countObj) {
    if (maxKey === 0 || countObj[key] > countObj[maxKey]) {
        maxKey = key;
    }
  }
   return +maxKey;
}

function capitalize(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

function compact(arr) {
  return arr.filter(function(el) {
    return el;
  });
}

function partition(arr, cb) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr3.push(arr1);
  arr3.push(arr2);
  return arr3;
}

function intersection(arr1,arr2) {
  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arr3.push(arr2[i]);
    };
  }
  return arr3;
}

function flip(fn, thisArg) {
   return function(...innerArgs) {
      innerArgs = innerArgs.reverse();
        return fn.apply(thisArg, innerArgs);
    }
}

function once(fn, thisArg) {
  let counter = 0;
    return function(...innerArgs) {
      counter ++;
      if (counter === 1) {
        return fn.apply(thisArg, innerArgs)
      } else {
          return undefined;
      }
    }
}

//Part 2
function Book(title, genre, pageCount, author, numChapters) {
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}

Book.prototype.toString = function() {
  return `${this.title}: ${this.pageCount}`;
}

Book.prototype.pagesPerChapter = function() {
  return Math.floor(this.pageCount / this.numChapters);
}

function Library(name, location, books) {
  this.name = name;
  this.location = location;
  this.books = [];
}

Library.prototype.addBook = function(newbooks) {
  if (Array.isArray(newbooks)) {
    let newStatus = this.books.concat(newbooks);
    return newStatus;
  } else {
    this.books.push(newbooks);
    return this.books;
  }
}

Library.prototype.listAuthors = function() {
  var names = [];
  for (var i = 0; i < this.books.length; i++) {
    for (var key in this.books[i]) {
      if (key === this.author) {
        names.push(this.books[key]);
      }
    }
  }
  return names;
}
