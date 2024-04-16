#! /usr/bin/env node

//Q-18  Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
let visit_places : string[] = ['Paris','Italy','UAE','Canada','Oman'];
console.log('orignal : ' + visit_places);

//Print your array in alphabetical order without modifying the actual list.
console.log('copy : '+ [...visit_places].sort());

//• Show that your array is still in its original order by printing it.
console.log('orignal : ' + visit_places);

//Print your array in reverse alphabetical order without changing the order of the original list.

console.log('copy : '+ [...visit_places].sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log('orignal : ' + visit_places);

//Reverse the order of your list. Print the array to show that its order has changed.

console.log('orignal : ' + visit_places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log('orignal : ' + visit_places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('orignal : ' + visit_places.sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log('orignal : ' + visit_places.reverse());


