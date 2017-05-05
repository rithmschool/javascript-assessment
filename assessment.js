// Write your solutions here:

function frequency(arr, key){
	var counter = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === key){
			counter++
		}
	}
	return counter;
}


function flipCase(str, char){
	var string = ''
	for(var i = 0; i < str.length; i++){
		if(str[i] === char.toLowerCase()){
			string += str[i].toUpperCase();
		} else if(str[i] === char.toUpperCase()){
			string += str[i].toLowerCase();
		} else {
			string += str[i];
		}
	}
	return string;
}

function multiplyEvenNumbers(arr){
	var multi = 1;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			multi *= arr[i];
		}
	}
	return multi;
}

function mode(arr){
	var newObj = {};
	for(var i = 0; i < arr.length; i++){
		if(newObj[arr[i]]){
			newObj[arr[i]]++;
		} else {
			newObj[arr[i]] = 1;
		}
	}
	var max = 0;
	var item;
	for(var prop in newObj){
		if(newObj[prop] > max){
			max = newObj[prop];
			item = prop;
		}
	}
	return Number(item);
}


function capitalize(string){
	return string[0].toUpperCase() + string.slice(1);
}


function compact(arr){
	var newArray = [];
	for(var i = 0; i < arr.length; i++){
		if(arr[i]){
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

function partition(arr, fn){
	return arr.reduce(function(prev, next){
		if(fn(next)){
			prev[0].push(next);
		} else {
			prev[1].push(next);
		}
		return prev;
	}, [[],[]]);
}

function intersection(arr1, arr2){
	var newArray = [];

	for(var i = 0; i < arr1.length; i++){
		for(var j = 0; j < arr2.length; j++){
			if(arr1[i] === arr2[j]){
				newArray.push(arr1[i]);
			}
		}
	}
	return newArray;
}

function flip(fn){
	return function(...arr){
		var reverse = arr.reverse();
		return fn.apply(fn, reverse);
	}
}

function once(fn){
	var counter = 0;
	return function(...arr){
		if(counter === 0){
			counter++;
			return fn.apply(this, arr);
		}
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
	return `${this.title}: ${this.pageCount}`
}

Book.prototype.pagesPerChapter = function(){
	return Math.floor((this.pageCount/this.numChapters));
}

function Library(name, location){
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function(arr){
	return this.books = this.books.concat(arr);
}

Library.prototype.listAuthors = function(arg){
	var authors = [];
	//push in first book
	authors.push(this.books[0].author);
	var counter = 0;

	for(var i = 1; i < this.books.length; i++){
		if(arguments[0] === true){
			for(var j = 0; j < authors.length; j++){
				if(authors[j] === this.books[i].author) counter ++;
			}
			if(counter === 0){
				authors.push(this.books[i].author);
			}
			counter = 0;
		} else {
			authors.push(this.books[i].author);
		}
		
	}
	return authors;
}

Library.prototype.sumPages = function (){
	var sum = 0;
	for(var i = 0; i < this.books.length; i++){
		sum += this.books[i].pageCount;
	}
	return sum;
}

Library.prototype.filterByAuthor = function(auth){
	var arr = [];
	for(var i = 0; i < this.books.length; i++){
		if(this.books[i].author === auth){
			arr.push(this.books[i]);
		}
	}
	return arr;
}













