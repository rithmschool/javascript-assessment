//Part I
// Write your solutions here:

// This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.
function frequency(arr,search) {
	var count = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === search) {
			count++
		}
	}
	return count
}


// This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.
function flipCase(string,letter) {
	var strArr = string.split("")
	for (var i = 0; i < strArr.length; i++) {
		if (strArr[i].toLowerCase() === letter.toLowerCase()) {
			if (strArr[i] === letter.toLowerCase()) { //how to check for upper?
				strArr[i] = strArr[i].toUpperCase()
			} else {
				strArr[i] = strArr[i].toLowerCase()
			}
		}
	}
	return strArr.join("")
}


// This function accepts an array of numbers and returns the product of all even numbers in the array.
function multiplyEvenNumbers(arr) {
	var evens = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] %2 === 0) {
			evens.push(arr[i])
		}
	}

	return evens.reduce(function(acc, el) {
		return acc * el; 
	});

}



// This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique.
function mode(arr) {
	var sorted = arr.sort(function(a,b) {return a > b}) //assuming not sorted???
	var count = 1
	var high = 0
	var winner = undefined

	for (var i = 0; i < sorted.length; i ++) {
		if (sorted[i] === sorted[i+1]) {
			count ++
		} else {
			if (count > high) {
				high = count
				winner = sorted[i]
				count = 1
			} else {
				count = 1
			}
		}
	}
	return winner
}


// This function accepts a string and returns the same string with the first letter capitalized.
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}


//This function accepts an array and returns an array of values that are truthy values.
function compact(arr) {
	var truthyArr = []
	arr.forEach(function(el) {
		if (el) {
			truthyArr.push(el)
		}
	})
	return truthyArr;
}

//This function accepts an array and a callback function (which you can assume returns true or false). 
// The function should iterate over each element in the array and invoke the callback function at each iteration. 
// If the result of the callback function is true, the element should go into one array; if it's false, the element should go into another array. 
// When it's finished, partition should return both arrays inside of one larger array.

function partition(arr,fn) {
	var trueArr = []
	var falseArr = []
	var answer = []

	for (var i = 0; i < arr.length; i ++) {
		if (fn(arr[i])) {
			trueArr.push(arr[i])
		} else {
			falseArr.push(arr[i])
		}
	}

	answer.push(trueArr)
	answer.push(falseArr)
	return answer

}


// This function should accept two arrays and return an array with the values that are the same in each array.
function intersection(arr1,arr2) {
	var arrSame = []

	arr1.forEach(function(el) {
		if (arr2.includes(el)) {
			arrSame.push(el)
		}
	})

	return arrSame
}


//This function should return another function with the arguments switched.


function flip(fn) {
	return function(...Args) {
		var switched = []
		for (var i = Args.length - 1; i >=0; i--) {
			switched.push(Args[i])
		}
		return fn(...switched);
	}
}



// This function accepts a function and returns a new function that can only be invoked once. If the function is invoked more than once, it should return undefined.
function once(fn) {
	var count = 0
	return function(...Args) {
		if (count === 1) {
			return undefined
		} else {
			count++
			return fn(...Args)

		}
	}
}




// Part II

//Book

function Book(title, genre, pageCount, author, numChapters) {
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters;

}

Book.prototype.toString = function() {
	return `${this.title}: ${this.pageCount}`
}

Book.prototype.pagesPerChapter = function() {
	return Math.floor(this.pageCount/this.numChapters)
}



//Library
function Library(name, location, books=[]) {
	this.name = name;
	this.location = location;
	this.books = books;
}

Library.prototype.addBook = function(...Args) {
	for (var i = 0; i < Args.length; i++) {
		this.books.push(Args[i])
	}
	if (Array.isArray(this.books[0])) {
		return this.books[0]
	} else {
		return this.books
	}
}




Library.prototype.listAuthors = function(bool) {
	var bookArr = this.books[0]
	var authors = []

	
	bookArr.forEach(function(el) {
		if (bool === true) {
			if (!(authors.includes(el.author))) {
				authors.push(el.author)
			}
		} else {
			authors.push(el.author)
		}
	})

	return authors
}


Library.prototype.sumPages = function() {
	var bookArr = this.books[0]
	var bookPages = []
	for (var i = 0; i < bookArr.length; i ++) {
		bookPages.push(bookArr[i].pageCount)
	}
	return bookPages.reduce(function(acc, el) {
		return acc + el;
	})
}

Library.prototype.filterByAuthor = function(name){
	var bookArr = this.books[0]
	var returnFilter = []

	for (var i = 0; i < bookArr.length; i++) {
		if (bookArr[i].author === name) {
			returnFilter.push(bookArr[i])
		}
	}

	return returnFilter
}
