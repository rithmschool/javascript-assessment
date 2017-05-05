// Write your solutions here:

function frequency(arr, searchTerm){
	var count = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] === searchTerm){
			count++;
		}
	}
	return count;
}


function flipCase(str, letter){
	var newStr = ""
	for(var i=0; i<str.length; i++){
		if(str[i].toUpperCase() === letter.toUpperCase()){
			if(str[i].charCodeAt(0) > 96){
				newStr += str[i].toUpperCase();
			}else {
				newStr += str[i].toLowerCase();
			}

		}else{
			newStr += str[i]
		}
	}
	return newStr;
}

function multiplyEvenNumbers(arr){
	var product = 1;
	for(var i=0; i<arr.length; i++){
		if(arr[i] % 2 === 0){
			product *= arr[i];
		}
	}
	return product;
}



function mode(arr){
	var unique = {};
	var max = 0;
	var result = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] in unique){
			unique[arr[i]] += 1;
		}else{
			unique[arr[i]] = 1;
		}
	}
	//var values = Object.values(unique);
	for(var key in unique){
		if(unique[key] > max){
			max = unique[key];
			result = key;
		}
	}
	return Number(result);
}



function capitalize(str){
	return str[0].toUpperCase()+str.slice(1);
}

function compact(arr){
	var result = []
	for(var i=0; i<arr.length; i++){
		if(arr[i]){
			result.push(arr[i]);
		}
	}
	return result;

}

function partition(arr, fn){
	var trueValues = [];
	var falseValues = [];
	for(var i=0; i<arr.length; i++){
		if(fn(arr[i])){
			trueValues.push(arr[i]);
		}else{
			falseValues.push(arr[i]);
		}
	}
	return [trueValues, falseValues];
}


function intersection(arr1, arr2){
	var result = [];
	arr1 = arr1.sort();
	arr2 = arr2.sort();
	var i = 0;
	var j = 0;
	while(i < arr1.length && j < arr1.length){
		if(arr1[i] < arr2[j]){
			i++;
		}
		else if(arr1[i] > arr2[j]){
			j++;
		}
		else{
			result.push(arr1[i]);
			i++;
			j++;
		}
	}
	return result;

}


function flip(fn){
	return function(){
		var args = Array.from(arguments).reverse();
		return fn.apply(this, args);
	}
}

function once(fn){
	var count = 0;
	return function(){
		var args = Array.from(arguments);
		if(count === 0){
			count ++;
			return fn.apply(this, args)
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
	return `${this.title}: ${this.pageCount}`;
}

Book.prototype.pagesPerChapter = function(){
	return Math.round(this.pageCount / this.numChapters);
}



function Library(name, location){
	this.name = name;
	this.location = location;
	this.books = [];
}

 Library.prototype.addBook = function(list){

	function checkIfAlreadyIncluded(book){
		return book instanceof Book && this.books.indexOf(book) === -1;
	}

	if(Array.isArray(list)){
		this.books = this.books.concat(list.filter(checkIfAlreadyIncluded, this)); //want to know about this
	}
	else if(checkIfAlreadyIncluded.call(this, list)){
		this.books = this.books.concat(list);
	}
 	return this.books;

 };



Library.prototype.listAuthors = function(uniq){
	if(uniq){
		return this.books.reduce(function(prev, next){
			if(prev.indexOf(next.author) === -1){
				prev.push(next.author);
			}
			return prev;
		},[]);
	}

	return this.books.map(function(book){
		return book.author;
	});
};

 Library.prototype.sumPages = function(){
 	return this.books.reduce(function(prev, next){
 		prev += next.pageCount;
 		return prev
 	},0);
 };

 Library.prototype.filterByAuthor = function(authorName){
 	return this.books.filter(function(book){
 		return book.author === authorName;
 	});
 };

