/**
 * Created by Administrator on 2018/3/6.
 */
//////////////////////
//-> NodeJs加载模块，require是NodeJs自带的
let user = require('./User');
console.log(`userName:${user.userName}`);
console.log(`userName:${user.sayHello()}`);


let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain;charset=utf-8");

    console.log(url.parse(req.url));

    console.log(util.inspect(url.parse(req.url)));

    res.end("Hello,NodeJs");
})

server.listen(3001,'127.0.0.1',(req,res)=>{
    console.log("服务器已经运行，请打开浏览器，输入:http://127.0.0.1:3001/ 进行访问");
})