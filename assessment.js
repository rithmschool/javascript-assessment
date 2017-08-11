// Write your solutions here:
function frequency(arr, searchTerm){
  return arr.reduce((acc, el) => {
    console.log(acc, el, searchTerm)
        if(searchTerm === el)
       acc++
    return acc;
  },0)
}


function flipCase(str, letter){
  var result = '';

  for(let i = 0; i< str.length; i++){
    if(letter.toUpperCase() === str[i]){
      result += letter.toLowerCase();
    } else if(letter.toLowerCase() === str[i]){
      result += letter.toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}


function multiplyEvenNumbers(arr){
  return arr.reduce((acc, el) => {
    if(el % 2 === 0){
       acc = acc*el
    }
    return acc;
  },1)
}

function mode(arr){
  var count = {};
  var largestCount = 0;
  var result =0;


  for(let i = 0; i< arr.length; i++){
    if(count[arr[i].toString()]){
        count[arr[i].toString()]++;
    } else {
      count[arr[i].toString()] = 1
    }
  }

  for(let key in count){
    if(count[key] > largestCount){
      result =  +key
      largestCount = count[key];
    }
  }

  return result;
}

function capitalize(str){

  return str[0].toUpperCase() + str.slice(1);
}

function compact(arr){
  var truthyArr =[];

    for(let i = 0; i< arr.length; i++){
        if(!!arr[i]){
          truthyArr.push(arr[i])
        }
    }


  return truthyArr
}

function partition(arr, cb){
  var truthyArr =[];
  var falseyArr =[];
    for(let i = 0; i< arr.length; i++){
        if(cb(arr[i])){
          truthyArr.push(arr[i])
        } else {
          falseyArr.push(arr[i])
        }
    }


  return [truthyArr, falseyArr]
}



function intersection(arr1,arr2){
  var count = {};
  var arr = arr1.concat(arr2);
  var result = [];

  for(let i = 0; i< arr.length; i++){
    if(count[arr[i].toString()]){
        count[arr[i].toString()]++;
    } else {
      count[arr[i].toString()] = 1
    }
  }

  for(let key in count){
    if(count[key] > 1){
      result.push(+key)
    }
  }

  return result;
}

function flip(fn){

  return function(a,b,c){
    return fn(c,b,a)
  }
}

function once(fn){
  var count = 0;
  console.log(count)
  return function (a, b){
    if(count === 0){
       count++
      return fn(a,b)
    }
  }
}


function Book(title, genre, pageCount, author, numChapters){
  this.title = title;
  this.genre = genre;
  this.pageCount = pageCount;
  this.author = author;
  this.numChapters = numChapters;
}


Book.prototype.toString = function(){
  return `${this.title}: ${this.pageCount}`;
}


Book.prototype.pagesPerChapter = function(){
  return Math.round(this.pageCount/this.numChapters);
}


function Library(name, location, books){
  this.name = name;
  this.location = location;
  this.books = [];
}


Library.prototype.addBook = function(book){
   this.books = this.books.concat(book)
   return this.books
}


book = new Book('Eloquent JavaScript', 'Programming', 212, 'Marijn', 21);
        book2 = new Book('JavaScript the Good Parts', 'Programming', 212, 'Dougie', 21);
        book3 = new Book('Infinite Jest', 'Books I might never finish', 1075, 'David', 1);
        book4 = new Book('Eloquent JavaScript 2nd Edition', 'Programming', 252, 'Marijn', 20);
library = new Library('Rithm School Library', '3338 17th St');


Library.prototype.listAuthors = function (arrBook){
 return arrBook.reduce((acc, el) => {
    acc.push(el.author)
    return acc
  }, [])
}

console.log(library.listAuthors([book,book2,book3]))


Library.prototype.sumPages = function (arrBook){
 return arrBook.reduce((acc, el) => {
     acc += el.pageCount;
    return acc;
  }, 0)
}




Library.prototype.filterByAuthor = function (arrBook){
 return arrBook.filter(el => {
    return el.author;
  })
}

console.log(library.filterByAuthor([book,book2,book3,book4]))












