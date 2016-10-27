// Write your solutions here:

function frequency(array, primitive){
	var counter=0;
	array.forEach(function(arrayItem,idx){
		if(arrayItem===primitive){
			counter++;
		}
	});

	return counter;
}

function flipCase(string, letter){
	var newString;
	var stringArray = string.split("");
	var newStringArray = stringArray.map(function(arrayItem,idx){
		if(arrayItem.toLowerCase() === letter.toLowerCase()){
			if(arrayItem===letter.toLowerCase()){
				return arrayItem.toUpperCase();
			} else {
				return arrayItem.toLowerCase();
			}
		} else {
		  return arrayItem;
		}
	});

	newString = newStringArray.join("");
	return newString;
}


function multiplyEvenNumbers(numArray) {
	return numArray.reduce(function(acc, arrayItem, idx){
		if(arrayItem%2===0){
			return acc*arrayItem;
		} else {
		  return acc;
		}
	},1);
}