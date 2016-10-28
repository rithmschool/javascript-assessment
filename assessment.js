// Write your solutions here:

// ************************************************************************
// 							frequency
// ************************************************************************

function capitalize(str){
    var toUpper = str[0].toUpperCase();
    return toUpper + str.slice(1);
}


// ************************************************************************
// 							flipCase										   ---------x
// ************************************************************************











// ************************************************************************
// 							multiplyEvenNumbers									---------x
// ************************************************************************









// ************************************************************************
// 							mode												---------x
// ************************************************************************










// ************************************************************************
// 							capitalize										   ---------x		
// ************************************************************************


function capitalize(str){
    var toUpper = str[0].toUpperCase();
    var capitalizedString = "";
    for(var i = 1; i < str.length; i++){
    return toUpper + str.slice(1);
    }
}


// ************************************************************************
// 							compact											   ---------x		
// ************************************************************************



// function compact(arr){
// 	var truthy = [];
// 	for(var i=0; i < arr.length; i++){
// 		if(arr[i] === true){
// 			arr[i].push(truthy);
// 		}
// 	}
// 	return truthy;
// }


// ************************************************************************
// 							flip										      ---------x		
// ************************************************************************

function subtract(a,b,c){
    return a-b-c;
}

function flipped(){

}




// ************************************************************************
// 							once										      ---------x		
// ************************************************************************















// ***********************************************************************************************
// 										 PART TWO		
// ***********************************************************************************************


//BOOK

function Book(title, genre, pageCount, author, numChapters){
    this.title = title;
    this.genre = genre;
    this.pageCount = pageCount;
    this.author = author;
    this.numChapters = numChapters;
}

var theDarkTower = new Book("The Gunslinger", "fantasy", "224", "Stephen King", "11");

var theDarkTower2 = new Book("The Drawing of the Three", "fantasy", "400", "Stephen King", "26");

var theDarkTower3 = new Book("The Waste Lands", "fantasy", "512", "Stephen King", "32");

Book.prototype.toString = function(){
	return this.title + (": ") + this.pageCount + (" pages");
};

Book.prototype.pagesPerChapter = function(){
	return ("The average number of pages per chapter is " + Math.round(this.pageCount / this.numChapters) + " pages");
};





//Library

function Library(name, location, books){
    this.name = name;
    this.location = location;
    this.books = [];
}

var library1 = new Library("SF Public Library: Ortega Branch", "2700 Ortega St.", []);

var library2 = new Library("East Greenwich Public Library", "46 Main St.", []);



Library.prototype.addBook = function(val){
	if(val instanceof Book){
	this.books.push(val);
	}
	return this.books;
};


library1.addBook(theDarkTower);
















