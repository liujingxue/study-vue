/**
 * Created by Administrator on 2018/3/28.
 */
//想读一点写一点
let fs = require('fs');
let path = require('path');
//读
let rs = fs.createReadStream(path.join(__dirname,'./1.txt'),{
    highWaterMark:4
});
//写
let ws = fs.createWriteStream(path.join(__dirname,'./2.txt'),{
    highWaterMark:1
});

// rs.on('data',function(chunk){//chunk读到的内容
//     let flag = ws.write(chunk);
//     if(!flag){
//         rs.pause();
//     }
// })
//
// ws.on('drain',()=>{
//     console.log('干了');
//     rs.resume();
// })

//就是读一点写一点
rs.pipe(ws);

