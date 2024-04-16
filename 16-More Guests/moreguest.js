#! usr/bin/env node
//Q16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guest_list3 = ["Imran Ghori", "Nabeel Rana", "Yousaf Khan"];
let absentGuest1 = 'Nabeel Rana';
let newGuest1 = "Ali Ansari";
guest_list3[1] = newGuest1;
for (let c = 0; c < guest_list3.length; c++) {
    console.log('Mr.' + guest_list3[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz it will be very honourable for me. \n\n Thanks and will Wait\n');
}
console.log(`Mr. ${absentGuest1} is not coming in Party.`);
console.log('Great News, more three Guests are invited for a Big Dinner');
guest_list3.unshift('Ali Haider');
guest_list3.splice(2, 0, 'Mustafa kamal');
guest_list3.push('Khan Baba');
for (let c = 0; c < guest_list3.length; c++) {
    console.log('Mr.' + guest_list3[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz it will be very honourable for me. \n\n Thanks and will Wait\n');
}
export {};
