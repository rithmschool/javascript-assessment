// Write your solutions here:

function frequency(arr, val) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) count++
  }
  return count;
}

function flipCase (str, val) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === val.toLowerCase()) {
            newStr += str[i].toUpperCase();
        }
        else if (str[i] === val.toUpperCase()) {
            newStr += str[i].toLowerCase();
        }
        else newStr += str[i];
    }
    return newStr;
}

function multiplyEvenNumbers (arr) {
    var count = 1;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        count *= arr[i];
      }
    }
    return count;
}

function mode(arr) {
  var currentCount = 0;
  var highestCount = 0;
  var mode = 0;
  arr.sort(function(a,b) {
    return a-b;
  });

  for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) currentCount++
      if (currentCount > highestCount) {
        highestCount = currentCount;
        currentCount = 0;
        mode = arr[i];
      }
  }

  return mode;

}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function compact(arr) {
  return arr.filter(function(item) {
    if (item) return item;
  })
}

function partition (arr, fn) {
  var trueArr = [];
  var falseArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) trueArr.push(arr[i])
    else falseArr.push(arr[i]);
  }

  return [trueArr, falseArr];
}

function intersection(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) newArr.push(arr1[i]);
    }
  }
  return newArr;
}


function flip(fn) {
  return function (...args) {
    args.reverse();
    return fn(...args);
  }
}

function once(fn) {
  var count = 0
  return function(...args) {
    count++;
    if (count > 1) return undefined;
    else return fn(...args);
  }
}

function Book(title, genre, pageCount, author, numChapters) {
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}

Book.prototype.toString = function () {
  return `${this.title}: ${this.pageCount}`;
};

Book.prototype.pagesPerChapter = function () {
  return this.pageCount / this.numChapters;
};


function Library(name, location, books) {
  this.name = name;
  this.location = location;
  this.books = [];
}

Library.prototype.addBook = function (book) {
  if (!Array.isArray(book)) this.books.push(book);
  else this.books.forEach(function (item) {
    this.books.push(item);
  });
  return this.books;
}

Library.prototype.listAuthors = function () {

}
