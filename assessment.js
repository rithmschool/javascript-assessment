// Write your solutions here:

function frequency (arr, searchTerm){
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === searchTerm){
			count++;
		}
	}
	return count;
}

function mode(array){
	var keys = [];
	for (var i = 0; i < array.length; i++){
		if (!array[i] in keys){
			keys.push(array[i])
		}
	}
	// use frequency() for each val? then evaluate count of each unique?
	var mostfrequent;

	return mostfrequent;
}

function partition (arr, func){
	var results = [ [], [] ]

	for (var i = 0; i < arr.length; i++){
		if(func(arr[i])){
			results[0].push(arr[i])
		}
		else results[1].push(arr[i])
	}
	return results;
}






function capitalize (str){
	return str[0].toUpperCase() + str.substring(1, str.length);
}

function compact(arr){
	var newArr = [];
	for (var i= 0; i< arr.length; i++){
		if (arr[i]){
		newArr.push(arr[i])
		}	
	}
	return newArr;
}


function multiplyEvenNumbers(arr){
	var newArr= [];
	for (var i = 0; i < arr.length; i++){
		if (arr[i] % 2 === 0){
			newArr.push(arr[i]);
		}
	}
	return newArr.reduce(function(acc, val){
		return acc*val
	})
}


function intersection (arr1, arr2){
	var resultsArr = [];
	for (var i = 0; i < arr1.length; i++){
			if (arr2.includes(arr1[i])){
				resultsArr.push(arr1[i])
			}
	}
	return resultsArr;
}


function flipCase (str, letter){

	var upperCaseletter = letter.toUpperCase()
	var str2 = str2.replace(letter, letterUpper)
	

	return str2; 

	// figure out how to replace multiple characters..

}


// Part 2

function Book (title, genre, pageCount, author, numChapters){
	this.title = title,
	this.genre = genre,
	this.pageCount = pageCount,
	this.author = author,
	this.numChapters = numChapters;
	// this.toString = function(){
	// 				return this.title + ": " + this.pageCount

	// }
}

Book.prototype.toString = function (){
	return this.title + ": " + this.pageCount
}

Book.prototype.pagesPerChapter = function(){
	
	return Math.floor(this.pageCount/this.numChapters)
}


function Library (name, location, books){
	this.name = name,
	this.location = location,
	this.books = [];
}

Library.prototype.addBook = function(...args){
	this.books = args;

	return this.books;
}

Library.prototype.listAuthors = function(){
	return 
}

Library.prototype.sumPages  = function(){
	var sum = 0;
	for (var i = 0; i < this.books; i++){
		sum + this.numChapters[i]  // need call or apply to access sumPages for each book..? 
	}
	return sum;

}

Library.prototype.filterByAuthor  = function(){
	
}

