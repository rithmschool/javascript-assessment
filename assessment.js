// Write your solutions here:
// Part I
function frequency(array, searchTerm) {
    let count = 0;
    array.forEach(function (el) {
        if (el === searchTerm) {
            count++;
        }
    });
    return count;
}

function flipCase(string, letter) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === letter || string[i].toUpperCase() === letter) {
            if (string[i] === string[i].toUpperCase()) {
                newString += string[i].toLowerCase();
            } else {
                newString += string[i].toUpperCase();
            }
        } else {
            newString += string[i];
        }
    }
    return newString;
}

function multiplyEvenNumbers(array) {
    let product = 1;
    array.forEach(function (el) {
        if (el % 2 === 0) {
            product *= el;
        }
    });
    return product;
}

function mode(array) {
    let key;
    let largest = 0;
    let obj = array.reduce(function (acc, cur) {
        if (cur in acc) {
            acc[cur] += 1;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});
    for (let keys in obj) {
        if (obj[keys] > largest) {
            largest = obj[keys];
            key = keys;
        }
    }
    return +key;
}

function capitalize(string) {
    return string[0].toUpperCase() + string.substr(1);
}

function compact(array) {
    return array.filter(function (el) {
        return el;
    });
}

function partition(array, fn) {
    let arr1 = [];
    let arr2 = [];
    let partitioned = [arr1, arr2];
    array.forEach(function (el) {
        if (fn(el)) {
            arr1.push(el);
        } else {
            arr2.push(el);
        }
    });
    return partitioned;
}

function intersection(arr1, arr2) {
    let arr = [];
    arr1.forEach(function (el) {
        if (arr2.includes(el)) {
            arr.push(el);
        }
    });
    return arr;
}

function flip(fn) {
    return function () {
        let args = [].concat(...arguments);
        // let args = Array.from(arguments);
        return fn.apply(this, args.reverse());
    };
}

function once(fn) {
    let count = 1;
    return function () {
        let args = Array.from(arguments);
        if (count === 1) {
            count++;
            return fn.apply(this, args);
        }
    };
}

// Part II
// Book
function Book(title, genre, pageCount, author, numChapters) {
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters;
}

Book.prototype.toString = function () {
    return `${this.title}: ${this.pageCount}`;
}

Book.prototype.pagesPerChapter = function () {
    return Math.round(this.pageCount / this.numChapters);
}

// Library
function Library(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
}

Library.prototype.addBook = function (booksArg) {
    if (booksArg.length === 1) {
        // let newBook;
        // newBook = new Book(title, genre, pageCount, author, numChapters);
        // need to attach new Book to booksArg!
        this.books.push(newBook);
    } else {
        // let newBook = [];
        for (let i = 0; i < Array.from(booksArg).length; i++) {
            // newBook[i] = new Book(title, genre, pageCount, author, numChapters);
            // this.books.push(newBook[i]);
            this.books.push(new Book(booksArg[i]));
        }
    }
    return this.books;
}

Library.prototype.listAuthors = function () {
    let arr = [];
    this.books.forEach(function (el) {
        arr.push([this.books.title, this.books.authors]);
    });
    return arr;
}

Library.prototype.sumPages = function () {
    let pgCt = 0;
    this.books.forEach(function(el){
        pgCt += el.pageCount;
    });
    return pgCt;
}

Library.prototype.filterByAuthor = function (authors) {
    let authorBooks = [];
    this.books.forEach(function(el){
        if (el.author === authors){
            authorBooks.push(el);
        }
    });
    return authorBooks;
}

