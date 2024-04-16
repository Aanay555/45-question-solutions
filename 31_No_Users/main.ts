#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Q31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.

let UsrName:string[] =['Ali','Saira','Amir','Hira'];
 
let RemoveUserName = UsrName.pop();

if(RemoveUserName){
    console.log(chalk.redBright.bold("We need to find some users!"));
}
else{
    console.log(chalk.greenBright.bold("All users have been removed"));
}
