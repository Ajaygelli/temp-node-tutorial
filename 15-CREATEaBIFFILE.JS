const {writeFileSync} = require('fs');

for(let i=0;i<1000;i++)
{
    writeFileSync(`./content/newBigfile.txt`,`${i}.  Hey man hru??, welcome to Project K!` ,{flag:'a+'} )
}




