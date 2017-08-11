// Write your solutions here:

function frequency(arr, val){
	var counter = 0;
	for(var i = 0; i < arr.length; i++){
		if(val === arr[i]){
			counter++;
		}
	}
	return counter;
}


function flipCase(str, letter){
	var strArr = str.split("");
	for(var i = 0; i < strArr.length; i++){
		if(strArr[i] === letter.toLowerCase()){
			strArr[i] = letter.toUpperCase()
		} else if(strArr[i] === letter.toUpperCase()) {
			strArr[i] =letter.toLowerCase();
		}
	}
	return strArr.join("");
}

function multiplyEvenNumbers(arr){
	return arr.reduce(function(acc,next){
		if(next % 2 === 0){
			acc = acc * next ;
		}
		return acc;
	},1)
}

function mode(arr){
	var obj = {};
	for(var i = 0; i < arr.length; i++){
		if(obj[arr[i]]){
			obj[arr[i]]++;
		} else {
			obj[arr[i]] = 1
		}
	}
	var count = 0;
	for(var key in obj){
		if(obj[key] > count){
			count = obj[key];
		}
	}	
	for(var k in obj){
		if(obj[k] === count){
			return +k;
		}
	}
}

function capitalize(str){
	return str[0].toUpperCase().concat(str.slice(1));
}

function compact(arr){
	return arr.filter(function(val){
		return val;
	})
}

function partition(arr, cb){
	var trueArr = [];
	var falseArr = [];
	var resultArr = []
	for(var i = 0; i < arr.length; i++){
		if(cb(arr[i])){
			trueArr.push(arr[i]);
		} else {
			falseArr.push(arr[i])
		}
	}	
	resultArr.push(trueArr);
	resultArr.push(falseArr);
	return resultArr;
}

function intersection(arr1, arr2){
	var newArr = [];
	return arr1.reduce(function(acc,next){
		arr2.forEach(function(val){
			if(val === next){
				acc.push(val);
			}
		})
		return acc;
	},[])	
}


function flip(fn){
	var outerArgs = [].slice.call(arguments,1);
	return function(){
		var innerArgs = [].slice.call(arguments);
		var allArgs = outerArgs.concat(innerArgs)
		allArgs.reverse();
		return fn.apply(this, allArgs);
	}
}

function once(fn){
	var max = 0;
	return function(){
		max++;
		if(max > 1){
			return undefined;
		}
		return fn.apply(this, arguments)
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
	return Math.round(this.pageCount / this.numChapters);
}

// Each library should have a name, location, and books (which should be initialized as an empty array)
// Each library should have a method called addBook, which accepts either a single book or an array of books and adds them to the library's books array. This method should return the new list of books. As a bonus, ensure that these books that get added are objects created from the Book constructor function, and make sure that no duplicate books are added to the library. (You'll need to write the tests for these features too!)
// Each library should have a method called listAuthors, which returns an array of the names of the authors of each book in the library. Also, if you pass in the boolean true to listAuthors, it should return a list of unique authors from the list of books: no duplicates allowed!
// Each library should have a method called sumPages, which returns the total number of pages for each book in the array of books.
// Each library should have a method called filterByAuthor, which accepts one parameter (a name of an author) returns an array of books that have the same author as the name of the author parameter.

function Library(name, location, books){
	this.name = name;
	this.location = location;
	this.books = []
}

Library.prototype.addBook = function(book){
	return this.books.concat(book);
}

Library.prototype.listAuthors = function(){
	
	
}

Library.prototype.sumPages = function(){
	
}

Library.prototype.filterByAuthor = function(author){
	
}


