function frequency(arr, term) {
  var count = 0;
  arr.forEach(function(e){
    if (e === term) count++;
  });
  return count;
}

function flipCase(string, char) {
  var newStr = string.split('').map(function(e){
    if (e === char.toLowerCase()) return e.toUpperCase();
    if (e === char.toUpperCase()) return e.toLowerCase();
    return e;
  }).join('');

  return newStr;
}

function multiplyEvenNumbers(arr) { 
  return arr.filter((e) => e % 2 === 0)
    .reduce(function(sum, value){
      return sum * value;
    });
}

function mode(arr) {
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }
  return parseInt(Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})[0]);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function compact(arr) {
  return arr.filter(function(e){
    if (e) return e;
  });
}

function partition(arr, fn) {
  var truthy = [];
  var falsey = [];

  arr.forEach(function(e){
    if (fn(e)) truthy.push(e);
    if (!fn(e)) falsey.push(e);
  });
  
  return [truthy,falsey];
}

function intersection(arr1, arr2) {
  var newArr = [];

  // bad time complexity
  arr1.forEach(function(e){
    if (arr2.includes(e)) newArr.push(e);
  });

  return newArr;
}

function flip(fn) {
  return function() {
   var args = [...arguments].reverse();
   return fn.apply(fn, args);
  }
}

function once(fn) {
  var invoked = false;
  return function(){
    if (!invoked) {
      invoked = true;
      return fn.apply(fn, arguments);
    }
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
}
Book.prototype.pagesPerChapter = function() {
  return Math.round(this.pageCount / this.numChapters);
}

function Library(name, location, books) {
  this.name = name;
  this.location = location;
  this.books = [];
}
Library.prototype.addBook = function(book) {
  if (Array.isArray(book)) {
    this.books = this.books.concat(book);
  } else {
    this.books.push(book);
  }
  return this.books;
}
Library.prototype.listAuthors = function(unique = false) {
  var authors = this.books.map(function(book){
    return book.author;
  });
  if (unique) return Array.from(new Set(authors));
  return authors; 
}
Library.prototype.sumPages = function(){
  return this.books.reduce(function(a, b){
    return a + b.pageCount;
  }, 0);
}
Library.prototype.filterByAuthor = function(author) {
  return this.books.filter(function(book){
    if (book.author === author) return book;
  });
}







