const http = require('http');
const fs= require('fs');

//creating a server
const server = http.createServer((req,res)=>{
    console.log("request reached");
    
    res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello</h1>');
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
    // res.end();
});


//listening for server
server.listen(3000,'localhost',()=>{
    console.log("listning on 3000");
})