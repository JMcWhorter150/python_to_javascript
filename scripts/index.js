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
// debugger;
let petName = `Sam`;
// When do I do upper-casing in html vs css vs js?
// petName.toUpperCase();
// -wherever you have control

console.log(`${petName.toUpperCase()} is ${petName.length} characters long.`)

// .toUpperCase is a method (i.e., a function that belongs to an object)
// .length is a property (i.e., a variable that belongs to an object)

const aboutMyPet = `${petName.toUpperCase()} is ${petName.length} characters long.`;
console.log(aboutMyPet);

petName = `SamMan`;
console.log(aboutMyPet);

// Stuff we'll do with collections:
// Create
const turkeyDinner = ["sausage balls", "turkey", "dressing", "pecan pie"];
// How do I copy a list?


// Retrieve
// print(turkeyDinner[2])
console.log(turkeyDinner[2])

// How do I retrieve a portion? ("slice" in python)
// How do I retrieve based on a condition?
// How do I transform each item and put that into a new list?

// Update
// turkeyDinner[1] = "Tofurkey"
turkeyDinner[1] = "Tofurkey";

// Delete

// turkeyDinner.pop(1)
// del turkeyDinner[1]
// delete turkeyDinner[1];
// But! This leaves a hole!!!
// Splice can remove an item at a particular spot

// In python, we do this:
// for item in turkeyDinner:
//  print(f"For Turkey Day, I ate {item}")

// In JavaScript
// 1. "classic for-loop" (is the equivalent of python while loop)
for (let count = 0; count < 10; count++) {
    console.log(count);
}
// 2. "new fangled for-loop"

// 3. (for tomorrow) .forEach and friends