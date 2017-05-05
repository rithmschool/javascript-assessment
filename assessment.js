// Write your solutions here:

// Part 1

function frequency(array, searchTerm) {
	// returns the number of times the searchTerm appears in the array
	// searchTerm is a primitive
	var counter = 0;
	for (var i=0; i<array.length; i++) {
		if (array[i] === searchTerm) {
			counter++;
		}
	}
	return counter;
}

function flipCase(str, letter) {
	// reverses the case of all occurances of the letter in the string
	var arr = str.split("");
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		if(arr[i].toLowerCase() === letter.toLowerCase()) { // same letter
			if(arr[i].toLowerCase() === arr[i]) {
				// it's lower case
				newArr.push(arr[i].toUpperCase());
			} else newArr.push(arr[i].toLowerCase());
		} else {
			    newArr.push(arr[i].toLowerCase());
		}
	}
	return newArr.join("");
}

function multiplyEvenNumbers(arr) {
	// accepts array of numbers
	// returns product of all even numbers in the array
	var newArr = arr.slice();
	return newArr.filter(function(val){
	    return val % 2 === 0;
	}).reduce(function(acc,next){
	    return acc*next;
	},1);
}


function mode(arr) {
	// accepts an array of numbers
	// returns the most frequent number in the array
	// there will only be one unique number that is most frequent
    var obj = {};
    for (var i=0; i<arr.length; i++) {
        if(arr[i] in obj) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    var max = 0, mode;
    for(var keys in obj) {
        if(obj[keys] > max) {
            max = obj[keys];
            mode = keys;
        }
    }
    return +mode; 
}

function capitalize(str) {
	// accepts a string, returns it with first letter capitalized
	return str[0].toUpperCase() + str.substring(1);
}

function compact(arr) {
	// accepts an array
	// returns an array of values that are truthy values
	return arr.filter(function(val) {
		return !!val;
	})
}

function partition(arr, func) {
	// function returns true or false
	// iterate over each element in the array
	// invoke the callback function at each iteration
	// if callback returns true, the element should go into one array
	// if false, go into the other array
	// petition should return both arrays inside of one larger array
	var arrTrue = [];
	var arrFalse = [];

	for(var i=0; i<arr.length; i++) {
	    if(func(arr[i])) {
	        arrTrue.push(arr[i]);
	    } else {
	        arrFalse.push(arr[i]);
	    }
	}
	return [arrTrue,arrFalse]
}

function intersection(arr1,arr2) {
	// return an array with the values that are in both arrays
	var newArr = [];
	for (var i=0; i<arr1.length; i++) {
	    if(arr2.indexOf(arr1[i]) > -1) {
            newArr.push(arr1[i]);
	    }
	}
	return newArr;
}

function flip(fn) {
	// should return another function with its arguments switched
	return function (...args){
        var argsRev = args.reverse();
        return fn(...argsRev);
	}
}


function once(fn) {
	// accepts a function
	// returns a new function that can only be invoked once
	// if invoked more than once, return undefined
	var that = this;

    return function (...args) {
    	if (!that) return fn.apply(that,args);
	    else return undefined;
    }

}


// Part 2

// Create a book constructor function

var Book = function(title, genre, pageCount, author, numChapters) {
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters;
}

Book.prototype.toString = function() {
    return `${this.title}: ${this. pageCount}`;
}

Book.prototype.pagesPerChapter = function() {
    return Math.round(this.pageCount / this.numChapters);
}

// Create a library constructor function

var Library = function(name, location, books=[]) {
	this.name = name;
	this.location = location;
	this.books = books; // empty array by default
}

Library.prototype.addBook = function(book) {
	// check if book or array of books
	// add to the library's books array
	// return the new list of books
	// bonus - ensure that books added are objects from the book constructor function
	// bonus - make sure no duplicate books are added to the library

	// each book is an object (instance) of the book class
	// "book" is either a single object or an array of objects
	if(Array.isArray(book)) {
		for (var i=0; i<book.length; i++) {
			this.books.push(book[i]);
		}
	} else {
		// add single book
		this.books.push(book);
	}
	return this.books;
}

Library.prototype.listAuthors = function(...unique) {
	// returns an array of the names of the authors of
	// each book in teh library
	// if you pass in the boolean true, it should return a list of unique authors
	// from the list of books
	var authArr = [];
	for (var i=0; i<this.books.length; i++) {
		authArr.push(this.books[i].author);
	}
	if(arguments.length === 0) {
		return authArr;
	} else {
		// can't sort because they want us to preserve the author order
	    var arrUnique = [];
	    var current;
	    for (var i=0; i<authArr.length; i++) {
	        current = authArr[i];
	        if(!arrUnique.includes(current)) {
	            arrUnique.push(current);
	        } 
	    }
	    return arrUnique;
	}
}

Library.prototype.sumPages = function() {
	var sum = 0;
	for (var i=0; i<this.books.length; i++) {
		sum += this.books[i].pageCount;
	}
	return sum;
}

Library.prototype.filterByAuthor = function(name) {
	// returns array of books with the same author
	var arr = [];
	for (var i=0; i<this.books.length; i++) {
		if(this.books[i].author === name) {
			arr.push(this.books[i]);
		}
	}
	return arr;
}


