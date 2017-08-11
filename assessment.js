function frequency(arr, target){
	return arr.reduce(function(t,v){
		if(v === target) return ++t;
		else return t;
	},0);
}

//horible space/time complexity
function flipCase(str, target){
	var up = target.toUpperCase();
	var lo = target.toLowerCase();
	var newStr = ``;

	for(let i = 0; i < str.length; i++){
		if(str[i] === up) newStr += lo;
		else if(str[i] === lo) newStr += up;
		else newStr += str[i];
	}

	return newStr;

}

function multiplyEvenNumbers(arr){
	return arr.reduce(function(t, v){
		if(v % 2 === 0) return t * v;
		else return t;
	},1);
}

function mode(arr){
	var obj = {max:0, val:'',};
	for(let i = 0; i < arr.length; i++){
		if(obj.hasOwnProperty(arr[i])) {
			obj[arr[i]]++;
		}else{
			obj[arr[i]] = 1;
		}

		if(obj[arr[i]] > obj.max){
			obj.max = obj[arr[i]];
			obj.val = arr[i];
		}
	}

	return obj.val;
}

//what if the first charicter is not a letter?
function capitalize(str){
	return str[0].toUpperCase() + str.slice(1);
}

function compact(arr){
	return arr.filter((v) => !!v);
}

function partition(arr, fn){
	return arr.reduce(function(t,v){
		if(fn(v)){
			t[0].push(v);
		}else{
			t[1].push(v);
		}
		return t;
	}, [[],[]]);
}

//how should we handle repeat values?
function intersection(arr1, arr2){
	var obj = {};
	var newArr = [];

	for(let i = 0; i < arr1.length; i++){
		if(obj.hasOwnProperty(arr1[i]) === false) {
			obj[arr1[i]] = 1;
		}
	}

	for(let i = 0; i < arr2.length; i++){
		if(obj.hasOwnProperty(arr2[i])) {
			newArr.push(arr2[i]);
		}
	}

	return newArr;
}

function flip(fn){

	return function(...args){
		args.reverse();
		return fn(...args);
	}

}

function once(fn){
	var counter = 0;

	return function(...args){
		if(counter++ === 0){
			return fn(...args);
		}else{
			return undefined;
		}
	}

}

function Book(title, genre, pageCount, author, numChapters){
	this.title = title;	
	this.genre =  genre;  
	this.pageCount =  pageCount; 
	this.author =  author; 
	this.numChapters =  numChapters;
}

Book.prototype.toString = function(){
	return `${this.title}: ${this.pageCount}`;
}
Book.prototype.pagesPerChapter = function(){
	return Math.round(this.pageCount/this.numChapters);
}

function Library(name, location, books = []){
	this.name = name;
	this.location = location;
	this.books = books;
}
Library.prototype.addBook = function(newbooks){
	if( Array.isArray(newbooks) ){
		this.books = this.books.concat(newbooks);
	}else{
		this.books.push(newbooks);
	}

	this.books = this.books.filter(function(v){
		return v.__proto__ === Book.prototype;
	});

	return this.books;

}

Library.prototype.listAuthors = function(uniqe){
	var tObj = {};
	var arr = []

	if(uniqe){
		for(let i = 0; i < this.books.length; i++){
			if(tObj.hasOwnProperty(this.books[i].author) === false){
				tObj[this.books[i].author] = 1;
				arr.push(this.books[i].author);
			}
		}
	}else{
		for(let i = 0; i < this.books.length; i++){
				arr.push(this.books[i].author);
		}
	}

	console.log(arr);
	return arr;

}

Library.prototype.sumPages = function(){
	return this.books.reduce(function(t,v){
		return t += v.pageCount;
	},0);
}

Library.prototype.filterByAuthor = function(author){
	return this.books.filter(function(v){
		return v.author === author;
	});
}






































