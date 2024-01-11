/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
  if (n < 0) {
    return null;
  } else if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    return result + array;
  } else {
    array.forEach(function(element) {
      return result += sum(element);
    })
  }
  return result;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(array) {
  var result = 0;
  if (!Array.isArray(array)) {
    return result + array;
  } else {
    array.forEach(function(element) {
      return result += arraySum(element);
    })
  }
  return result;
};

// 4. Check if a number is even.
// isEven(2) // true
// isEven(9) // false
let isEven = function(n) {
  if (n > 2) {
    return isEven(n - 2);
  } else if (n < -2) {
    return isEven(n + 2);
  } else if (n === 2 || n === 0 || n === -2) {
    return true;
  } else {
    return false;
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
  var result;
  if (n <= 1 && n >= -1) {
    return 0;
  }
  if (n > 1) {
    result = n - 1;
    result += sumBelow(n - 1);
  } else if (n < -1) {
    result = n + 1;
    result += sumBelow(n + 1);
  }
  return result;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(x, y) {
  var result = [];
  if (x > y) {
    if (x > y + 1) {
      result = range(x, y + 1).concat(result, y + 1);
    }
  } else {
    if (y > x + 1) {
      result = result.concat(x + 1, range(x + 1, y))
    }
  }
  return result
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  var result;
  if (exp > 2) {
    result = base * exponent(base, exp - 1);
  } else if (exp === 2) {
    result = base * base;
  } else if (exp === 1) {
    result = base;
  } else if (exp === 0) {
    result = 1;
  } else if (exp === -1) {
    result = base / base / base;
  } else if (exp < -1) {
    result = exponent(base, exp + 1) / base;
  }
  return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
  var result;
  if (n === 1) {
    result = true;
  } else if (n > 1) {
    result = powerOfTwo(n / 2);
  } else {
    result = false;
  }
  return result;
};

// 9. Write a function that reverses a string.
// reverse("hello"); // olleh
let reverse = function(string) {
  var result = string[string.length - 1];
  if (string.length === 1) {
    return result;
  } else {
    result = result.concat(reverse(string.slice(0,-1)));
  }
  return result;
};

// 10. Write a function that determines if a string is a palindrome.
// palindrome("koko") // false
// palindrome("rotor") // true
// palindrome("wow") // true
let palindrome = function(string) {
  var result;
  string = string.toLowerCase().replaceAll(' ', '');
  if (string.length === 1) {
    result = true;
  } else if (string.length === 2) {
    if (string[0] === string[1]) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (string[0] === string[string.length - 1]) {
      var newStr = string.slice(1, string.length - 1);
      result = palindrome(newStr);
    } else {
      result = false;
    }
  }
  return result;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  var result = 0;
  if (y === 0) {
    result = NaN;
  } else if (x === 0) {
    result = 0;
  } else if (x < y) {
    if (x < 0) {
      if (y < 0) {
        var newX = x - y;
        result = result + modulo(newX, y);
      } else if (y > 0) {
        var tempX = 0 - x;
        if (tempX < y) {
          result = x;
        } else if (tempX > y) {
          var newX = x + y;
          result = result + modulo(newX, y);
        }
      }
    } else {
      result = x;
    }
  } else if (x === y) {
    result = 0;
  } else if (x > y) {
    if (x < 0) {
      result = x;
    } else if (y < 0) {
      var tempY = 0 - y;
      if (tempY > x) {
        result = x;
      } else if (x > tempY) {
        var newX = x + y;
        result = result + modulo(newX, y);
      }
    } else {
      var newX = x - y;
      result = result + modulo(newX, y);
    }
  }
  return result;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {
  var result = 0;
  if (x === 0 || y === 0) {
    result = 0;
  } else if (y === -1) {
    result = 0 - x;
  } else {
    if (y > 0) {
      result = x + multiply(x, y - 1);
    } else if (y < 0) {
      result = (0 - x);
      result = result + multiply(x, y + 1);
    }
  }
  return result;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
  var result = 0;
  if (y === 0) {
    return NaN;
  } else if (x === 0) {
    return 0;
  } else if (x >= y) {
    if (y < 0) {
      if (x < 0) {
        return 0;
      } else {
        x = x + y;
      }
    } else {
      x = x - y;
    }
    result++;
    result += divide(x, y);
  } else if (x < y) {
    result = 0;
  }
  return result;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
  var result;
  if (x < 0 || y < 0) {
    result = null;
  } else if (x === 0) {
    result = y;
  } else if (y === 0) {
    result = x;
  } else if (x > y) {
    var newY = x % y;
    var newX = y;
    result = gcd(newX, newY);
  } else if (x < y) {
    var newX = y % x;
    var newY = x;
    result = gcd(newX, newY);
  }
  return result;
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
  if (str1.length === 0) {
    if (str2.length === 0) {
      return true;
    } else {
      return false;
    }
  } else if (str2.length === 0) {
    return false;
  }
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
  var result = [];
  if (str.length === 0) {
    return result;
  } else {
    result.push(str[0]);
    result = result.concat(createArray(str.slice(1)));
  }
  return result;
};

// 17. Reverse the order of an array
let reverseArr = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array.pop());
    result = result.concat(reverseArr(array));
  }
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
  var result = [];
  if (length <= 0) {
    return result;
  } else {
    result.push(value);
    result = result.concat(buildList(value, length - 1));
  }
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {
  var result = [];
  if (n <= 0) {
    return result;
  } else {
    if (n % 5 === 0 && n % 3 === 0) {
      result.unshift('FizzBuzz');
    } else if (n % 5 === 0) {
      result.unshift('Buzz');
    } else if (n % 3 === 0) {
      result.unshift('Fizz');
    } else {
      result.unshift(n.toString());
    }
    result = (fizzBuzz(n - 1)).concat(result);
  }
  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
  var result = 0;
  if (array.length === 0) {
    result = 0;
  } else {
    if (array[0] === value) {
      result++;
    }
    array.shift();
    result += countOccurrence(array, value);
  }
  return result;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    var elementToAdd = callback(array[0]);
    result.push(elementToAdd);
    var newArray = array.slice(1);
    result = result.concat(rMap(newArray, callback));
  }
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function(obj, key) {
  var result = 0;
  var keys = Object.keys(obj);
  keys.forEach(function(actualKey) {
    if (actualKey === key) {
      result++;
    }
    if (typeof obj[actualKey] === 'object') {
      result += countKeysInObj(obj[actualKey], key);
    }
  })
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value) {
  var result = 0;
  var keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (obj[key] === value) {
      result++;
    }
    if (typeof obj[key] === 'object') {
      result += countValuesInObj(obj[key], value);
    }
  })
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {
  var keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function(n) {
  var result = [];
  var fibo = [0, 1, 1];
  if (n <= 0) {
    result = null;
  } else if (n === 1) {
    result = fibo.slice(0, 2);
  } else if (n === 2) {
    result = fibo;
  } else {
    result = fibonacci(n - 1);
    result.push(result[result.length -1] + result[result.length - 2]);
  }
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
  var result;
  if (n < 0) {
    result = null;
  } else if (n === 1) {
    result = 1;
  } else if (n === 2) {
    result = 1;
  } else {
    result = nthFibo(n - 1) + nthFibo(n - 2);
  }
  return result;
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array.shift().toUpperCase())
    result = result.concat(capitalizeWords(array));
  }
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    var target = array[0];
    target = target.split('');
    target[0] = target[0].toUpperCase();
    target = target.join('');
    result.push(target);
    var newArray = array.slice(1);
    result = result.concat(capitalizeFirst(newArray));
  }
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {
  var result = 0;
  var keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (obj[key] % 2 === 0) {
      result += obj[key];
    }
    if (typeof obj[key] === 'object') {
      result += nestedEvenSum(obj[key]);
    }
  })
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(array) {
  var result = [];
  array.forEach(function(element) {
    if (!Array.isArray(element)) {
      result = result.concat(element);
    } else {
      result = result.concat(flatten(element));
    }
  })
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, obj) {
  if (obj === undefined) {
    obj = {};
  }
  if (str.length === 0) {
    return obj;
  } else {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
    } else {
      obj[str[0]]++;
    }
    obj = letterTally(str.slice(1), obj);
  }
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
  var result = [];
  if (list.length === 0) {
    return result;
  }
  if (list[0] !== list[1]) {
    result.push(list[0]);
  }
  result = result.concat(compress(list.slice(1)));
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {
  var result = [];
  if (array.length === 0) {
    var element = [].concat(aug);
    result.push(element);
  } else if (array.length === 1) {
    result.push(array[0].concat(aug));
  } else {
    var element = array[0].concat(aug);
    result.push(element);
    var newArray = array;
    newArray.shift();
    result = result.concat(augmentElements(newArray, aug));
  }
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else if (array.length === 1) {
    return array;
  } else {
    if (array[0] !== 0) {
      result.push(array[0]);
    } else if (array[0] === 0) {
      if (array[1] !== 0) {
        result.push(array[0]);
      }
    }
    var newArray = array.slice(1);
    result = result.concat(minimizeZeroes(newArray));
  }
  return result;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else {
    result.push(array[0]);
    var newArray = array.slice(1);
    result = result.concat(alternateSign(newArray));
  }
  result.map(function(element, index) {
    if (index % 2 === 0) {
      if (element < 0) {
        result[index] = element * -1;
      }
    } else {
      if (element > 0) {
        result[index] = element * -1;
      }
    }
  })
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
  var result = '';
  var textDigits = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven',
                    8: 'eight', 9: 'nine'};
  var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var chars = str.split('');
  if (str.length === 0) {
    return result;
  }
  if (digits.includes(+chars[0])) {
    result = textDigits[+chars[0]];
  } else {
    result = chars[0];
  }
  chars.shift();
  result = result.concat(numToText(chars.join('')));
  return result;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function(tag, node) {
  var result = 0;
  if (node === undefined) {
    node = document.querySelector('body');
  }
  if (node.nodeName.toLowerCase() === tag) {
    result++;
  }
  if (node.hasChildNodes()) {
    node.childNodes.forEach(function(child) {
      result += tagCount(tag, child);
    })
  }
  return result;
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
  var result;
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = array.length - 1;
  }
  var mid = Math.floor((max - min) / 2) + min;
  if (target > array[mid] && target <= array[max]) {
    var newArray = array.slice(mid + 1, array.length);
    var next = binarySearch(newArray, target);
    if (next === null) {
      result = null;
    } else {
      result = (mid + 1) + next;
    }
  } else if (target < array[mid] && target >= array[min]) {
    var newArray = array.slice(min, mid);
    result = binarySearch(newArray, target);
  } else if (target === array[mid]) {
    result = mid;
  } else {
    result = null;
  }
  return result;
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
  var result = [];
  if (array.length === 0) {
    return result;
  } else if (array.length === 1) {
    return array;
  } else
  var midPoint = Math.floor(array.length / 2);
  var arrayA = array.slice(0, midPoint);
  var arrayB = array.slice(midPoint, array.length);
  arrayA = mergeSort(arrayA);
  arrayB = mergeSort(arrayB);

  var totalToAdd = arrayA.length + arrayB.length;
  for (i = 0; i < totalToAdd; i++) {
    if (arrayA[0] === undefined) {
      result.push(arrayB[0]);
      arrayB.shift();
    } else if (arrayB[0] === undefined) {
      result.push(arrayA[0]);
      arrayA.shift();
    } else if (arrayA[0] < arrayB[0]) {
      result.push(arrayA[0]);
      arrayA.shift()
    } else if (arrayB[0] < arrayA[0]) {
      result.push(arrayB[0]);
      arrayB.shift()
    } else {
      result.push(arrayA[0]);
      arrayA.shift();
    }
  }
  return result;
};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
  var result;
  if (Array.isArray(input)) {
    result = [];
    input.forEach(function(element) {
      if (Array.isArray(element) || typeof element === 'object') {
        result.push(clone(element));
      } else {
        result.push(element);
      }
    })
  } else if (typeof input === 'object') {
    result = {};
    var keys = Object.keys(input);
    keys.forEach(function(key) {
      if (!Array.isArray(input[key]) && typeof input[key] !== 'object') {
        result[key] = input[key];
      } else if (Array.isArray(input[key])) {
        result[key] = clone(input[key]);
      } else if (typeof input[key] === 'object') {
        result[key] = clone(input[key]);
      }
    });
  }
  return result;
};
