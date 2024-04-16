// #! /usr/bin/env node
//Q-21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
//create object
interface HP_Laptop{
    Brand : string,
    Processor : any,
    RAM : string | number,
    Hard_disk : string | number
 }
  let laptop : HP_Laptop =  {
     Brand : 'HP' ,
     Processor : 'IntelCorei7' ,
     RAM : 'DDR4 8RAM',
     Hard_disk : '500ssd'
  } 
      console.log(laptop);
 
  