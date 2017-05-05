// Write your solutions here:

/*
This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.
*/

function frequency(arr, searchTerm){
    return arr.reduce(function(acc, el){
        if (el === searchTerm){
            acc++;
        }
        return acc;
    }, 0);
}

/*
This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.
*/
function flipCase(str, letter){
    var newStr = "";
    for (var i = 0; i < str.length; i++){
        if (str[i] === letter.toUpperCase()){
            newStr += str[i].toLowerCase();
        } else if (str[i] === letter.toLowerCase()){
            newStr += str[i].toUpperCase();
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

/*This function accepts an array of numbers and returns the product of all even numbers in the array.*/
function multiplyEvenNumbers(arr){
    return arr.reduce(function(acc, el){
        if (el % 2 === 0){
            acc *= el;
        }
        return acc;
    }, 1)
}

/*This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique.*/

function mode(arr){
    var arrObj = arr.reduce(function(acc, el){
        if (acc[el] === undefined){
            acc[el] = 1;
        } else {
            acc[el]++;
        }
        return acc;
    }, {});
    var maxTimes;
    var maxKey;
    for (var key in arrObj){
        if (maxTimes === undefined){
            maxKey = key;
            maxTimes = arrObj[key];
        } else if (arrObj[key] > maxTimes){
            maxKey = key;
            maxTimes = arrObj[key];
        }
    }
    return Number(maxKey);
}

/*This function accepts a string and returns the same string with the first letter capitalized.*/
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

/*This function accepts an array and returns an array of values that are truthy values.*/
function compact(arr){
    return arr.filter(function(el){
        return el;
    })
}

/*
This function accepts an array and a callback function (which you can assume returns true or false). The function should iterate over each element in the array and invoke the callback function at each iteration. If the result of the callback function is true, the element should go into one array; if it's false, the element should go into another array. When it's finished, partition should return both arrays inside of one larger array.
*/
function partition(arr, cb){
    return arr.reduce(function(acc, el){
        if (cb(el)){
            acc[0].push(el);
        } else {
            acc[1].push(el);
        }
        return acc;
    }, [[],[]]);
}

/*This function should accept two arrays and return an array with the values that are the same in each array.*/
function intersection(arr1, arr2){
    return arr1.filter(function(el){
        return arr2.includes(el);
    })
}

/*This function should return another function with the arguments switched.*/
function flip(fn){
    return function(...args){
        var argsReversed = args.reverse();
        return fn.apply(this, argsReversed);
    }
}

/*This function accepts a function and returns a new function that can only be invoked once. If the function is invoked more than once, it should return undefined*/
function once(fn){
    var times = 0;
    return function(...args){
        if (times === 0){
            times++;
            return fn.apply(this, args);
        }
    }
}


/************************** Part II *******************************/

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
    return Math.round(this.pageCount / this.numChapters);
}

function Library(name, location){
    this.name = name;
    this.location = location;
    this.books = [];
}

/*As a bonus, ensure that these books that get added are objects created from the Book constructor function, and make sure that no duplicate books are added to the library. (You'll need to write the tests for these features too!)*/
Library.prototype.addBook = function(books){
    this.books = this.books.concat(books);
    return this.books;
}

Library.prototype.listAuthors = function(unique=false){
    if (unique){
        var newArr = [];
        for (var i = 0; i < this.books.length; i++){
          if (!(newArr.includes(this.books[i].author))){
            newArr.push(this.books[i].author);
          }
        }
        return newArr;
    }
        //NOT SURE WHY THIS METHOD DIDN'T WORK
        // return this.books.reduce(function(el){
        //     if (!acc.includes(el.author)){
        //         acc.push(el.author);
        //     }
        //     return acc;
        // },[]);
    return this.books.map(function(el){
        return el.author;
    });
}

Library.prototype.sumPages = function(){
    return this.books.reduce(function(acc, el){
        acc += el.pageCount;
        return acc;
    },0)
}

Library.prototype.filterByAuthor = function(authName){
    return this.books.filter(function(el){
        return el.author === authName
    });
}
