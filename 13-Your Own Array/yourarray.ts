#! /usr/bin/env node
//Q13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportTypes: string[] = ["Car", "Train","Bike", "Aeroplane", "cycle"];

for (let b=0; b<transportTypes.length ; b++){

    console.log('I would like to own a '   + transportTypes[b]);
}