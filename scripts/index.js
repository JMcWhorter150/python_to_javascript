// This is a comment
// This is another comment
/*
What?
It looks like a css comment
Yassss.

*/

// Variables! (Storing single pieces of information)
// turkey_legs_consumed = 3
var turkeyLegsConsumed = 3;
// 1. prefix your variables the first time you use them
// 2. Use camelCase!
// 3. Terminate each line with ';'
let turkeysCooked = 2;
// 'var' was the original way to declare variables.
// 'let' is better because
// 1. It gives you more control. (You can limit its use to a specific if/else or a specific loop)
// 2. 

// 'const' is like 'let' (in that it is local), but:
// - you must assign it when you declare it.
// - You can never reassign it.

const numberOfTurkeysICanEat = 1;

// How to use these keywords:
// 1. Create your variables using 'const'
// 2. If you find out that you need to reassign it, change it to 'let'.

// print("Hello World!")
console.log("Hello World!");

// print(turkeysCooked)
console.log(turkeysCooked);

// print(f"I ate {turkeysCooked} turkeys!")
console.log(`I ate ${turkeysCooked} turkeys!`);
// You can use backtick-strings for interpolation.
// - Template Strings
// - Template Literals

// print(f"How many turkeys I should eat {numberOfTurkeysICanEat - turkeysCooked}")
console.log(`Turkeys to eat: ${numberOfTurkeysICanEat - turkeysCooked}`);

const petName = `Sam`;
// When do I do upper-casing in html vs css vs js?
// petName.toUpperCase();
// -wherever you have control

console.log(`${petName.toUpperCase()} is ${petName.length} characters long.`)

// .toUpperCase is a method (i.e., a function that belongs to an object)
// .length is a property (i.e., a variable that belongs to an object)