var expect = chai.expect;

describe('#frequency', function() {
  it('It returns the number of times the searchTerm appears in the array.', function() {
    var arr = ['a', 'b', 'c', 'c'];
    expect(frequency(arr, 'c')).to.equal(2);
  });
});

describe('#flipCase', function() {
  it('It reverses the case of all occurances of the letter in the string.', function() {
    var str = 'amazing Awesome';
    expect(flipCase(str, 'a')).to.equal('AmAzing awesome');
  });
});

describe('#multiplyEvenNumbers', function() {
  it('It returns the product of all even numbers in the array', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(multiplyEvenNumbers(arr)).to.equal(3840);
  });
});

describe('#mode', function() {
  it('It returns the most frequent number in the array of numbers', function() {
    var arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5];
    expect(mode(arr)).to.equal(3);
  });
});

describe('#capitalize', function() {
  it('It returns the same string with the first letter capitalized', function() {
    expect(capitalize('awesome')).to.equal('Awesome');
  });
});

describe('#compact', function() {
  it('It returns an array of values that are truthy values', function() {
    expect(compact([1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4]);
  });
  it('It removes falsey values from the returned array', function() {
    expect(compact([false, NaN, undefined, '', 0, null])).to.deep.equal([]);
  });
});

describe('#partition', function() {
  it('It returns an array with two arrays, a truthy one and falsey one', function() {
    function isOdd(a) {
      return a % 2 !== 0;
    }
    expect(partition([1, 2, 3, 4, 5, 6, 7, 8], isOdd)).to.deep.equal([
      [1, 3, 5, 7],
      [2, 4, 6, 8]
    ]);
  });
});

describe('#intersection', function() {
  it('It returns an array with the values that are the same in each array', function() {
    var arr1 = [2, 3, 4];
    var arr2 = [1, 2, 3];
    expect(intersection(arr1, arr2)).to.deep.equal([2, 3]);
  });
});

describe('#flip', function() {
  it('It returns another function with the arguments switched', function() {
    function subtract(a, b, c) {
      return a - b - c;
    }
    var flipped = flip(subtract);

    expect(flipped(10, 5, 2)).to.equal(-13);
  });
});

describe('#once', function() {
  it('It accepts a function and returns a new function that can only be invoked once', function() {
    function add(a, b) {
      return a + b;
    }
    var oneTime = once(add);
    expect(oneTime(2, 2)).to.equal(4);
    expect(oneTime(2, 2)).to.equal(undefined);
    expect(oneTime(122, 112)).to.equal(undefined);
  });
});
