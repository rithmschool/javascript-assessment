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
    var arrObj = {};
    arr.forEach(function(val) {
        if (arrObj[val] === undefined) {
            arrObj[val] = 0;
        }
        arrObj[val] += 1;
    });
    var ans = 0;
    var count = 0;
    for (var key in arrObj) {
        if (arrObj[key] > count) {
            ans = key;
            count = arrObj[key];
        }
    }
    return Number(ans);
}


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


function Library (name, location) {
    this.name = name,
    this.location = location,
    this.books = [],
    this.addBook = function(bookOrArray) {
        if (Array.isArray(bookOrArray)) {
            this.books =  this.books.concat(bookOrArray);
            return this.books;
     } else {
        this.books.push(bookOrArray);
        return this.books;
     }
    }, 
    this.listAuthors = function(unique) {
        var authors = [];
        var books = this.books;
        if (unique) {
            books.forEach(function(val, i) {
                if (!authors.includes(val.author)) {
                    authors.push(books[i].author)
                }
             });
        } else {
            books.forEach(function(val, i) {
            authors.push(books[i].author)
            });
        };
        return authors;
        },
    this.sumPages = function() {
        var pages = 0;
        var books = this.books;
        books.forEach(function (val, i) {
            pages += (books[i].pageCount);
        });
        return pages;
        },
    this.filterByAuthor = function(searchTerm) {
        return this.books.filter(function (val) {
            return val.author === searchTerm;
        })
    }
    }
