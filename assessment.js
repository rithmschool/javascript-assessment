// Write your solutions here:

//Part 1

function frequency(array,term) {
	return array.reduce(function(acc,value) {
		if (value === term) {
			acc++;
		}
		return acc;
	},0)
}

function flipCase(string, value) {
	if (string.length === 0) {
		return "";
	}
	if (string[0] === value.toUpperCase()) {
		return string[0].toLowerCase() + flipCase(string.substring(1), value);
	} else if (string[0] === value.toLowerCase()) {
		return string[0].toUpperCase() + flipCase(string.substring(1), value);
	}
	return string[0] + flipCase(string.substring(1), value);
}

function multiplyEvenNumbers(array) {
	return array.reduce(function(acc,value) {
		if (value % 2 === 0) {
			return acc * value;
		} 
		return acc;
	}, 1)
}

function mode(array) {
	var holdingObj = {};
	var highCounter = 0;
	var highNum = 0;
	array.forEach(function(value) {
		holdingObj[value] === undefined ? holdingObj[value] = 1 : holdingObj[value]++;
	})
	for (var prop in holdingObj) {
		if (holdingObj[prop] > highCounter) {
			highCounter = holdingObj[prop];
			highNum = prop;
		}
	}
	return parseInt(highNum);
}

function capitalize(string) {
	return string[0].toUpperCase() + string.substring(1);
}

function compact(array) {
	return array.filter(function(value) {
		return value;
	})
}

function partition(array, fn) {
	return array.reduce(function(acc, value) {
		if (fn(value)) {
			acc[0].push(value);
			return acc;
		} else {
			acc[1].push(value);
			return acc;
		}
	}, [[],[]])
}

function intersection(array1,array2) {
	return array1.filter(function(value) {
		return array2.indexOf(value) !== -1;
	}) ;
}

function flip(fn) {
	return function(...args) {
		return fn.apply(this,args.reverse());
	}
}

function once(fn) {
	let counter = false;
	return function(...args) {
		if (counter) {
			return undefined;
		} else {
			counter = true;
			return fn.apply(this,args);
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
	return Math.floor(this.pageCount/this.numChapters);
}

function Library (name, location) {
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function(value) {
	if (Array.isArray(value)) {
		this.books = this.books.concat(value);
	} else {
		this.books.push(value);
	}
	return this.books;
}

Library.prototype.listAuthors = function(value) {
	if (value === undefined) {
		return this.books.reduce(function(acc,value) {
			acc.push(value.author);
			return acc;
		},[])
	} else if (value === true) {
		return this.books.reduce(function(acc,value) {
			if(acc.indexOf(value.author) === -1) {
				acc.push(value.author);
			}
			return acc;
		},[])
	}
}

Library.prototype.sumPages = function() {
	return this.books.reduce(function(acc,value) {
		return acc + value.pageCount;
	},0)
}

Library.prototype.filterByAuthor = function(author) {
	return this.books.filter(function(value) {
		return value.author === author;
	})
}