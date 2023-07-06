// const { readfilesync }
//Import read,write from fs
const {readFileSync , writeFileSync} = require('fs');

//take first a variable taking the content in the first.txt file
const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');

//the write will just OverWrite the content in the path file
//if file not ther eit will create it
 writeFileSync('./content/final.txt',
 `
 The contents in the files are 
 1st one follows as -- ${first} 
 2nd one follows as -- ${second}

 `,{flag: 'a+'});
 //now lets read the content in final txt file
 final=readFileSync('./content/final.txt','utf8');
 console.log(final);

 