//#! /usr/bin/env Node
//Q-24  Tests for equality and inequality with strings
// check equality
console.log("Check equality with string :", "Pakistan" === "Pakistan");
console.log("Check equality with string : ", "Pakistan" != "Pakistan");
// check inequality
console.log("Check equality with string :", "Pakistan" != "Peshawer");
console.log("Check equality with string : ", "Pakistan" == "Peshawer");
// Tests using the lower case function
// check Lowercase
console.log("Check Lowercase of string : ", "KARACHI".toLowerCase() === "karachi");
console.log("Check Lowercase of string : ", "karachi".toLowerCase() != "karachi");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equality and inequality tes with numbers
console.log("Check Equality with numbers : ", 40 === 40);
console.log("Check inequality with numbers : ", 40 != 40);
//greater than or equal to, and less than or equal to
console.log("Check greater than or equal to :", 20 >= 20);
console.log("Check greater than or equal to :", 10 >= 20);
console.log("Check less than or equal to :", 20 <= 20);
console.log("Check less than or equal to :", 30 <= 20);
// Tests using "and" and "or" operators
console.log("check ADD operator :", 12 === 12 && 12 > 11);
console.log("check ADD operator :", 12 >= 12 && 12 <= 11);
console.log("check OR operator :", 12 >= 12 || 12 <= 11);
console.log("check OR operator :", 12 != 12 || 12 >= 11);
// Test whether an item is in a array
const books = ['English', 'Urdu', 'computer', 'science'];
console.log('Check  "Urdu" in an Array: ', books.includes("Urdu"));
console.log('Check  "islamiat" in an Array: ', books.includes("islamiat"));
// Test whether an item is not in a array
const books2 = ['English', 'Urdu', 'computer', 'science'];
console.log('Check  "Maths" is not in an Array: ', books2.includes("Maths"));
console.log('Check  "computer" is not in an Array: ', books2.includes("computer"));
export {};
