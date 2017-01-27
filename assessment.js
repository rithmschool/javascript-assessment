// Write your solutions here:

function frequency(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

function multiplyEvenNumbers(arr) {
    return arr.reduce(function (acc, next) {
        if (next % 2 === 0) {
            acc *= next;
        }
        return acc;
    }, 1)
}

function flip(fn) {
    return function innerFn(...args) {
        var reverse = args.reverse();
        return fn(...reverse);
    }
}

function once(fn) {
    let count = 0;
    return function innerFn(...args) {
        if (count < 1) {
            ++count;
            return fn(...args);

        }
    }
    return undefined;
}

function intersection(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) {
            newArr.push(arr1[i]);
        }
    }
    return newArr;
}

function partition(arr, cb) {
    var trueArr = [];
    var falseArr = [];
    var wrapper = [];

    arr.forEach(function (item) {
        if (cb(item)) {
            trueArr.push(item);
        } else {
            falseArr.push(item);
        }
    })

    wrapper.push(trueArr, falseArr);
    return wrapper;

}

function flipCase(str, letter) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter.toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else if (str[i] === letter.toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

function mode(arr) {
    var newObj = {};
    var max = 0;
    var frequent = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!newObj[arr[i]]) {
            newObj[arr[i]] = 1;
        } else {
            newObj[arr[i]]++;
        }
    }
    for (var key in newObj) {
        if (max < newObj[key]) {
            max = newObj[key];
            frequent = key;
        }
    }
    return parseInt(frequent);
}


function compact(arr) {
    var truthyArr = [];
    arr.forEach(function (item) {
        if (item) {
            truthyArr.push(item);
        }
    })
    return truthyArr;
}

function capitalize(str) {
    var fUp = str[0].toUpperCase();
    var newStr = fUp + str.slice(1);
    return newStr;
}

function Book(title, genre, pageCount, author, numChapters) {
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters;
    this.toString = function () {
        return `${this.title}: ${this.pageCount}`
    }
    this.pagesPerChapter = function () {
        return Math.floor(this.pageCount / this.numChapters);
    }
}


/*function Library(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
    this.addBook = function (book) {
        if (book instanceof Book) {
            if (Array.isArray(book))

                for (let i = 0; i < book.length; i++) {
                this.books.push(book[i]);
            }
        }
        if (this.books.indexOf(book) === -1) {
            this.books.push(book);
            return this.books;
        }
    }

    this.listAuthors = function () {

    }
}*/