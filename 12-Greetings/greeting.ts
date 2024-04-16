#! /usr/bin/env node
//Q-12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let freindsNames1: string[]= ["uzma","saima","tahira","hira"];
const messge : string= " Eid Greeting for my Loving Friend   : ";

for (let a=0; a<freindsNames1.length; a++)
{
    console.log(messge + freindsNames1[a]);
}
