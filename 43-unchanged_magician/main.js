#! /usr/bib/env node
//Q43-Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Harry", "Houdini", "Suzana", "Blaine", "jackson"];
function arryCopy(arr) {
    return [...arr];
}
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magiciansArry[i] = "The Great " + magiciansArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
const CopyMagicianArry = arryCopy(magicians);
make_great(CopyMagicianArry);
console.log("\n\nOriginal Magicians");
show_magicians(magicians);
console.log("\n\nModified Magicians");
show_magicians(CopyMagicianArry);
export {};
