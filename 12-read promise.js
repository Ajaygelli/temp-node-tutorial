const {readFile,writeFile}=require('fs');
const { resolve } = require('path');

//Now with promise function
//ASYNCit add gi
 const getText= (path) =>{

    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
            else
            {
                resolve(data);
            }
         })

    })
 }
//  //Normal code for reading data from txt file
//  const getdata= readFile(path,'utf-8',(err,data)=>{
//     if(err){
//         return;
//     }
//     else
//     {
//         console.log(data);
//     }
//  })

//if our promise is resolved then we use".then" if failed i mean rejected we use ".catch"
//so .then will handle resolved values where as .catch will handle errors

getText('./content/final.txt')
.then((result)=>console.log(result+'  '))
.catch((err)=>console.log(err))

// u may observe now that getText is an ASYNCHRONUS fun so the next piece of code get exectued 
//then the call back function executed like adding in a callback queue
console.log('sdafghjkl');

getText('./content/second.txt')
.then((result)=>console.log(result))
.catch((err)=>console.log(err))