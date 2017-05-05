// Write your solutions here:
//	frequency
function frequency(array, searchTerm){
    var count = 0;
    array.forEach(function(val){
        if(val === searchTerm){
            count++;
        };
    });
    return count;
}

//	flipCase



//	multiplyEvenNumbers
function multiplyEvenNumbers(nums){
    var total = 1;
    nums.forEach(function(val){
        if(val % 2 === 0){
            total*=val;
        }
    });
    return total;
};

//	mode

//	capitalize
// function capitalize(str){
//     for(var i = 0; i < str.length; i++){
//     	if (str[i] ===)
//     }
//     return newStr;
// }

//	compact
function compact(arr){					//	can this happen with filter?
    var truthies = [];
    arr.forEach(function(val){
        if(val){
            truthies.push(val);
        }
    });
    return truthies;
}


//	intersection
function intersection(arr){
    var arr1 = arr[0];
    var arr2 = arr[1];
    var same = [];
    for(var i = 0; i < arr1.length; i++){
        for(var u = 0; u < arr2.length; u++){
            if (arr1[i] === arr2[u]){
                same.push(arr1[i]);
            }
        }
    }
    return same;
}


//	partition
function partition(arr, fn){
    var truthies = [];
    var falsies = [];
    arr.forEach(function(val){
        if(fn(val) === true){
            truthies.push(val);
        } else {
            falsies.push(val);
        }
    });
    return [truthies, falsies]
}