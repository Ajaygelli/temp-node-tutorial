//  now let me call that exported module function kulasana here in app
const  kulaasana=require('./3-modules');
kulaasana('sdfg');
 kulaasana(names.name2);
 kulaasana(names.name3);

//ets call the names from othe js file
// we called the names through a var names here.
const names=require(`./4-names`);

// Now use the module from namaste.js file 
const namaste=require(`./namaste`);
namaste(names.name2)
namaste(names.name3)
namaste('Ajay') 


//6 we can call the modules in 6
const data=require(`./6-alternative`);
console.log(data.person)
console.log(data.item_list)

//7
require(`./7-mind-flayer`)
console.log(add);


//8






