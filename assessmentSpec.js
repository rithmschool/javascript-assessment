var expect = chai.expect;

describe("#frequency", function(){
  it("It returns the number of times the searchTerm appears in the array.", function(){
    var arr = ["a","b","c","c"];
    expect(frequency(arr,"c")).to.equal(2);
  });
});

describe("#flipCase", function(){
  it("It reverses the case of all occurances of the letter in the string.", function(){
    var str = "amazing Awesome";
    expect(flipCase(str, "a")).to.equal("AmAzing awesome");
  });
});

describe("#multiplyEvenNumbers", function(){
  it("It returns the product of all even numbers in the array", function(){
    var arr = [1,2,3,4,5,6,7,8,9,10];
    expect(multiplyEvenNumbers(arr)).to.equal(3840);
  });
});

describe("#mode", function(){
  it("It returns the most frequent number in the array of numbers", function(){
    var arr = [1,2,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5];
    expect(mode(arr)).to.equal(3);
  });
});

describe("#capitalize", function(){
  it("It returns the same string with the first letter capitalized", function(){
    expect(capitalize("awesome")).to.equal("Awesome");
  });
});

describe("#compact", function(){
  it("It returns an array of values that are truthy values", function(){
    expect(compact([1,2,3,4])).to.deep.equal([1,2,3,4]);
  });
  it("It removes falsey values from the returned array", function(){
    expect(compact([false,NaN,undefined,"",0,null])).to.deep.equal([]);
  });
});

describe("#partition", function(){
  it("It returns an array with two arrays, a truthy one and falsey one", function(){
    function isOdd(a){
        return a % 2 !== 0;
    }
    expect(partition([1,2,3,4,5,6,7,8], isOdd)).to.deep.equal([[1,3,5,7], [2,4,6,8]]);
  });
});

describe("#intersection", function(){
  it("It returns an array with the values that are the same in each array", function(){
    var arr1 = [2,3,4];
    var arr2 = [1,2,3];
    expect(intersection(arr1,arr2)).to.deep.equal([2,3]);
  });
});

describe("#flip", function(){
  it("It returns another function with the arguments switched", function(){
    function subtract(a,b,c){
        return a-b-c;
    }
    var flipped = flip(subtract);

    expect(flipped(10,5,2)).to.equal(-13);
  });
});

describe("#once", function(){
  it("It accepts a function and returns a new function that can only be invoked once", function(){
    function add(a,b){
        return a+b;
    }
    var oneTime = once(add);
    expect(oneTime(2,2)).to.equal(4);
    expect(oneTime(2,2)).to.equal(undefined);
    expect(oneTime(122,112)).to.equal(undefined);
  });
});


describe("Book", function(){
    var book;

    beforeEach(function(){
        book = new Book('Eloquent JavaScript', 'Programming', 212, 'Marijn', 21);
    });

    describe("#initializing", function(){
        it("has a title", function(){
            expect(book.hasOwnProperty('title')).to.equal(true);
            expect(book.title).to.equal('Eloquent JavaScript');
        });
        it("has a genre", function(){
            expect(book.hasOwnProperty('genre')).to.equal(true);
            expect(book.genre).to.equal('Programming');
        });
        it("has a page count", function(){
            expect(book.hasOwnProperty('pageCount')).to.equal(true);
            expect(book.pageCount).to.equal(212);
        });
        it("has an author", function(){
            expect(book.hasOwnProperty('author')).to.equal(true);
            expect(book.author).to.equal('Marijn');
        });
        it("has a number of chapters", function(){
            expect(book.hasOwnProperty('numChapters')).to.equal(true);
            expect(book.numChapters).to.equal(21);
        });
    });
    describe("#toString", function(){
        it('returns the a string with the name of the book, a colon and the number of pages', function(){
            expect(book.toString()).to.equal('Eloquent JavaScript: 212');
        });
    });
    describe("#pagesPerChapter", function(){
        it('returns the average number of pages per chapter rounded to the nearest whole number', function(){
            expect(book.pagesPerChapter()).to.equal(10);
        });
    });
});

describe("Library", function(){
    var book;
    var book2;
    var book3;
    var book4;
    var library;

    beforeEach(function(){
        book = new Book('Eloquent JavaScript', 'Programming', 212, 'Marijn', 21);
        book2 = new Book('JavaScript the Good Parts', 'Programming', 212, 'Dougie', 21);
        book3 = new Book('Infinite Jest', 'Books I might never finish', 1075, 'David', 1);
        book4 = new Book('Eloquent JavaScript 2nd Edition', 'Programming', 252, 'Marijn', 20);
        library = new Library('Rithm School Library', '3338 17th St');
    });

    describe("#initializing", function(){
        it("has a name", function(){
            expect(library.hasOwnProperty('name')).to.equal(true);
            expect(library.name).to.equal('Rithm School Library');
        });
        it("has a location", function(){
            expect(library.hasOwnProperty('location')).to.equal(true);
            expect(library.location).to.equal('3338 17th St');
        });
        it("has a list of books which is initialized as an empty array", function(){
            expect(library.hasOwnProperty('books')).to.equal(true);
            expect(library.books).to.deep.equal([]);
        });
    });
    describe("#addBook", function(){
        it("adds a single book to the array of books and returns the newly modified array", function(){
            expect(library.addBook(book)).to.deep.equal([book]);
        });
        it("can accept an array of books as well and returns the newly modified array", function(){
            expect(library.addBook([book, book2, book3, book4])).to.deep.equal([book, book2, book3, book4]);
        });
        // BONUS - implement these tests!
        it("BONUS: only adds objects created from the Book constructor function", function(){

        });
        it("BONUS: does not add duplicates", function(){
            library.addBook(book);
            expect(library.checkUnique(book)).to.equal(false);
        });
    });
    describe("#listAuthors", function(){
        it("returns an array of the names of the authors for each book in the array of books", function(){
            library.addBook([book, book2, book3, book4]);
            expect(library.listAuthors()).to.deep.equal(['Marijn', 'Dougie', 'David', 'Marijn']);
        });
        it("accepts a parameter, a boolean, which if true it returns an array of unique names of the authors for each book in the array of books", function(){
            library.addBook([book, book2, book3, book4]);
            expect(library.listAuthors(true)).to.deep.equal(['Marijn', 'Dougie', 'David']);
        });
    });
    describe("#sumPages", function(){
        it("returns the total number of pages for each book in the array of books", function(){
            library.addBook([book, book2, book3, book4]);
            expect(library.sumPages()).to.equal(1751);
        });
    });
    describe("#filterByAuthor", function(){
        it("returns an array of books that have the same name as the author parameter", function(){
            library.addBook([book, book2, book3, book4]);
            expect(library.filterByAuthor("Marijn")).to.deep.equal([book,book4]);
        });
    });
});