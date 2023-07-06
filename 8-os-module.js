//OS module is build in so can call directly
const os=require('os');

const time=os.uptime;

console.log(`The system uptime is ${time}`);

const current_os_spec={
    name: os.type(),
    release : os.release(),
    totalmemory : os.totalmem(),
    freememory :  os.freemem()
}


console.log(current_os_spec);

