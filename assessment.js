// Write your solutions here:

function frequency(arr,val){
	let returnNum = 0;
	for (let i=0;i<arr.length;i++){
		if (arr[i] === val) returnNum ++;
	}
	return returnNum;

}

function flipCase(arr,ltr){
	//let returnStr = "";
	var arr = arr.split("");

	function reverseCase(char){
	    if (char === char.toUpperCase()){
	        return char.toLowerCase();
	    } else {
	        return char.toUpperCase();
	    }
	}	

    
	for (let i=0; i<arr.length; i++){
		if (arr[i].toLowerCase() === ltr.toLowerCase()){
		    /*if (arr[i] === arr[i].toUpperCase){
		        arr[i] = arr[i].toLowerCase();
		    }else{
		        arr[i] = arr[i].toUpperCase();
		    }*/
			arr[i] = reverseCase(arr[i]);
		}
	}
	return arr.join("");
}

function multiplyEvenNumbers(arr){
	arr = arr.reduce(function(acc,val,idx,arr){
		if (val %2 === 0) acc.push(val);
		return acc;
	},[])

	return arr.reduce(function(acc,val,idx,arr){
		return acc *= val;
	},1)
}

function mode(arr){
	let numObj = {};

	for (let i=0; i<arr.length; i++){
		numObj[arr[i]] = numObj[arr[i]] + 1 || 1;
	}

	let keysArr = Object.keys(numObj);
	let mode = {val: null, qty: null}

	for (let i=0; i<keysArr.length; i++){
		if (numObj[keysArr[i]] > mode.qty){
			mode.val = keysArr[i];
			mode.qty = numObj[keysArr[i]];
		}
	}
	return +mode.val;
}


function capitalize(str){
	return str[0].toUpperCase() + str.slice(1);
}

function compact(arr){
	return arr.reduce(function(acc, val, idx, arr){
		if (val){ acc.push(val)};
		return acc;
	},[])
}

function partition(arr, fn){
	let truthy = [];
	let falsey = [];

	for (let i=0;i<arr.length;i++){
		if (fn(arr[i])){
			truthy.push(arr[i]);
		} else{
			falsey.push(arr[i]);
		}
	}
	return [truthy, falsey];
}

function intersection(arr1,arr2){
	var dataObj = {};
	var returnArr =[];

	for (let i=0;i<arr1.length;i++){
		dataObj[arr1[i]] = 1;
	}

	for (let i=0; i<arr2.length; i++){
		if(dataObj[arr2[i]]) returnArr.push(arr2[i]);
	}
	return returnArr;
}

function flip(fn){
	return function(...args){
		return fn.apply(this, args.reverse());
	}
}


function once(fn){
	let counter = 0;
	let outArgs = [].slice.call(arguments,1);

	return function(){
		counter ++;
		let inArgs = [].slice.call(arguments,0);

		if (counter >= 2) return;

		return fn.apply(this,outArgs.concat(inArgs));
	}
}







function Book(title, genre, pageCount, author, numChapters){
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters || 0;
}

Book.prototype.toString = function(){
	return `${this.title}: ${this.pageCount}`;
	// the space in this string was not mentioned in the assignment. It said that "a colon" was necessary.
}

Book.prototype.pagesPerChapter = function(){
	return Math.round(this.pageCount/this.numChapters);
}

function Library(name, location){
	this.name = name;
	this.location = location;
	this.books = [];
}

Library.prototype.addBook = function (bookArr){
	if (!Array.isArray(bookArr)) bookArr = [bookArr];
}

Library.prototype.sumPages = function(){
	let sum = 0;
	for (let i=0; i<this.books.length; i++){
		sum += this.books[i].pageCount
	}
	return sum;
}











