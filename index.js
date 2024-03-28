/**
 * Bring the Logic of adding two number
 */

// const add = require("myModule.js") // ese locations dene se Js ko pta nhi chalta so, Complete Clear Location do 
                                   // dono (myModule.js & index.js) same location me hi h mtlb current location me
                                   // ar current location ko denote krta hu ./
 const operations = require("./myModule.js")
 console.log(typeof operations);
 console.log(operations);
 
 console.log(operations.add(5,10));
 console.log(operations.prod(5,10));