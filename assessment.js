// Write your solutions here:

//input: array and search term
//output: the number of time searchTerm appears
function frequency(arr, searchTerm) {
	var counter = 0;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === searchTerm) {
			counter++
		}
	}
	return counter;
}


//input: string, and a letter
//output: reverse case of letter in all instances
function flipCase(str, letter) {
//this worked fine as a snippet, but I'm getting an error from the index.html
//moving on, but will come back...
	strArr = str.split("");
	finalArr = [];

	for(var i = 0; i < str.length; i++) {
		if(strArr[i] === letter.toUpperCase() || strArr[i] === letter.toLowerCase()) {
		    if(strArr[i] === letter.toUpperCase()) {
		        finalArr.push(strArr[i].toLowerCase());
		    } else {
		        finalArr.push(strArr[i].toUpperCase());
		    }
		} else {
		  finalArr.push(strArr[i]);
		}
	}
	return finalArr.join("");
};


//input: array of numbers
//output: product of all evern numbers
function multiplyEvenNumbers(arr) {
	var result = 1;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] % 2 === 0) {
			result = result * arr[i];
		}
	}
	return result;
}


//input: array of numbers
//output: returns the most frequent number in the array
function mode(arr) {
	finalObj = {};
//strategy
	//push items to object with key as element and value as number of occureneces
	//loop thru object properties and return number with the highest count
	for(var i = 0; i < arr.length; i++) {
		if(finalObj[arr[i]] === undefined) {
			finalObj[arr[i]] = 0;
		}
			finalObj[arr[i]]++;
	}

}


//input: string,
//output: returm same string with first letter capitalized
function capitalize(str) {
    var strSplit = str.split("");
    var cap = str[0].toUpperCase();
    strSplit[0] = cap;
    return strSplit.join(""); 
}


//input: arr
//output: arr of values that are truthy
function compact(arr) {
	finalArr = [];
    arr.map(function(value) {
       if((typeof value === 'number' && !isNaN(value) && value > 0)|| (typeof value === 'string' && value !== "") ) {
    
           finalArr.push(value);
       } 
    });
    return finalArr;
}


//input: array, and a callback (that returns true or false)
//output: one array
function partition(arr, callback) {
	var trueArr = [];
	var falseArr = [];
	var finalArr = [];

	for(var i = 0; i < arr.length; i++) {
		if(callback(arr[i])) {
			trueArr.push(arr[i])
		} else {
			falseArr.push(arr[i])
		}
	}
	finalArr.push(trueArr);
	finalArr.push(falseArr);
	return finalArr;
}


//input: two arrays
//output: return arrary of values that are the same in each array
function intersection(arr1, arr2) {
    finalArr = [];
	for(var i = 0; i < arr1.length; i++) {
		if(arr2.indexOf(arr1[i]) !== -1) {
            finalArr.push(arr1[i]);
		}
	}
	return finalArr;
}


//input: 
//output:
function flip() {
//at first glance, couldn't recognize a pattern so I'm moving on...
//if time allows, I'll come back and figure it out.
}


//input: function 
//output: returns a function that can only be invoked once
function once(func) {
//the solution has to do with closure, and I'm having a tough time implementing.
//given more time, I know I could figure it out.
	var count = 0;

	function innerFunction(funcInside) {
		if(count <= 0) {	
			return func;
		}
		count ++
	}
	innerFunction(func)
    return func
}



function Book(title, genre, pageCount, author, numChapters) {
	this.title = title,
	this.genre = genre,
	this.pageCount = pageCount,
	this.author = author,
	this.numChapters = numChapters
	//I don't know the correct syntax to add these methods as as prototypes, 
	//(and I don't think we are supposed to look things up) 
	//so I'm adding them in the construtor instead.
	this.toString = function() {
		//don't know the template string syntax yet, so I'm doing it the 
		//long way
		return this.title + ": " + this.pageCount;
	},
	this.pagesPerChapter = function() {
		return Math.round(this.pageCount / this.numChapters);
	}
}	

function Library(name, location, books) {
	this.name = name,
	this.location = location,
	this.books = []
	this.addBook = function() {

	}
}


























