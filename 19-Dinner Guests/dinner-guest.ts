#! /usr/bin/env node
// Q19-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guest_list4 : string[] = ["Imran Ghori", "Nabeel Rana", "Yousaf Khan"];
let absentGuest2: string= 'Nabeel Rana';
let newGuest2: string = "Ali Ansari";
guest_list4[1] = newGuest2;

   guest_list4.splice(2,0,'Mustafa kamal');
   guest_list4.push('Khan Baba');

   for(let c=0; c<guest_list4.length; c++) {
   ;
   }

   //remove guests
   while(guest_list4.length  > 2){
    let remov_guest = guest_list4.pop();
  
   }
   //remaining 2 guests
   for(let c=0; c<guest_list4.length; c++) {
   
   }
   //remove guests
   guest_list4.splice(0, 2);
   console.log(guest_list4);

   //Q-19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

   //total numbers of guset in list
   console.log(`There are numbers of invites Guest : ${guest_list4.length}`);

