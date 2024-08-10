// What is Function

// A function is a piece of code that does a specific job. You can use it whenever you need by calling its name, often providing inputs (called arguments), and it can give you back a result.

// What is Parameters
// Parameter: A parameter is a placeholder in a function's definition. It's like a variable that you set up to receive input when the function is called.

// What is Arguments
// Argument: An argument is the actual value you pass to the function when you call it. This value is assigned to the corresponding parameter.

// Now Here is Example And First we check code without code

// const now = new Date();
// const getHours = now.getHours();
// const getMin = now.getMinutes();
// alert("Time " + getHours + " : " + getMin);

// Now we are going through function
function tellTime() {
  const now = new Date();
  const getHours = now.getHours();
  const getMin = now.getMinutes();
  alert("Time " + getHours + " : " + getMin);
}

// how many time you call from here and you can call from here and reusability of function
// tellTime();
// tellTime();
// tellTime();

// Function say Hello

// function greeting() {
//   console.log("Hello");
// }

// greeting();

// function with parameters
function greetUser(name) {
  alert("Hello " + name);
}
greetUser("Abdul Haseeb");
