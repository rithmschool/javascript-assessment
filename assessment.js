// Write your solutions here:
function frequency(array, value) {

  var counter = 0;

  array.forEach(function(x) {
    if (x === value) {
      counter++;
    }
  });

  return counter;

}

function multiplyEvenNumbers(array) {

  var sum = 1;

  array.forEach(function(x) {
    if (x % 2 === 0) {
      sum *= x;
    }
  });

  return sum;
}

function mode(collection) {

  var obj = {};

  var winner = 0;

  collection.forEach(function(x) {
    if (obj[x]) {
      obj[x]++;
    } else {
      obj[x] = 1;
    }
  });

  for (var key in obj) {
    if (obj[key] > winner) {
      winner = key;
    }
  }

  return parseInt(winner);

}

function capitalize(str) {
  var name = str.split('');
  name[0] = name[0].toUpperCase();

  return name.join('');
}

function compact(array) {
  var filtered = [];

  for (var i = 0; i < array.length; i++) {
    if (!!array[i] === true) {
      filtered.push(array[i]);
    }
  }

  return filtered;

}

function Book(title, genre, pageCount, author, numChapters) {
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}

Book.prototype.toString = function() {
  return this.title + ":" + " " + this.pageCount;
}

Book.prototype.pagesPerChapter = function() {
  return Math.round((this.pageCount / this.numChapters));
}
