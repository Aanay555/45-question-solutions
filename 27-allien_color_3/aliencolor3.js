// #! /usr/bin/env node
//Q27-Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
let aliencolor = "green";
// version-1
if (aliencolor === "green") {
    console.log("version-1 :the player earned 5 points.");
}
else if (aliencolor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (aliencolor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select the correct color for getting points");
}
//version-2
aliencolor = "yellow";
if (aliencolor === "green") {
    console.log("the player earned 5 points.");
}
else if (aliencolor === "yellow") {
    console.log("version-2 :the player earned 10 points.");
}
else if (aliencolor === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select the correct color for getting points");
}
//version-3
aliencolor = "red";
if (aliencolor === "green") {
    console.log("the player earned 5 points.");
}
else if (aliencolor === "yellow") {
    console.log("the player earned 10 points.");
}
else if (aliencolor === "red") {
    console.log("version-3 : the player earned 15 points.");
}
else {
    console.log("Please select the correct color for getting points");
}
export {};
