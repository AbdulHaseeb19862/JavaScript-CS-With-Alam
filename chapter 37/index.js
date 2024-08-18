// Function :Passing data back from them

// Let's begin with simple function
// function greeting() {
//   console.log("Hello and how are you");
// }

// greeting();

// function greeting(message) {
//   console.log(message);
// }

// greeting("Hello and how are you");

// Returning Value Simple Example
// function addition(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// const total = addition(10, 20);
// console.log(total);

// complex example: calculate matric percentage

function calculateObtainedMarks(marks) {
  let sum = 0;
  for (var i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
}

const obtainedMarks = calculateObtainedMarks([90, 95, 99, 98, 90]);

let totalMarks = 500;
let percentage = (obtainedMarks / totalMarks) * 100;

console.log(percentage.toFixed(2));
