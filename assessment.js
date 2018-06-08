// Write your solutions here:

function frequency(arr, term) {
  let count = 0;
  arr.forEach(element => {
    if (element === term) {
      count += 1;
    }
  });

  return count;
}

function flipCase(str, char) {
  let flipped = str.split('');

  for (let i = 0; i < flipped.length; i++) {
    //console.log(str[i], char);

    if (flipped[i] === char.toUpperCase()) {
      flipped[i] = char.toLowerCase();
    } else if (flipped[i] === char.toLowerCase()) {
      flipped[i] = char.toUpperCase();
    }

    //console.log(flipped);
  }

  return flipped.join('');
}

function multiplyEvenNumbers(arr) {
  let product = 1;

  arr.forEach(e => {
    if (e % 2 === 0) {
      return (product = product * e);
    }
  });

  return product % 2 === 0 ? product : 0;
}

function mode(arr) {
  let result = {};
  let most = '';
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = ++result[arr[i]] || 1;
  }

  for (let key in result) {
    if (result[key] > max) {
      max = result[key];

      most = key;
    }
  }
  //console.log(result);
  //console.log(most);

  return Number(most);
}

function capitalizeWords(str) {
  let result = str.split(' ');

  for (let i = 0; i < result.length; i++) {
    //console.log(result[i]);

    var temp = result[i].split('');

    temp[0] = temp[0].toUpperCase();

    //console.log(temp);

    result[i] = temp.join('');
  }

  return result.join(' ');
}

function compact(arr) {
  let result = [];

  arr.forEach(e => {
    if (e) {
      return result.push(e);
    }
  });

  return result;
}

function partition(arr, callback) {
  let result = [[], []];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result[0].push(arr[i]);
    } else {
      result[1].push(arr[i]);
    }
  }

  return result;
}

function intersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}

/** BONUS PROBLEMS BELOW */

function flip() {
  return function(args) {
    for (let i = 0; i < Math.floor(args.length / 2); i++) {
      [args[i], args[args.length - 1 - i]] = [
        args[args.length - 1 - i],
        args[i]
      ];
    }
  };
}

function once() {
  let count = 0;

  if (count < 1) {
    count++;

    return function() {};
  } else {
    return undefined;
  }
}
