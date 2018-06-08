# JavaScript Assessment

## Instructions

Implement the following functions in the `assessment.js` file. Open `index.html` in your browser to run the tests for the functions you write in `assessment.js`. Refresh the page to re-run the tests.

### `frequency`

This function accepts an array and a searchTerm (this will always be a primitive value) and returns the number of times the searchTerm appears in the array.

```js
frequency([1, 2, 3, 4, 4, 4], 4); // 3
frequency([true, false, true, true], false); // 1
```

### `flipCase`

This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.

```js
flipCase('Hardy har har', 'h'); // "hardy Har Har"
flipCase('hello world', 'o'); // "hellO wOrld"
```

### `multiplyEvenNumbers`

This function accepts an array of numbers and returns the product of all even numbers in the array, or 0 if there are none.

```js
multiplyEvenNumbers([2, 3, 4, 5, 6]); // 48
```

### `mode`

This function accepts an array of numbers and returns the most frequent number in the array of numbers. You can assume that the mode will be unique.

```js
mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4]); // 4
```

### `capitalizeWords`

This function accepts a string of words (separated by spaces) and returns the same string with the first letter of each word capitalized.

```js
capitalize('matt lane'); // "Matt Lane"
capitalize('Whiskey the dog.'); // "Whiskey The Dog."
```

### `compact`

This function accepts an array and returns an array of values that are truthy values.

```js
compact([0, 1, 2, '', NaN, false, undefined, null, 'All done']); // [1,2, "All done"]
```

### `partition`

This function accepts an array and a callback function (which you can assume returns true or false). The function should iterate over each element in the array and invoke the callback function at each iteration. If the result of the callback function is `true`, the element should go into one array; if it's `false`, the element should go into another array. When it's finished, `partition` should return both arrays inside of one larger array.

```js
function isEven(num) {
  return num % 2 === 0;
}

partition([1, 2, 3, 4], isEven); // [[2,4],[1,3]]

partition(['a', 'b', 'b', 'c'], function(letter) {
  return letter === 'b';
}); // [["b", "b"], ["a","c"]]
```

### `intersection`

This function should accept two arrays and return an array with the values that are the same in each array.

```js
intersection([1, 2, 3], [2, 3, 4]); // [2,3]
```

---

## BONUS SECTION

### `flip`

This function should return another function with the arguments switched.

```js
function subtract(a, b, c) {
  return a - b - c;
}

subtract(10, 5, 2); // 3

flipped = flip(subtract);

flipped(10, 5, 2); // -13
```

### `once`

This Higher Order Function accepts a function and returns a version of that function that can only be invoked once. If the function is invoked more than once, it should return `undefined`.

**Hint: Use Closure.**

```js
function add(a, b) {
  return a + b;
}

var oneAddition = once(add);

oneAddition(2, 2); // 4
oneAddition(2, 2); // undefined
oneAddition(12, 200); // undefined
```
