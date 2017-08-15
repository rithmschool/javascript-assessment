// Write your solutions here:

var log = console.log;
// JavaScript Assessment
// Part I

// In this part you will be implementing the following functions in the assessment.js
//section:

function frequency(array, target) {
  return array.reduce(function(acc, curr) {
    return curr === target ? ++acc : acc;
  }, 0);
}

// This function accepts an array and a searchTerm (this will always be a primitive value)
//and returns the number of times the searchTerm appears in the array.

// frequency([1,2,3,4,4,4], 4); // 3
// frequency([true, false, true, true], false); // 1

// flipCase

//char 65 - 122
// ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"].forEach((i) => log(i.charCodeAt()))
function flipCase(string, target){
  var str = "";
    for(var i = 0; i < string.length; i++){
      if(target.toLowerCase() === str[i].toLowerCase()) {
        if(str[i].charCodeAt(0) > 96 {
          newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
    } else {
      newStr += str[i];
    }
  return newStr;
}

// This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.

// flipCase("Hardy har har", "h"); // "hardy Har Har"
function multiplyEvenNumbers(array) {
  return array.reduce(function(acc, curr) {
    if (isEven(curr)) {
      acc *= curr;
    }
    return acc;
  }, 1);
}

// This function accepts an array of numbers and returns the product of all even numbers in the array.

// multiplyEvenNumbers([2,3,4,5,6]); // 48
function mode(arr) {
  var result = 0; 
  var k  = arr.reduce(function(acc, curr) {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }).keys(k).forEach(function(x) {
  	if(Math.max(x) > result){
  		result = Math.max(x)
  	}
  })
  return result; 
}

// multiplyEvenNumbers([2,3,4,5,6]); // 48

// This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique.
//mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4]) // 4
function capitalize(str) {
  return str[0].toUpperCase().concat(str.slice(1));
}

// This function accepts a string and returns the same string with the first letter capitalized.

// capitalize("tim"); // "Tim"
// capitalize("matt"); // "Matt"
function compact(arr) {
  return arr.filter(x => x); // body...
}

// This function accepts an array and returns an array of values that are truthy values.

// compact([0,1,2,"",NaN, false, undefined, null, "All done"]); // [1,2, "All done"]
function partition(arr, predicate) {
  return arr.reduce(
    (acc, curr) => {
      predicate(curr) ? acc[0].push(curr) : acc[1].push(curr);
      return acc;
    },
    [[], []]
  );
}

// This function accepts an array and a callback function (which you can assume returns true or false).
// The function should iterate over each element in the array and invoke the callback function at each iteration. If the result of the callback function is true, the element should go into one array; if it's false, the element should go into another array. When it's finished, partition should return both arrays inside of one larger array.

function isEven(num) {
  return num % 2 === 0;
}

// partition([1,2,3,4], isEven); // [[2,4],[1,3]]

// partition(["a","b","b","c"], function(letter){
//     return letter === "b";
// }) // [["b", "b"], ["a","c"]]
function intersection(a1, a2) {
  return a1.reduce((acc, curr) => {
    if (a2.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
// // This function should accept two arrays and return an array with the values that are the same in each array.
// // intersection([1,2,3], [2,3,4]); // [2,3]

function flip(func) {
  return function(...args) {
    return func(...args.reverse());
  };
}

// This function should return another function with the arguments switched.

// function subtract(a,b,c){
//     return a-b-c;
// }

// subtract(10,5,2); // 3

// flipped = flip(subtract);

// flipped(10,5,2); // -13
function once(fn) {
    var flag = true;
    return () => {
        if (flag) {
            flag = false;
            return fn(...arguments);
        };
    };
}


// This function accepts a function and returns a new function that can only be invoked once. If the function is invoked more than once, it should return undefined.

// function add(a,b){
//     return a+b;
// }

// var oneAddition = once(add);

// oneAddition(2,2); // 4
// oneAddition(2,2); // undefined
// oneAddition(12,200); // undefined

// Part II
// For this portion you will be creating two constructor functions:

// // Book
function Book(title, genre, pageCount, author, numChapters) {
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}

Book.prototype.toString = function(){
    return this.title + ": " + this.pageCount;
};

Book.prototype.pagesPerChapter = function(){
    return Math.trunc(this.pageCount / this.numChapters);
};
// Each book should have a title, genre, pageCount, author and numChapters.
// Each book should have a method called toString which returns a string with the title of the book,
//a colon, and the number of pages
// Each book should have a method called pagesPerChapter which returns the average number of pages per chapter, rounded to the nearest whole number
function Library(name, location, books) {
  this.name = name;
  this.location = location;
  this.books = [];
}

// Each library should have a name, location, and books (which should be initialized as an empty array)
// Each library should have a method called addBook,
// which accepts either a single book or an array of books and adds them to the library's books array. This method should return the new list of books. As a bonus, ensure that these books that get added are objects created from the Book constructor function, and make sure that no duplicate books are added to the library. (You'll need to write the tests for these features too!)
// Each library should have a method called listAuthors, which returns an array of the names of the authors of each book in the library. Also, if you pass in the boolean true to listAuthors, it should return a list of unique authors from the list of books: no duplicates allowed!
// Each library should have a method called sumPages, which returns the total number of pages for each book in the array of books.
// Each library should have a method called filterByAuthor, which accepts one parameter (a name of an author) returns an array of books that have the same author as the name of the author parameter.


Library.prototype.addBook = function(list){
    function check(book){
        return book instanceof Book && this.books.includes(book);
    }
   if(Array.isArray(list)){
        this.books = this.books.concat(list.filter(determineIfAcceptable, this));
    } else if(determineIfAcceptable.call(this,list)) {
        this.books = this.books.concat(list);
    }
    return this.books;
};

Library.prototype.listAuthors = function(author){
    if(author) {
      return this.books.reduce((acc, curr) => {
        if(acc.includes(curr.author)){
          acc.push(curr.author);
        }
        return acc; 
      }                             
    }, []);
};

Library.prototype.sumPages = function(){
    return this.books.reduce((acc,curr) => {
    acc += curr.pageCount
    return acc;
    },0);
};

Library.prototype.filterByAuthor = function(name){
    return this.books.filter((book) => {
      return book.author === name;
    });
};

