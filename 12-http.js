const http=require('http');


 const server=http.createServer( (req,res)=>{

    if(req.url=='/'){
        res.end('Waiting for Project K!')
    }

    if(req.url=='/confedential')
   // res.write('Welcome to Project K!')
    res.end('Welcome to Project K LORD VISHNU')


 })

 server.listen(5000)
 
