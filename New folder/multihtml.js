const http = require('http');
const fs= require('fs');

//creating a server
const server = http.createServer((req,res)=>{
    console.log("request reached");
    
    res.setHeader('Content-Type','text/html');
    
    let path='./templates/'
    switch(req.url){
        case'/' : 
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html'
            break;
        case '/about-ue' :
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default :
            path += 'error.html'
            res.statusCode= 404;
            break;
    }

    fs.readFile(path,(err,data)=>{
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
