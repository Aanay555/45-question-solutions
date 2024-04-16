#! /usr/bin/env node
//Q14 :Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest_list : string[] = ["Imran Ghori", "Nabeel Rana", "Yousaf Khan"];
for(let c=0; c<guest_list.length; c++) {
 console.log('Dear Mr.' + guest_list[c] + ',\n\n i am intivting you in a party which will held on Sunday Evening, it will be my pleasure that you join my party bcz it will be very honourable for me. \n\n Thanks and will Wait\n')

}