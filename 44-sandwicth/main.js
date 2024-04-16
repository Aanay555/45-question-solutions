#! /usr/bin/env node
//Q44-Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
import chalk from "chalk";
function sandwitch(items) {
    console.log("\nThis sandwich contains: ");
    items.forEach(element => console.log("- " + element));
    console.log(chalk.redBright.bold("\nEnjoy your sandwich!"));
}
//pass array in calling function
sandwitch(["slice_cheese", "chiken_fillet", "mayonnaise", "tomato"]);
sandwitch(["slice_cheese", "lettuce", "mayonnaise"]);
sandwitch(["slice_cheese", "chiken_fillet"]);
