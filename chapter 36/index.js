// Chapter 36: Function : Passing Them Data
// Parameter: It's like a placeholder or a variable in a function that tells what kind of input the function expects. For example, in a recipe, it might be the ingredient name.

// Argument: It's the actual value or input you give to a function when you use it. In the recipe example, this would be the specific ingredient you add, like "2 cups of sugar."

// function passing(num) {       // This parameter
//   alert(num);
// }

// passing(10); // 10 is argument

// function geetingVariable(great) {
//   alert(great);
// }

// const salam = "Assalam O Alaikum";
// geetingVariable(salam);

//You can give Multiple Parameters in a Function
// function printUserDetail(userName, age, isMarried) {
//   console.log(
//     `Your Name is : ${userName} , your age is : ${age} and your marital status is : ${isMarried} `
//   );
// }
// printUserDetail("Abdul Haseeb", 22, false);

// Arguments Of Order Does Matters
// function printUserDetail(userName, age, isMarried) {
//   console.log(
//     `Your Name is : ${userName} , your age is : ${age} and your marital status is : ${isMarried} `
//   );
// }
// printUserDetail(false, 22,"Abdul Haseeb" );

//If Nothing Provided To Parameters Then It Will Be Undefined
function printUserDetail(userName, age, isMarried) {
  console.log(
    `Your Name is : ${userName} , your age is : ${age} and your marital status is : ${isMarried} `
  );
}
printUserDetail("Abdul Haseeb", 22);
