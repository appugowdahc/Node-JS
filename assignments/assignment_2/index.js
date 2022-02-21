const http = require("http");
const fs = require("fs");
const path = require("path");

fs.writeFile("index.html","<h1>Hello World</h1>", err=>{
    console.log(err);
})
const server = http.createServer((req, res) =>{
    fs.readFile(path.join(__dirname, "index.html"),{encoding: "utf-8"} ,(err,data)=>{
        res.end(data);
    })
})

server.listen(3000, ()=> console.log("server is responding"))


//assignments\assignment_2\index.js