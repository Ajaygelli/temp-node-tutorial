
const Eventemitter= require('events');
//Lets take the module i mean import it.
const customEmitter= new Eventemitter()

customEmitter.on('response',()=>{
    console.log('data recieved');
})

customEmitter.emit('response')