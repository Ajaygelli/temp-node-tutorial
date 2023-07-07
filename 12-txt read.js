const {readFile}=require('fs');


//here we read the texxt in first.txt and used utf-8 encoding to convert text to english insted numbers
//if it encountered errors it will return else the data will be printed 
readFile('./content/final.txt','utf-8',(err,data)=>{

    if(err){
        return;
    }
    else{
        console.log(data);
    }

    
})