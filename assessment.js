// Write your solutions here:
function frequency(arr, searchTerm) {
	let count = 0;
	for (let i=0; i < arr.length; i++) {
		if (arr[i] === searchTerm) {
			count += 1;
		}
	}
	return count;
}

// come back to this one!!
function flipCase(str, letter) {
	let newStr = '';
	let possibilities = [letter.toLowerCase(), letter.toUpperCase()]
	for(let i=0; i < str.length; i++) {
		if (possibilities.includes(str[i])) {
			if (str[i] === str[i].toUpperCase()) {
				str[i] = str[i].toLowerCase()
			} else {
				str[i] = str[i].toUpperCase()
			}

		}
		newStr += str[i];
	}

}

// function multiplyEvenNumbers(arr) {
// 	let product;
// 	arr.reduce(function(first, cur) {
// 		if (first % 2 === 0) {first = cur}
// 		if (cur % 2 === 0)
// 			return val
// 	}, first)
// }
function multiplyEvenNumbers(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			product = product * arr[i];
		}
	}
	if (product === 1) {
		product = undefined;
		}
	return product;
}

// function mode(arr) {
// 	arrCount = {};
// 	let highest;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] in arrCount) {
// 			arrCount[arr[i]] += 1;
// 		} else {
// 			arrCount[arr[i]] = 1;
// 		}
// 	}
// 	for (key in arrCount) {
// 		if (key)
// 	}
// }

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
} 

function compact(arr) {
	let truthyArr = [];
	// arr.forEach(function(i) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			truthyArr.push(arr[i])	
		}
	}	
	// })
	return truthyArr;
}


function partition(arr, callback) {
	let arrs = [[],[]]
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) arrs[0].push(arr[i]);
		else arrs[1].push(arr[i]);
	}
	return arrs;

}

// come back to this one!
function intersection(arr) {
	both = [...arr[0], ...arr[1]];
	arrCount = {};
	solutionArr = [];
	for (let i = 0; i < both.length; i++) {
		if (both[i] in arrCount) {
			arrCount[arr[i]] += 1;
		} else {
			arrCount[arr[i]] = 1;
		}
	}
	for (key in arrCount) {
		if (arrCount[key] > 1) solutionArr.push(key);
	}
	return solutionArr;
}

// function flip(callback, ...args) {
	// oldArgs = [...args]
	// newArgs = [];

	
// }



// function once(callback) {
// 	let hasRun = false;

// 	return function() {
// 		if !(this.hasRun) {
// 			callback();
// 			this.hasRun = true;
// 		}
// 	}
// }

function Book(title, genre, pageCount, author, numChapters) {
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters;
}

Book.prototype.pagesbyChapter = function() {
	return Math.round((this.pageCount / this.numChapters));
}

function Library(name, location) {
	this.name = name;
	this.location = location;
	this.books = [];
}

// Bonus - how check instance of Book?  Duplicates...
Library.prototype.addBook = function() {
	let args = [...arguments]
	return this.books.push(args);
}

Library.prototype.listAuthors = function() {
	let authors = [];
	for (let i = 0; i < this.books.length; i++) {
		// if !(authors.includes(WHAT NEEDS TO GO hereERE))
			authors.push(this.books[i][Book.author])  // how can I do this??

	}
}


