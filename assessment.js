// Write your solutions here:
function frequency(arr,str) {
	var count = 0;
	for(var i=0; i<arr.length; i++) {
		if(arr[i] === str)
			count++;
	}
	return count;
}

function flipCase(str, char) {
	for(var i=0; i<str.lenght; i++) {
		if(str[i] === char) {

		}
	}
}

function multiplyEvenNumbers(arr) {
	var total = 1;
	for(var i=0; i<arr.length; i++) {
		if (arr[i] % 2 === 0) {
			total *= arr[i];
		}
	}
	return total;

	// return arr.reduce(function(acc, value) {
	// 	if(value % 2 === 0)
	// 		return acc * value;
	// }, 1);
}


function mode(arr) {
	var obj = {};
	var count = 0;
	for(var i=0; i<arr.length; i++) {
		if (!(arr[i] in obj)) {
			obj[arr[i]] = 1;
		}
	}
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

// function flip(fn) {
// 	var args = [].slice.call(fn.arguments);

// }

// function once(fn) {
// 	var count = 0;
// 	//if(fn)
// }

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

Book.prototype.pagesPerChapter = function(b) {
	return Math.round(this.pageCount / this.numChapters);
}

function Library(name, location, books) {
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function(b) {
	if (b instanceof Book) {
		this.books.push(b);
	}

	if(b instanceof Array) {
		this.books = b.reduce(function(a, b) {
			return a.concat(b);
		}, this.books);
	}

	return this.books;
}

Library.prototype.listAuthors = function(b) {
	var rArr = [];

	if(b) {
		for(var i=0; i<this.books.length; i++) {
			if(!rArr.includes(this.books[i].author))
				rArr.push(this.books[i].author);
		}
	}
	else {
		for(var i=0; i<this.books.length; i++)
			rArr.push(this.books[i].author);
	}

	return rArr;
}

Library.prototype.sumPages = function(b) {
	
}

Library.prototype.filterByAuthor = function(b) {
	
}







