/**
 * Created by Administrator on 2018/3/28.
 */
let fs = require('fs');
let r = fs.createReadStream('./1.txt',{
    flags: 'r',
    encoding:'utf8',
    autoClose:true,
});
r.on('open',(fd)=>{
    console.log('文件被打开',fd);
})
r.on('readable',()=>{
    console.log('r reradable');
})
r.on('data',(chunk)=>{
    console.log('read',chunk.length,chunk);
})
r.on('end',()=>{
    console.log('read end');
})
r.on('close',()=>{
    console.log('file was closed');
})
r.on('error',(err)=>{
    console.log('error',err.message);
})

