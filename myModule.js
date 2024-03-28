   // 1. Fisrt ways to Import user defined(custom) module
// let add = (a,b)=>{
//     return a+b
// }

// let prod=(a,b)=>{
//     return a*b
// }
// /*
//  module.exports=add  // the "module.export" keyword make it module

//  module.exports=prod // individual dono se ek hi export hoga,so o/p add 
//                      // ka 5*10=50 aa rha
// */
 
// //So we make Object
// module.exports={
//     add:add,
//     prod:prod
// }

   
    //2. Second ways to import module

exports.add=(a,b)=>{
    return a+b
}

exports.prod=(a,b)=>{
    return a*b
}


