/**
 * Created by Administrator on 2018/3/16.
 */
const express = require('./express');
const app = express();
//最重要的是路由功能，根据不同的方法和不同的路径，返回不同的内容
//定义路由规则
app.get('/hello',(req,res)=>{
    res.end('hello');
});

app.get('/world',(req,res)=>{
    res.end('world');
});

app.listen(8089, ()=>{
    console.log('server started at 8089');
});