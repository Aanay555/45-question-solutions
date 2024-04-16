#! /usr/bin/env node
//Q36-T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`The size of the shirt is ${size} and the text is ${text}`);
}
make_shirt(`small`, `I like this shirt.`);
make_shirt(`medium`, `I like this shirt.`);
make_shirt(`latge`, `I like this shirt.`);
make_shirt(`x-large`, `I like this shirt.`);
export {};
