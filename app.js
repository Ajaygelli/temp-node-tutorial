const {createReadStream} = require('fs')

const stream = createReadStream('./content/newBigfile.txt');


stream.on('data',(result)=>{
    console.log(result)
})