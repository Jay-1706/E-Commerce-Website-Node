const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/hello'){
        res.end('Welcome to Jay Server')
    }else{
        res.end("You are trying to hit a wrong url")
    }
})


server.listen(7091,()=>{
    console.log("Server is started");
})