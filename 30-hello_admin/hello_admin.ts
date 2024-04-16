//#! /usr/bin/env node
//Q-30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const username :string[] = ['admin','Ali','Hina','Kamran','Saima'];

    for(let a=0 ; a<username.length ; a++)
    {
        if(username[a] === 'admin')
        {
            console.log('Hello admin, would you like to see a status report?');
        }
    
        else{
           console.log(`Hello ${username[a]}, thank you for logging in again.`)

        }
    }
