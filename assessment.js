// // Write your solutions here:
// ### `frequency`
// This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.

function frequency(arr,term){
var newArr = 0;
for(var i = 0; i<arr.length;i++){
	if(arr[i] === term){
		newArr++
	}
	}return newArr
}


var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x){
   return x * 2;
});

// ### `flipCase`
// This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.


function flipCase(str,letter){
	var str = str.split(" ")

}

flipCase("Hardy har har", "h"); // "hardy Har Har"
/// multiply evens

function multiplyEvenNumbers(arr){
var evens = 1

    for(var i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            evens = evens * arr[i]
        }
    }
    
    return evens
}
multiplyEvenNumbers([1,2,3,4,5,6,7,8,9,10]);

// ### `mode`

// This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique.


function mode(arr){
	var sort = arr.sort;
    


	return sort;
}

mode([2,4,1,2,3,3,4,4,5,4,4,6,4,6,7,4]); // 4


// capitalize 
function capitalize(str){
  return str[0].toUpperCase() + str 
}