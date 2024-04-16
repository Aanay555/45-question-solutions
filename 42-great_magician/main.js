#! /usr/bin/env node
//Q42-Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ["Harry", "Houdini", "Suzana", "Blaine", "jackson"];
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magicians[i] = "The Great " + magiciansArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
export {};
