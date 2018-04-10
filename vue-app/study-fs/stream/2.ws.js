/**
 * Created by Administrator on 2018/3/22.
 */
//可写流，就是往里面写
//当你往可写流里写数据的时候，不是立即写入文件的，而是先写入缓存区，
//缓存区的大小就是highWaterMark,默认值是16k。
    //然后等缓存区满了之后再次真正的写入文件里。
let fs = require('fs')
let ws = fs.createWriteStream('./2.txt',{
    flags:'w',//行为，写入
    mode:0o666,
    start:0,//开始写的位置
    highWaterMark:3
});
//如果缓存区已满，返回false，如果缓存区未满，返回true
//如果能接着写，返回true。如果不能接着写，返回false。
//按理说如果返回了false，就不能再往里面写了，但是如果真写了，
//也不会丢失，会缓存在内存里。等缓存区清空之后，再从内存里读出来。
let flag = ws.write('1');
console.log(flag);
flag = ws.write('2');
console.log(flag);
flag = ws.write('3');
console.log(flag);


fs.readFile('./2.txt',function(err,data){
    console.log(data.toString());
});

