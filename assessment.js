// Write your solutions here:
// Write your solutions here:
function frequency(array, searchTerm) {
    return array.filter(function(val) {
        return val === searchTerm;
    }).length
}

function flipCase(string, letter) {
    let str = string.split("");
    str.forEach(function(val, idx) {
        if (val.toLowerCase() === letter) {
            if (val.toUpperCase() === val) {
                str[idx] = val.toLowerCase()
            } else {
                str[idx] = val.toUpperCase()
            }
        }
    })
    return str.join("")
}

function multiplyEvenNumbers(array) {
    return array.reduce(function(acc, val) {
        if (val % 2 === 0) {
            return acc * val;
        }
        return acc;
    }, 1)
}

function mode(array) {
    let obj = {};
    let frequent = 0;
    let most = 0;
    array.forEach(function(val) {
        if (obj[val] === undefined) {
            obj[val] = 1;
        } else {
            obj[val]++
        }
    })
    for (let key in obj) {
        if (obj[key] >= most) {
            most = obj[key];
            frequent = key;
        }
    }
    return Number(frequent);
}

function capitalize(string) {
    let arr = string.split("")
    arr.forEach(function(val, idx) {
        if (idx === 0) {
            arr[idx] = arr[idx].toUpperCase()
        }
    })
    return arr.join("")
}

function compact(array) {
    return array.filter(function(val) {
        return val;
    })
}

function partition(array, callback) {
    let arr = [
        [],
        []
    ];
    array.forEach(function(val, idx) {
        if (callback(val) === true) {
            arr[0].push(array[idx])
        } else {
            arr[1].push(array[idx])
        }
    })
    return arr;
}

function intersection(arr, arr2) {
    return arr.filter(function(val) {
        return arr2.indexOf(val) !== -1
    })
}

function flip(fn) {
    return function() {
        var args = Array.from(arguments);
        return fn.apply(this, args.reverse());
    }
}

function once(fn) {
    var work = true;
    return function() {
        var args = Array.from(arguments);
        if (work === true) {
            work = false;
            return fn.apply(this, args);
        }
    }
}

function Book(title, genre, pageCount, author, numChapters) {
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters;
}

Book.prototype.toString = function() {
    return `${this.title}: ${this.pageCount}`;
};

Book.prototype.pagesPerChapter = function() {
    return Math.round(this.pageCount / this.numChapters);
};
