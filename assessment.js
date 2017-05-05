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

capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

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

function flip(fn) {
   return function(...innerArgs) {
      innerArgs.reverse();
        return fn(...innerArgs);
    }
}

function once(fn) {
  let counter = 0;
  //rest oeprator - make arguments to an array
    return function(...innerArgs) {
      counter ++;
      if (counter === 1) {
        return fn(...innerArgs);
        //return fn(...args); - spread to comma-separated arguments
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

function Library(name, location) {
  this.name = name;
  this.location = location;
  this.books = [];
}

Library.prototype.addBook = function(newbooks) {

  if (Array.isArray(newbooks)) {
    let newStatus = this.books.concat(newbooks);
    this.books = newStatus;
    return this.books;
  } else {
    this.books.push(newbooks);
    return this.books;
  }

}

Library.prototype.listAuthors = function(unique) {

  if (unique) {
    return this.books.reduce(function(prev, next) {
        if (!prev.includes(next.author)) {
            prev.push(next.author);
        }
        return prev;
    }, []);
  }

  return this.books.map(function(book){
       return book.author;
  });

}

Library.prototype.sumPages = function() {
  return this.books.reduce(function(prev, next) {
    prev += next.pageCount;
    return prev;
  },0);
}

Library.prototype.filterByAuthor = function(author) {
  return this.books.filter(function(book) {
    return book.author === author;
  });
}
