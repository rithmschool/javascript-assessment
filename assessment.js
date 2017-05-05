// Write your solutions here:

function frequency(array, primitive){
	var counter=0;
	array.forEach(function(arrayItem,idx){
		if(arrayItem===primitive){
			counter++;
		}
	});

	return counter;
}

function flipCase(string, letter){
	var newString;
	var stringArray = string.split("");
	var newStringArray = stringArray.map(function(arrayItem,idx){
		if(arrayItem.toLowerCase() === letter.toLowerCase()){
			if(arrayItem===letter.toLowerCase()){
				return arrayItem.toUpperCase();
			} else {
				return arrayItem.toLowerCase();
			}
		} else {
		  return arrayItem;
		}
	});

	newString = newStringArray.join("");
	return newString;
}


function multiplyEvenNumbers(numArray) {
	return numArray.reduce(function(acc, arrayItem, idx){
		if(arrayItem%2===0){
			return acc*arrayItem;
		} else {
		  return acc;
		}
	},1);
}


function mode(numArray){
	var numberCount = {};
	numArray.forEach(function(arrayItem,idx){
		if(numberCount[arrayItem]===undefined){
			numberCount[arrayItem]=1;
		} else {
			numberCount[arrayItem] = numberCount[arrayItem] + 1;
		}
	});
	var largestCount=[];
	for(var property in numberCount){
		if(largestCount.length===0){
			largestCount.push(property,numberCount[property]);
		} else {
			if(numberCount[property] > largestCount[1]){
				largestCount[0] = property;
				largestCount[1] = numberCount[property];
			}
		}
	}
	return parseInt(largestCount[0]);
}


function capitalize(string){
	return string.slice(0,1).toUpperCase().concat(string.slice(1));
}


function compact(arrayOfTruth){
	return arrayOfTruth.reduce(function(acc, arrayItem, idx){
		if(arrayItem){
			acc.push(arrayItem);
		}
		return acc;
	},[]);
}



function isEven(num){
    return num % 2 === 0;
}

function partition(array, callback){
	var trueArray=[];
	var falseArray=[];
	array.forEach(function(arrayItem,idx){
		if(callback(arrayItem)){
			trueArray.push(arrayItem);
		} else {
			falseArray.push(arrayItem);
		}
	});
	return [trueArray, falseArray];
}


function intersection(array1, array2){
	var results=[];
	array1.forEach(function(arr1Item,idx){
		array2.forEach(function(arr2Item,dix){
			if(arr1Item === arr2Item){
				results.push(arr1Item);
			}
		});
	});
	return results;
}


function subtract(a,b,c){
    return a-b-c;
}
subtract(10,5,2); // 3

function flip(){
	var callback = [].slice.call(arguments)[0];
	function returnedFunc() {
		var outerArgs = [].slice.call(arguments);
		outerArgs.reverse();
		return callback.apply(this, outerArgs);
	}
	return returnedFunc;
}

var flipped = flip(subtract);
flipped(10,5,2);


/////////////////////////////////////////////////////

function add(a,b){
	return a+b;
}

function once(){
	var callback = [].slice.call(arguments)[0];
	var counter=0;
	return function(){
		if(counter===0){
			counter++;
			return callback.apply(this,arguments);
		}
	};
}

var oneAddition = once(add);
console.log(oneAddition(2,2));
console.log(oneAddition(2,4));
console.log(oneAddition(5,2));


////////////////////////////////////////////////////////
// Part 2

function Book(title, genre, pageCount, author, numChapters){
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters;
}

Book.prototype.toString = function(){
	return this.title+": "+this.pageCount;
};

Book.prototype.pagesPerChapter = function(){
	return Math.round(this.pageCount/this.numChapters);
};


function Library(name, location){
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function(booksToAdd){
	if(Array.isArray(booksToAdd)){
		_this = this;
		booksToAdd.forEach(function(arrayItem,idx){
			if(_this.books.indexOf(arrayItem)===-1){
				if(arrayItem.constructor === Book){
					_this.books.push(arrayItem);
				}
			}
		});
	} else {
		if(booksToAdd.constructor === Book){
			this.books.push(booksToAdd);
		} 
	}
	return this.books;
};

book = new Book('Eloquent JavaScript', 'Programming', 212, 'Marijn', 21);
book2 = new Book('JavaScript the Good Parts', 'Programming', 212, 'Dougie', 21);
book3 = new Book('Infinite Jest', 'Books I might never finish', 1075, 'David', 1);
book4 = new Book('Eloquent JavaScript 2nd Edition', 'Programming', 252, 'Marijn', 20);
book5 = {
	title: "Actionscript Animation",
	genre: "Programming",
	pageCount: 300,
	author: "Keith Peters",
	numChapters: 15
};

library = new Library('Rithm School Library', '3338 17th St');

library.addBook([book, book2, book3, book4, book5]);


Library.prototype.listAuthors = function(noDuplicates){
	return this.books.reduce(function(acc, arrayItem, idx){
		if(noDuplicates){
			if(acc.indexOf(arrayItem.author)===-1){
				acc.push(arrayItem.author);
			}
		} else {
			acc.push(arrayItem.author);
		}
		return acc;
	},[]);
};


Library.prototype.sumPages = function(){
	return this.books.reduce(function(acc, arrayItem, idx){
		return acc+arrayItem.pageCount;
	},0);
};


Library.prototype.filterByAuthor = function(author){
	return this.books.reduce(function(acc, arrayItem, idx){
		if(arrayItem.author===author){
			acc.push(arrayItem);
		}
		return acc;
	},[]);
};









