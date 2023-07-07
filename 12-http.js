// const http=require('http');


//  const server=http.createServer( (req,res)=>{

//     if(req.url=='/'){
//         res.end('Waiting for Project K!')
//     }

//     if(req.url=='/confedential')
//    // res.write('Welcome to Project K!')
//     res.end('Welcome to Project K LORD VISHNU')


//  })

 server.listen(5000)


 const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==='/')
    {
        res.end('Hello!')
    }
    else if(req.url==='/about')
    {
        res.end('U can see here about our company Project K!')
    }

    else{
    res.end('Error pls check whay u are try to do  ')

    }
})

server.listen(8000,()=>{
    console.log('server is ready..')
})
 
