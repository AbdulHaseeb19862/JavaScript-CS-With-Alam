//Program 1
// This is the program of vowel count and also print that vowel which have include in the string
// let vowelCount = 0;
// function countVowel(str) {
//   str = str.toLowerCase();
//   var vowel = "aeiou";
//   var vowelInclude = [];
//   for (var i = 0; i < str.length; i++) {
//     if (vowel.includes(str[i])) {
//       vowelCount++;
//       // vowelInclude.push(str[i]); // you can print it in array as well
//       vowelInclude = vowelInclude + str[i]; // without print of array
//     }
//   }
//   return vowelInclude;
// }

// const result = countVowel("Hello Every One");
// console.log(vowelCount);
// console.log(result);

// Program 2
// Reverse of String

// What is join()? The join() method is used to combine all the elements of an array into a single string.
// function reverseString(str) {
//   // let revers = str.split("").reverse().join();
//   // let revers = str.split("").join();

//   return revers;
// }
// const result = reverseString("Hello");
// console.log(result);

// Note: reverse() is a method that only works on arrays, not strings.
// function reverseString(str) {
//   let reverse = str.split("").reverse().join();
//   return reverse;
// }

// const result = reverseString("Hello");
// console.log(result);

// Program 3
// Calculate the Sum of an Array:

// function sumArray(anArr) {
//   var sum = 0;
//   for (var i = 0; i < anArr.length; i++) {
//     sum = sum + anArr[i];
//   }
//   return sum;
// }

// const result = sumArray([10, 20, 30, 40, 50]);
// console.log(result);

//Program 4
// Find the Maximum Number in an Array:

// function maximumNumber(anArr) {
//   var largest = anArr[0];
//   for (var i = 0; i < anArr.length; i++) {
//     if (largest < anArr[i]) {
//       largest = anArr[i];
//     }
//   }
//   return largest;
// }

// var result = maximumNumber([20, 10, 50, 30]);
// console.log(result);

// Program 5
// Calculate the Area of a Circle:
// Formula Area=π×radius^2;

// function findAreaCircle(radius) {
//   var squareRadius = radius * radius;
//   let areaOfCircle = Math.PI * squareRadius;
//   return areaOfCircle;
// }

// const result = findAreaCircle(10);
// console.log(result.toFixed(2));

//Program 6:
// Check for Palindrome:

// function isPalindrom(str) {
//   var newStr = str.toLowerCase();
//   var reversed = newStr.split().reverse().join();
//   return newStr === reversed
//     ? `yes it is a palindrom ${newStr}`
//     : `No, it is not a palindrom ${newStr}`;
// }

// const result = isPalindrom("Madam");
// console.log(result);

//Program7: Find the Smallest Number:

// function smallestNum(str) {
//   var smallest = str[0];
//   for (var i = 0; i < str.length; i++) {
//     if (smallest > str[i]) smallest = str[i];
//   }

//   return smallest;
// }

// const result = smallestNum([10, 1, 30, 20, 50, 100]);
// console.log(result);

// Program 8: Convert Celsius to Fahrenheit:
// function celsiusToFahrenheit(celsius) {
//   const fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }
// const result = celsiusToFahrenheit(10);
// console.log(result);
