"use strict";
// #! /usr/bin/env node
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//create variable
let alien_color = "green";
//test conidtion
if (alien_color === "green") {
    console.log("player just earned 5 points ! 'green'");
}
// Write one version of this program that passes the if test and another that fails. 
alien_color = "red";
//(The version that fails will have no output.)
if (alien_color === "red") {
    console.log("player just earned 5 points ! 'green'");
}
