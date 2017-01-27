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
	for(var i=0; i<str.length; i++){
		if(str[i].toUpperCase() === letter.toUpperCase()){
			if(str[i].toUpperCase() !== letter){
				str[i] = str[i].toUpperCase();
			}else{
				str[i] = str[i].toLowerCase();
			}

		}
	}

	return str;
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
	var result = []
	var trueValues = [];
	var falseValues = [];
	for(var i=0; i<arr.length; i++){
		if(fn(arr[i])){
			trueValues.push(arr[i]);
		}else{
			falseValues.push(arr[i]);
		}
	}
	result.push(trueValues);
	result.push(falseValues);
	return result;
}


function intersection(arr1, arr2){
	var result = [];
	arr1 = arr1.sort;
	arr2 = arr2.sort;
	var i = 0;
	var j = 0;
	while(i < arr1.length){
		if(arr1[i] < arr2[j]){
			i++;
		}
		else if(arr1[i] > arr2[j]){
			j++;
		}
		else{
			result.push(arr1[i]);
		}
	}
	return result;
}



function Book(title, genre, pageCount, author, numChapters){
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters;
}

Book.prototype.toString = function(){
	return `${this.title} : ${this.pageCount}`;
}

Book.prototype.pagesPerChapter = function(){
	return this.pageCount / this.numChapters;
}



function Library(name, location, books){
	this.name = [];
	this.location = [];
	this.books = [];
}

Library.prototype.addBook = function(arguments){
	if(this instanceOf Book && !this.books.includes(arguments)){
		return this.books.concat(arguments);
	}
}



Library.prototype.listAuthors = function(){

}

Library.prototype.sumPages = 

