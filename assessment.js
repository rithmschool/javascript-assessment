// ### `frequency`
// This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.

function frequency(arr,term){
var newArr = 0;
for(var i = 0; i<arr.length;i++){
	if(arr[i] === term){
		newArr++;
	}
	}return newArr;
}

// ### `flipCase`
// This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.
function flipCase(str,letter){
    var newStr = str.split("");

    newStr = newStr.map(function(l){
        if(l.toLowerCase() === letter.toLowerCase()){
            if(l === l.toLowerCase()){
                l = l.toUpperCase();
            }else{
                l = l.toLowerCase();
            }
        }
        return l;
    });
    return newStr.join("");
}

//It returns the most frequent number in the array of numbers
function mode(arr){
	
return arr
}


// multiply evens
// This function accepts an array of numbers and returns the product of all even numbers in the array.
function multiplyEvenNumbers(arr){
var evens = 1

    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            evens = evens * arr[i]
        }
    }
    return evens;
}
multiplyEvenNumbers([1,2,3,4,5,6,7,8,9,10]);

// ### `mode`
// This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique
function mode(arr){
	var sort = arr.sort;
   	return sort;
}
mode([2,4,1,2,3,3,4,4,5,4,4,6,4,6,7,4]); // 4

// capitalize
function capitalize(str){
  return str[0].toUpperCase() + str.slice(1) 
}



// #### Book

// - Each book should have a `title`, `genre`, `pageCount`, `author` and `numChapters`. 
// - Each book should have a method called `toString` which returns a string with the title of the book, a colon, and the number of pages
// - Each book should have a method called `pagesPerChapter` which returns the average number of pages per chapter, rounded to the nearest whole number

/*
#### Library

- Each library should have a `name`, `location`, and `books` (which should be initialized as an empty array)

- Each library should have a method called `addBook`, which accepts either a single book or an array of books and 
	adds them to the library's `books` array.  This method should return the new list of books. As a bonus, ensure that these books 
		that get added are objects created from the `Book` constructor function, and make sure that no duplicate books are added to the library. 
			(You'll need to write the tests for these features too!)
- Each library should have a method called `listAuthors`, which returns an array of the names of the authors of each book in the library. 
	Also, if you pass in the boolean `true` to `listAuthors`, it should return a list of unique authors from the list of books: no duplicates allowed!
- Each library should have a method called `sumPages`, which returns the total number of pages for each book in the array of books. 
- Each library should have a method called `filterByAuthor`, which accepts one parameter (a name of an author) returns an 
	array of books that have the same author as the name of the author parameter.
*/

function Book(title, genre, pageCount, author, numChapters){
	this.title = title;
	this.genre = genre;
	this.pageCount = pageCount;
	this.author = author;
	this.numChapters = numChapters;
}
Book.prototype.toString = function(){
	return `${this.title}: ${this.pageCount}`
}; 
Book.prototype.pagesPerChapter  = function(){
	return Math.round(this.pageCount / this.numChapters);
}
function Library(name, location){
	this.name = name;
	this.location = location;
	this.books = [];
}
Library.prototype.addBook = function(book){
	this.books = this.books.concat(book);
	return this.books;
};
Library.prototype.listAuthors = function(uniqueAuthors){
	return this.author
}

Library.prototype.listAuthors = function(uniqueAuthors){
	return this.books.map(function(book){
		return book.author;
	});
};









