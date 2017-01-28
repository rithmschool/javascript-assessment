// Write your solutions here:

function frequency(arr, searchTerm) {
    var freq = 0;
    arr.forEach(function(val) {
        if (val === searchTerm) {
            freq += 1;
        }
    });
return freq;
}// Write your solutions here:


function flipCase (string, toReverse) {
    var str = Array.from(string);
    str.forEach(function(x,idx) {
        if (x === toReverse.toUpperCase() ) {
            str[idx] = x.toLowerCase();
        } else if (x === toReverse.toLowerCase()) {
            str[idx] = x.toUpperCase();
        }
    })
return str.join("");
}

function multiplyEvenNumbers (arr) {
    return arr.filter(function (val) {
        return val % 2 === 0;
    }).reduce(function(acu,val) {
        return acu * val;
    })
}

function mode (arr) {
    var arr = arr.sort();
    var mode = arr[0];
    var modeCount = 1;
    var current = arr[0];
    var counter = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === current) {
            counter += 1;
        } else if (!arr[i] === current) {
            counter = 1;
            current = arr[i];
        } if (counter > modeCount) {
            mode = arr[i];
            modeCount = counter;
        }
    }
    return mode;
}

var arr = [1,2,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5]

mode(arr)


function capitalize (string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`
    
}

function compact (arr) {
    return arr.filter(function (val) {
        return !!val;
    })
}

function partition (arr, callback) {
    var truthy = arr.filter(function (val) {
        return callback(val);
    });
    var falsy = arr.filter(function (val) {
        return !callback(val);
    });
    return [truthy, falsy]
}

function intersection (arr1, arr2) {
    var ans = [];
    arr1.forEach(function (val) {
       if (arr2.includes(val)) {
           ans.push(val);
       }
    });
    return ans;
}


function flip (fn) {
    return function() {
        var args = Array.from(arguments).reverse()
        return fn.apply(this,args)
    }
}


function once (fnToCallOnce) {
    var count = 0;
    return function () {
        if (count >= 1) {return undefined}
        count += 1;
        return fnToCallOnce.apply(this,arguments)
    }
}


function Book (title, genre, pageCount, author, numChapters) {
    this.title = title,
    this.genre = genre,
    this.pageCount = pageCount,
    this.author = author,
    this.numChapters = numChapters,
    this.toString = function () {
        return `${this.title}: ${this.pageCount}`
    }
    this.pagesPerChapter = function() {
        return Math.floor(this.pageCount/this.numChapters)
    }
}



// function Library (name, location) {
//     this.name = name,
//     this.location = location,
//     this.books = [],
//     this.addBook = function(bookOrArray) {
//         if (Array.isArray(bookOrArray)) {
//             for (i=0;i<bookOrArray.length;i++) {
//                 this.books.push(bookOrArray[i])
//             }
//         } else {  
//            this.books.push(bookOrArray)
//            return this.books;
//         }
//      }
    
//     this.listAuthors = function() {
//         var authors = [];
//         books = this.books;
//         for (var i = 0; i < books.length; i++) {
//             authors.push(books[i][4])
//         }
//         return authors;
//     }
//     this.sumPages = function() {
//         var pages = 0
//         var books = this.books
//         for (var i =0;i < books.length; i++) {
//             pages += books[i].pagesPerChapter
//         }
//         i = 3
//         var test = books[i].pagesPerChapter;
//         return test 
//     }
// }



function Library (name, location) {
    this.name = name,
    this.location = location,
    this.books = [],
    this.addBook = function(bookOrArray) {
        
     }
    
    this.listAuthors = function() {
        var authors = [];
        books = this.books;
        for (var i = 0; i < books.length; i++) {
            authors.push(books[i][4])
        }
        return authors;
    }
    this.sumPages = function() {
        var pages = 0
        var books = this.books
        for (var i =0;i < books.length; i++) {
            pages += books[i].pagesPerChapter
        }
        i = 3
        var test = books[i].pagesPerChapter;
        return test 
    }
}
