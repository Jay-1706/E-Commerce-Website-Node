// fs module to import krna h , using command as "require" 
const { log } = require('console'); 
const fs=require('fs')
console.log(typeof fs);

/**
 * Read from an external file
 */

// /**
//  * Read in the sync way : sequencial manner:- synchronous manner
//  */
// console.log("Before starting to read");

// //Logic to read
// const content =fs.readFileSync("input.txt")
// //console.log(content); // ye byte me dega output

// //string ke liye
// console.log("Output content is:"+ content); 


// console.log("Last line");

// /**
//  * Read in the async way
//  */
// console.log("Before the starting to read ina async example ");

// fs.readFile("input.txt",(err,content)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("Content of the file is :" + content);
// })

// console.log("Last line in async example");



/**
 * Write the code to write to an external file
 */
 
console.log("Before");
fs.writeFileSync('output2.txt','Hello Jay raj! , Welcome here!!');
console.log("After");