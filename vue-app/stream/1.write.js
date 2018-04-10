/**
 * Created by Administrator on 2018/3/28.
 */
//write end on('drain')
let fs = require('fs')
let path = require('path')
//写的时候文件不存在 会创建文件
//path.join()什么意思
//path.join()方法拼接路径，并返回该路径，结合__dirname可以达到path.resolve()方法同样的效果
console.log(path.join(__dirname,'1.txt'));
let ws = fs.createWriteStream(path.join(__dirname,'1.txt'),{
    highWaterMark:3,//缓存区
    autoClose:true,//写完流自动关闭
    flags:'w',
    encoding:'utf8',
    mode:0o666,
    start:0,
})
//写内容的时候 必须是字符串或者buffer
for(let i=0;i<9;i++){
    let flag = ws.write(i+'');//第一次写一个字符
    console.log(flag);
}
