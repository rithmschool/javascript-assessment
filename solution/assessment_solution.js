// Write your solutions here:

function frequency(arr, term) {
  return arr.reduce((acc, cur) => {
    if (cur === term) {
      acc++;
    }
    return acc;
  }, 0);
}

function flipCase(str, letter) {
  let newStr = '';
  for (let char of str) {
    if (letter.toLowerCase() === char.toLowerCase()) {
      if (char.charCodeAt(0) > 96) {
        newStr += char.toUpperCase();
      } else {
        newStr += char.toLowerCase();
      }
    } else {
      newStr += char;
    }
  }
  return newStr;
}

function multiplyEvenNumbers(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  let product;

  for (let num of arr) {
    if (num % 2 === 0) {
      if (!product) {
        product = num;
      } else {
        product *= num;
      }
    }
  }

  return product || 0;
}

function mode(arr) {
  let frequencyCounter = {};
  let mostFrequent = arr[0];

  for (let num of arr) {
    if (!frequencyCounter[num]) {
      frequencyCounter[num] = 1;
    } else {
      frequencyCounter[num]++;
    }

    if (frequencyCounter[mostFrequent] < frequencyCounter[num]) {
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}

function compact(arr) {
  return arr.filter(val => !!val);
}

function partition(arr, callback) {
  return arr.reduce(
    (acc, cur) => {
      if (callback(cur)) {
        acc[0].push(cur);
      } else {
        acc[1].push(cur);
      }
      return acc;
    },
    [[], []]
  );
}

function intersection(arr1, arr2) {
  return arr1.filter(arr1Val => arr2.includes(arr1Val));
}

function flip(fn) {
  return (...args) => fn(...args.reverse());
}

function once(fn) {
  let count = 0;
  return function(...args) {
    if (count === 0) {
      count++;
      return fn(...args);
    }
  };
}
