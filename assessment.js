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


function mode(numArray){
	var numberCount = {};
	numArray.forEach(function(arrayItem,idx){
		if(numberCount[arrayItem]===undefined){
			numberCount[arrayItem]=1;
		} else {
			numberCount[arrayItem] = numberCount[arrayItem] + 1;
		}
	});
	var largestCount=[];
	for(var property in numberCount){
		if(largestCount.length===0){
			largestCount.push(property,numberCount[property]);
		} else {
			if(numberCount[property] > largestCount[1]){
				largestCount[0] = property;
				largestCount[1] = numberCount[property];
			}
		}
	}
	return parseInt(largestCount[0]);
}


function capitalize(string){
	return string.slice(0,1).toUpperCase().concat(string.slice(1));
}


function compact(arrayOfTruth){
	return arrayOfTruth.reduce(function(acc, arrayItem, idx){
		if(arrayItem){
			acc.push(arrayItem);
		}
		return acc;
	},[]);
}



function isEven(num){
    return num % 2 === 0;
}

function partition(array, callback){
	var trueArray=[];
	var falseArray=[];
	array.forEach(function(arrayItem,idx){
		if(callback(arrayItem)){
			trueArray.push(arrayItem);
		} else {
			falseArray.push(arrayItem);
		}
	});
	return [trueArray, falseArray];
}


function intersection(array1, array2){
	var results=[];
	array1.forEach(function(arr1Item,idx){
		array2.forEach(function(arr2Item,dix){
			if(arr1Item === arr2Item){
				results.push(arr1Item);
			}
		});
	});
	return results;
}


function subtract(a,b,c){
    return a-b-c;
}
subtract(10,5,2); // 3


function flip(){
	var outsideArgs = [].slice.call(arguments);
	console.log(outsideArgs);
	outsideArgs.reverse();
	return function returnedFunc(){
		// return 
	};
}

flipped = flip(subtract);
flipped(10,5,2);








