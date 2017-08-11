// Write your solutions here:

//input: boolean or number or string to search for
//output: number of times item appears in array
//outline: loop over array add to count if ===, return count

function frequency(array,searchItem){
	var count = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] === searchItem){
			count++
		}
	}
	return count;
}

//input: string, letter
//output: string with letters reversed
//outline: lower case search item, loop through looking for item 
function flipCase(string,letter){
	var upper = letter.toUpperCase();
	var lower = letter.toLowerCase();
	var answer = "";
	for(var i = 0; i < string.length; i++){
		if(string[i] === upper){
			answer += string[i].toLowerCase();
			i++
		} 

		if(string[i] === lower){
			answer += string[i].toUpperCase();
		}
		else {
			answer += string[i]
		}
	}
	return answer
}

function multiplyEvenNumbers(array){
	var answer = 1;
	for(var i = 0; i < array.length; i++){
		//if even
		if(array[i] % 2 === 0){
			answer = answer * array[i] 
		}
	}
	return answer;
}

// [2,4,1,2,3,3,4,4,5,4,4,6,4,6,7,4] 
function mode(array){
	var mostFreqNumber = 0;
	var largestCount = 1;
	var currentCount = 0;
	for(var i = 0; i < array.length; i++){
		for(var j = 1; j < array.length; j++){
			if(array[i] === array[j]){
				currentCount += 1
			}
			if(currentCount > largestCount){
				largestCount = currentCount;
				mostFreqNumber = array[i]
			}
		}
	}
	return mostFreqNumber;
}


function capitalize(string){
    var firstLetter = string[0].toUpperCase();
    return firstLetter + string.slice(1)
}

function compact(array){
	var answer = []
	for(var i = 0; i < array.length;i++){
		if(array[i]=== true){
			answer.push(array[i])
		}
	}
	return answer;
}

function partition(array,fn){
	var trueArray = [];
	var falseArray = [];
	var answerArray = []
	for(var i = 0; i < array.length; i++){
		if(fn(array[i]) === true){
			trueArray.push(array[i])
		} else {
			falseArray.push(array[i])
		}
	}
	answerArray.push(trueArray);
	answerArray.push(falseArray);
	return answerArray;
}

function intersection(array1, array2){
	var answer=[];
	for(var i = 0; i < array1.length; i++){
		if(array1.hasOwnProperty(array2[i])){
			answer.push(array1[i])
		}
	}
	return answer;
}

function flip(fn,...args){
	var argsReversed =[];
	for(var i = args.length-1; i >= 0; i--){
		argsReversed += args[i]
	}
	return fn(argsReversed)
}

//closure - inner fn that remembers a variable from outer that has returned
function once(fn,...args){
	var count = 0;
	return function(...args){
		if(count > 1){
			return undefined
		} else {
			count += 1
		}
	}
}

function Book(title,genre,pageCount,author,numChapters){
	this.title = title,
	this.genre = genre,
	this.pageCount = pageCount,
	this.author = author;
	this.numChapters = numChapters
}

Book.prototype.toString = function(){
	return (`${this.title}: ${this.pageCount}`)
}

Book.prototype.pagesPerChapter = function(){
	return Math.round(this.pageCount/this.numChapters);
}

function Library(name,location,books){
	this.name = name,
	this.location = location,
	this.books = []
}

Library.prototype.addBook = function(currentBook){
	if(typeof currentBook === 'object'){
		for(var i = 0; i < currentBook.length; i++){
			this.books.push(currentBook[i])
		}
	} 
	if(typeof currentBook === 'string'){
		this.books.push([currentBook]);
	}
	
	return this.books
}

Library.prototype.listAuthors = function(){
	return this.books[this.author]
}

Library.prototype.sumPages = function(){
	return this.books[pageCount]
}




