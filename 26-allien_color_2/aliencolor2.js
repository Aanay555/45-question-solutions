//#! /usr/bin/env node
//Q-26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let Alien_color = "green";
if (Alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien. !");
}
else {
    console.log("player just earned 10 points for shooting the alien. !");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
Alien_color = "yellow";
if (Alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien. !");
}
else {
    console.log("player just earned 10 points for shooting the alien. !");
}
export {};
