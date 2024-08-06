//Type Coercion
// Automatic conversion of values from one data type to another typically performed during operations or comparisons involving different data types

const age = prompt("Enter your age");
console.log(typeof age); // if you check the type of age here the type of age is string
const yearEligibleVote = age - 18; // and here the string convert to number that's why call to type coercion
console.log(yearEligibleVote);
console.log(typeof yearEligibleVote);
// 2 program
// const result = "200" + 150;
// console.log(result);

// 3 program
// console.log("a" - 10); // it will give a nan error and you can check it

// 4 program

// const age = prompt("Enter your age");
// const afterYear = age + 1; //idher hamari saath jo hain concatenation ho rahi hain
// console.log(afterYear);

// 5 program
// const age = prompt("Enter your age");
// const afterYear = parseInt(age) + 1; // here we solved the above problem ider hum conversion karthey hain string to int or phir hum add kar dethey hain
// console.log(afterYear);

// 6 program
// const item = prompt("Enter item price");
// const priceAfterTax = item + 1;
// console.log(priceAfterTax);

// 7 program
// const item = prompt("Enter item price");
// const priceAfterTax = parseFloat(item) + 1; // here we solved the above problem ider hum conversion karthey hain string to int or phir hum add kar dethey hain
// console.log(priceAfterTax);
