#! usr/bin/env node
 // Q3
// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var myName = "Uzma riaz";
//  //uppercase// 
console.log("uppercase:", myName.toLocaleUpperCase());
//  //lowercase//
console.log("lowercase:", myName.toLocaleLowerCase());
//  //titlecase//
console.log("titlecase:", myName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));