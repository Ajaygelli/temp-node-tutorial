
const Eventemitter= require('events');
//Lets take the module i mean import it.
const customEmitter= new Eventemitter()


//it listens with word respond
customEmitter.on('response',(Name,RollNo)=>{
    console.log(`data recieved UserName: ${Name} and RollN.O : ${RollNo}`);
})
//it emits 
customEmitter.emit('response','Ajay','U20EC108');

customEmitter.on('hmm',()=>{
    console.log(`other data vaarient recieved`);
})
customEmitter.emit('hmm')


//its always the event should listen first then emit it



// $ git remote -v
// $ git remote add origin https://github.com/Ajaygelli/temp-node-tutorial.git
// $ git push -u origin main


// $ git remote remove origin  //to remove git

