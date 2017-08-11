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
	var sArr = arr.sort((a,b) => (a > b));

	var count = 0;
	var max = 0;
	var retNum = 0;
	for(var i=0; i<arr.length-1; i++) {
		if(arr[i] === arr[i+1])
			count++;
		else {
			if(count > max) {
				max = count;
				retNum = arr[i];
			}
			count = 0;
		}
	}
	return retNum;
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function compact(arr) {
    var rArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]) {
            rArr.push(arr[i]);
        }
    }
    return rArr;
}

function partition(arr, cb) {
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    for(var i=0; i<arr.length; i++) {
        if(cb(arr[i])) {
            arr1.push(arr[i]);
        }
        else {
            arr2.push(arr[i]);
        }
    }
    arr3.push(arr1);
    arr3.push(arr2);
    return arr3;
}

function flip(fn) {

}

// function once(fn) {
// 	var count = 0;
// 	var _this = this;
// 	return function(...args) {
// 		if(_this(..args)) {
// 			count++;
// 		}
// 	}
// }

function intersection(arr1, arr2) {
	var rArr = [];
	for(var i=0; i<arr1.length; i++) {
		if(arr2.includes(arr1[i])) {
			rArr.push(arr1[i]);
		}
	}
	return rArr;
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

Library.prototype.sumPages = function() {
	var total = 0;
	for(var i=0; i<this.books.length; i++) {
		total += this.books[i].pageCount;

	}
	return total;
}

Library.prototype.filterByAuthor = function(b) {
	var rArr = [];
	for(var i=0; i<this.books.length; i++) {
		if(this.books[i].author === b)
			rArr.push(this.books[i]);
	}
	return rArr;
}