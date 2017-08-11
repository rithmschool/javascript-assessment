// Write your solutions here:

/* jshint esversion: 6 */

function frequency(array, search) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === search) count++;
  }

  return count;
}

// I know I can do this - should probably start over
function flipCase(string, letter) {
  // check to see if each letter in the string is the same as the search letter
  // if so, if the letter in the string is capitalized, change to lowercase and append
  // if the letter in the string is lower case, change to uppercase and append
  // append all other chars as they are
  var flipped = '';

  for (var i = 0; i < string.length; i++) {
    var temp = string[i];

    if (string[i].toLowerCase() === letter) {
      flipped += string[i].toUpperCase();
    } else if (string[i] === letter.toUpperCase()) {
      flipped += string[i].toLowerCase();
    } else flipped += string[i];
  }

  return flipped;
}


function mode(array) {
  var tracker = {};

  for (var i = 0; i < array.length; i++) {
    if (tracker[array[i]]) {
      tracker[array[i]]++;
    } else {
      tracker[array[i]] = 1;
    }
  }

  var highest = 0;
  var result;

  for (var key in tracker) {
    if (tracker[key] > highest) {
      highest = tracker[key];
      result = key;
    }
  }

  return Number(result);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function compact(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i]) result.push(array[i]);
  }

  return result;
}

function partition(array, cb) {
  var trues = [];
  var falses = [];

  for (var i = 0; i < array.length; i++) {
    if (cb(array[i])) trues.push(array[i]);
    else falses.push(array[i]);
  }

  return [trues, falses];
}

function intersection(array1, array2) {
  var result = [];

  for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) result.push(array1[i]);
  }

  return result;
}

function flip(cb) {
  // get the args from the callback - not sure how to access them from cb
  var cbArgs = [].slice.call(arguments);

}

function once(cb) {
  // I'm still not comfortable with using callbacks
  var count = 0;
  return function() {
    count++;
    if (count <= 1) cb();
  };
}

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
  return Math.floor(this.pageCount / this.numChapters);
};

function Library(name, location, books = []) {
  this.name = name;
  this.location = location;
  this.books = books;
}

Library.prototype.addBook = function(addition) {
  if (addition instanceof Book && !this.books.includes(addition)) {
    this.books.push(addition);
  } else if (Array.isArray(addition)) {
    for (var i = 0; i < addition.length; i++) {
      if (!this.books.includes(addition[i])) this.books.push(addition[i]);
    }
  }

  return this.books;
};

Library.prototype.listAuthors = function(unique) {
  var authors = [];

  for (var i = 0; i < this.books.length; i++) {
    if (unique) {
      if (!authors.includes(this.books[i].author)) {
        authors.push(this.books[i].author);
      }
    } else authors.push(this.books[i].author);
  }

  return authors;
};

Library.prototype.sumPages = function() {
  var total = 0;

  for (var i = 0; i < this.books.length; i++) {
    total += this.books[i].pageCount;
  }

  return total;
};

Library.prototype.filterByAuthor = function(authorName) {
  var result = [];

  for (var i = 0; i < this.books.length; i++) {
    if (this.books[i].author === authorName) {
      result.push(this.books[i]);
    }
  }

  return result;
};








// end
