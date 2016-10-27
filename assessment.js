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

