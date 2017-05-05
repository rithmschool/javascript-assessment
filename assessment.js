// Write your solutions here: /// ** All the tests pass now! Woohoo!

function frequency(arr, key) {
    var count = 0;
    arr.forEach(function(element) {
        if (element === key) {
            count++
        }
    })
    return count;
}


function flipCase(string, key) {
    var letter = key.toLowerCase();
    var arr = Array.from(string);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === letter.toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else if (arr[i] === letter) {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('')
}

// Couldn't quite get this one to work :(  Moved on in the essence of time, implemented correctly in the next function
function multiplyEvenNumbers(array) {
    return array.filter(val => val % 2 === 0).reduce(function(prev, next) { prev * next }, 1)
}

function multiplyEvenNumbers(array) {
    var evens = array.filter(val => val % 2 === 0);
    var total = 1;
    for (var i = 0; i < evens.length; i++) {
        total *= evens[i];
    }
    return total;
}


function mode(array) {
    var numberCounter = {};
    var maxKey = array[0];
    var maxValue = 1;
    for (var i = 0; i < array.length; i++) {
        if(numberCounter[array[i]]){
        numberCounter[array[i]]++;
        } else {numberCounter[array[i]] = 1}
        if (numberCounter[array[i]] > maxValue) {
            maxKey = array[i];
            maxValue = numberCounter[array[i]];
        }
    }
    return maxKey;
}



function capitalize(string) {
    var letters = Array.from(string);
    letters[0] = letters[0].toUpperCase();
    return letters.join('')
}

function compact(array) {
    return array.filter(val => val)
}


function partition(array, callback) {
    var veritas = [];
    var wompwomp = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            veritas.push(array[i]);
        } else {
            wompwomp.push(array[i]);
        }
    }
    return [veritas, wompwomp];
}


function intersection(arr1, arr2) {
    var shared = [];
    for (var i = 0; i < arr1.length; i++) {
        if (!(arr2.indexOf(arr1[i]) === -1)) {
            shared.push(arr1[i]);
        }
    }
    return shared;
}




function flip(func) {
    return function() {
        var reversed = [];
        for (var i = arguments.length - 1; i >= 0; i--) {
            reversed.push(arguments[i])
        }
        return func(...reversed)
    }
}


function once(func) {
    var execute = true;
    return function() {
        if (!execute) {
            return undefined;
        }
        execute = false;
        return func.apply(this, arguments)
    }
}


function Book(title, genre, pageCount, author, numChapters) {
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters
}

Book.prototype.toString = function() {
    return `${this.title}: ${this.pageCount}`
}

Book.prototype.pagesPerChapter = function() {
    return Math.floor(this.pageCount / this.numChapters)
}


function Library(name, location, books) {
    this.name = name;
    this.location = location;
    this.books = [];
}


Library.prototype.addBook = function(bookTitles) {
    if (Array.isArray(bookTitles)) {
        this.books.push(...bookTitles);
    } else {
        this.books.push(bookTitles)
    }
    return this.books;
}



Library.prototype.listAuthors = function(uniqueOnly) {
    if (uniqueOnly) {
        var authorsArray = [];
        for (var i = 0; i < this.books.length; i++) {
            if (authorsArray.indexOf(this.books[i].author) === -1) {
                authorsArray.push(this.books[i].author)
            }
        }
        return authorsArray;
    }

    var authorsArray = [];
    for (var i = 0; i < this.books.length; i++) {
        authorsArray.push(this.books[i].author)
    }
    return authorsArray;

}

Library.prototype.sumPages = function() {
    var total = 0;
    for (var i = 0; i < this.books.length; i++) {

        total += this.books[i].pageCount
    }
    return total;
}



Library.prototype.filterByAuthor = function(author) {
    var authorBooks = [];
    for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].author === author) {
            authorBooks.push(this.books[i])
        }
    }
    return authorBooks;
}
