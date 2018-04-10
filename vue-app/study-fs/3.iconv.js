/**
 * Created by Administrator on 2018/3/21.
 */
let http = require('http');
let iconv = require('iconv-lite');
let url = 'http://www.qq.com';
http.get(url,function(res){
    let arrBuf = [];
    let bufLength = 0;
    res.on('data',function(chunk){
        arrBuf.push(chunk);
        bufLength+=chunk.length;
    });
    res.on('end',function(){
        let chunkAll = Buffer.concat(arrBuf,bufLength);
        let strJson = iconv.decode(chunkAll,'gb2312');
        console.log(strJson);
    });
});