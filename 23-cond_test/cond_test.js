#! /usr/bin/env node
//Q-23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
let Car = 'Honda';
// /// 5 True conditions
// //TEST-1
// console.log("Is Car === 'Honda'? ! predict True.");
// console.log("Car === 'Honda");
// //test 2
// console.log("Is Car == 'Honda'? ! predict True.");
// console.log("Car == 'Honda");
// //test 3
// console.log("Is Car != 'Honda'? ! predict True.");
// console.log("Car != 'vitz");
// //test 4
// console.log("Is Car.Lower case 'honda'? ! predict True.");
// console.log(Car.toLowerCase() =='honda');
// //test 5
// console.log("Is Car.Upper case  'HONDA'? ! predict True.");
// console.log(Car.toUpperCase()== 'HONDA');
/// 5 False conditions
//test-1
console.log("Is Car.Upper case  'honda'? ! predict False.");
console.log(Car.toUpperCase() == 'honda');
//test-2
console.log("Is Car.Lower case  'HONDA'? ! predict False.");
console.log(Car.toLowerCase() == 'HONDA');
//test -3
console.log("Is Car !=  'Honda'? ! predict False.");
console.log(Car != 'Honda');
//test-4
console.log("Is Car ==  'honda'? ! predict False.");
console.log(Car == 'honda');
//test-5
console.log("Is Car === 'suzuki'? ! predict False.");
console.log(Car === 'suzuki');
export {};
