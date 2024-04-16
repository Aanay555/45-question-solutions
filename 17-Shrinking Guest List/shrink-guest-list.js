#! /usr/bin/env node
"use strict";
//Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_list4 = ["Imran Ghori", "Nabeel Rana", "Yousaf Khan"];
let absentGuest2 = 'Nabeel Rana';
let newGuest2 = "Ali Ansari";
guest_list4[1] = newGuest2;
console.log(`Mr. ${absentGuest2} is not coming in Party.`);
console.log('Great News, more three Guests are invited for a Big Dinner');
guest_list4.unshift('Ali Haider');
guest_list4.splice(2, 0, 'Mustafa kamal');
guest_list4.push('Khan Baba');
for (let c = 0; c < guest_list4.length; c++) {
    console.log('Mr.' + guest_list4[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz presence will be very honourable for me. \n\n Thanks and will Wait\n');
}
console.log('\nSorry we couldt arrange a big table for dinner thats why there are only 2 seats available for guests.');
// remove guests
while (guest_list4.length > 2) {
    let remov_guest = guest_list4.pop();
    console.log(`Sorry , Mr. ${guest_list4} , You are not invited due to couldt arrange big Dinner table. `);
}
//remaining 2 guests
for (let c = 0; c < guest_list4.length; c++) {
    console.log('Mr.' + guest_list4[c] + ',\n\n Its my pleasure you are still inviting in our party. \n\n Thanks and will Wait\n');
}
//remove guests
guest_list4.splice(0, 2);
console.log(guest_list4);
