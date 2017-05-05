///////////////////////////////////////////////////////////
//// Shriya Nevatia Javascript Assessment - Fri May 5 /////
///////// Had to look up info for flip(), once(), /////////
//// and BONUS that objects are from Book constructor /////
////////// more details noted by those functions //////////
//////// everything else did "the right way", haha ////////
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
////////////////////////// PART 1 /////////////////////////
///////////////////////////////////////////////////////////

function frequency (arr, n) {
	var counter = 0;
	for (var i = 0; i < arr.length; i++) {
		if (n === arr[i]) {
			counter++;
		}
	}
	return counter;
}

// don't remember function to switch case so doing this if-else
function flipCase(str, c) {
	str = str.split("");
	for (var i = 0; i < str.length; i++) {
		if (c.toUpperCase() === str[i].toUpperCase()) {
			if (str[i] === str[i].toUpperCase()) {
				str[i] = str[i].toLowerCase();
			} else {
				str[i] = str[i].toUpperCase();
			}
		}
	}
	return str.join("");
}

function multiplyEvenNumbers(arr) {
	var product = 1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			product = product * arr[i];
		}
	}
	return product;
}

function mode(arr) {
	var freq = {};
	for (var i = 0; i < arr.length; i++) {
		if (freq[arr[i]] !== undefined) {
			freq[arr[i]] = 1;
		} else {
			freq[arr[i]]++;
		}
	}
	var maxVal = 0;
	var savedKey;
	for (var key in freq) {
		if (freq[key] > maxVal) {
			maxVal = freq[key];
			savedKey = key;
		}
	}
	return parseInt(savedKey);
}

function capitalize(str) {
	str = str.split("");
	str[0] = str[0].toUpperCase();
	return str.join("");
}

function compact(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function partition(arr, cb) {
	var returnArr = [[],[]];
	for (var i = 0; i < arr.length; i++) {
		if (cb(arr[i]) === true) {
			returnArr[0].push(arr[i]);
		} else {
			returnArr[1].push(arr[i]);
		}
	}
	return returnArr;
}

function intersection(arr1, arr2) {
	var intersect = [];
	var longer, shorter;

	for (var i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) > 0 && intersect.indexOf(arr1[i]) < 0) {
			intersect.push(arr1[i]);
		}
	}

	for (var i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) > 0 && intersect.indexOf(arr2[i]) < 0) {
			intersect.push(arr2[i]);
		}
	}
	return intersect;
}

///////////////////////////////////////////////////////////
///////////////////// flip & once /////////////////////////
///////////////////////////////////////////////////////////
// for these two, I had to look up call/apply/bind rules //
// I wrote everything I remembered in the comments copy ///
//////// above the working/solved function below it ///////
///////////////////////////////////////////////////////////

// *** flip attempt ***
// function flip(fn) {

// 	// apply takes in as parameters: 1) new "this", 2) an array of args
// 	// call takes in as parameters: 1) new "this", 2-infinity) all the args
// 	// bind returns partially applied function 

// 	// how do I access the arguments passed in to fn...?
// 	// tried flip(fun(...args)) but that was wrong

// 	var newFun = fn.apply(this, args, function() {
// 		args = args.reverse();
// 	});
// 	return newFun;
// }

function flip(fn) {

}

// *** once attempt ***
// function once(fn) {

// 	// remember we did this kind of thing 
// 	// keep track of a counter, only allow the function to run "counter" times
// 	// after using "bind" to partially apply it
// 	// but not sure how to actually do it :( 

// 	var newFun = fn.bind(this, function() {

// 	});
// 	return newFun;
// }

function once(fn) {

}

///////////////////////////////////////////////////////////
////////////////////////// PART 2 /////////////////////////
///////////////////////////////////////////////////////////

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

function Library(name, location) {
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function(bookArr) {
	// write check that created from Book constructor --> had to look this up too; can't use "typeof"
	if (Array.isArray(bookArr)) {
		for (var i = 0; i < bookArr.length; i++) {
			if (this.checkUnique(bookArr[i])) {
				this.books.push(bookArr[i]);
			} 
		}
	} else {
		if (this.checkUnique(bookArr)) {
			this.books.push(bookArr);
		}
	}
	return this.books;
}

// BONUS: check for duplicates
Library.prototype.checkUnique = function(book) {
	for (var i = 0; i < this.books.length; i++) {
		if (this.books[i].title === book.title && this.books[i].author === book.author) {
			return false;
		}
	}
	return true;
}

Library.prototype.listAuthors = function(bool = undefined) {
	var authors = [];
	for (var i = 0; i < this.books.length; i++) {
		if ((bool === true) && (authors.indexOf(this.books[i].author) < 0)) {
			authors.push(this.books[i].author);
		} else if (bool !== true) {
			authors.push(this.books[i].author);
		}
	}
	return authors;
}

Library.prototype.sumPages = function() {
	var totalPgs = 0;
	for (var i = 0; i < this.books.length; i++) {
		totalPgs += this.books[i].pageCount;
	}
	return totalPgs;
}

Library.prototype.filterByAuthor = function(name) {
	var authorArr = [];
	for (var i = 0; i < this.books.length; i++) {
		if (this.books[i].author === name) {
			authorArr.push(this.books[i]);
		}
	}
	return authorArr;
}