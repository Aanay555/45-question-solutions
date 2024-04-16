#! usr/bin/env node
"use strict";
//Q15 :Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list
let guest_list2 = ["Imran Ghori", "Nabeel Rana", "Yousaf Khan"];
for (let c = 0; c < guest_list2.length; c++) {
    console.log('Dear Mr.' + guest_list2[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz it will be very honourable for me. \n\n Thanks and will Wait\n');
}
let absentGuest = 'Nabeel Rana';
let newGuest = "Ali Ansari";
guest_list2[1] = newGuest;
for (let c = 0; c < guest_list2.length; c++) {
    console.log('Mr.' + guest_list2[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz it will be very honourable for me. \n\n Thanks and will Wait\n');
}
console.log(`Mr. ${absentGuest} is not coming in Party.`);
