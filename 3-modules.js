//lets see modules
//const one defined we cant change it again ,and its a global variable
const sayhlo=(name)=>{
    console.log(`hlo my name is ${name}.`);
}


sayhlo(`ajay`);

//create a function with js to take input as name  
const kulaasana=(name)=>
{
console.log(`reddy garu meru kusalamena ~ft ${name}`);
}

//now let me export my funtion kulasaana in file 3 to a module
module.exports=kulaasana;
// kulaasana('Ajay');
// kulaasana('Babu');