// Write your solutions here:

function frequency(arr, key){
	var counter = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === key) counter++;
	}
	return counter;
}

function flipCase(str, char){
	if(str.length === 0) return '';
	if(str[0] === char.toLowerCase()){
		return str[0].toUpperCase() + flipCase(str.slice(1), char);
	} else if(str[0] === char.toUpperCase()){
		return str[0].toLowerCase() + flipCase(str.slice(1), char);
	} else {
		return str[0] + flipCase(str.slice(1), char);
	}
	// var string = ''
	// for(var i = 0; i < str.length; i++){
	// 	if(str[i] === char.toLowerCase()){
	// 		string += str[i].toUpperCase();
	// 	} else if(str[i] === char.toUpperCase()){
	// 		string += str[i].toLowerCase();
	// 	} else {
	// 		string += str[i];
	// 	}
	// }
	// return string;
}

function multiplyEvenNumbers(arr){
	if(arr.length === 0) return 1;
	return arr[0] % 2 === 0 ?  arr[0] * multiplyEvenNumbers(arr.slice(1)) : multiplyEvenNumbers(arr.slice(1));
	// var multi = 1;
	// for(var i = 0; i < arr.length; i++){
	// 	if(arr[i] % 2 === 0) multi *= arr[i];
	// }
	// return multi;
}

function mode(arr){
	var newObj = {};
	for(var i = 0; i < arr.length; i++){
		newObj[arr[i]] = (newObj[arr[i]] || 1) + 1;
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
	return arr.reduce(function(prev,next){
		if(next) prev.push(next);
		return prev;
	}, []);
}

function partition(arr, fn){
	return arr.reduce(function(prev, next){
		fn(next) ? prev[0].push(next) : prev[1].push(next);
		return prev;
	}, [[],[]]);
}

function intersection(arr1, arr2){
	return arr1.reduce(function(prev, next, index){
		for(var i = 0; i  < arr2.length; i++){
			if(next === arr2[i+1]) prev.push(arr1[i]);
		}
		return prev;
	}, []);
}

function flip(fn){
	return function(...arr){
		return fn.apply(fn, arr.reverse());
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

Library.prototype.addBook = function(arg){
	if(Array.isArray(arg)){
		for(var i = 0; i < arg.length; i++){
			if(arg[i] instanceof Book) this.books.push(arg[i]);
		}
	} else {
		if(arg instanceof Book) this.books = this.books.concat(arg);
	}
	return this.books
}

Library.prototype.listAuthors = function(arg){
	var authors = [];
	for(var i = 0; i < this.books.length; i++){
		if(arguments[0] === true){
			if(!authors.includes(this.books[i].author)){
				authors.push(this.books[i].author);	
			}
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
		if(this.books[i].author === auth) arr.push(this.books[i]);
	}
	return arr;
}













