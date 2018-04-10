/**
 * Created by Administrator on 2018/3/21.
 */
//爬虫 淘宝可能就是gbk 把gbk转化成utf8
//iconv-lite包，把gbk转化成utf8
//npm init -y
//npm add iconv-lite

//15:21
let iconv = require('iconv-lite');
let fs = require('fs');
let path = require('path');
let result = fs.readFileSync(path.join(__dirname,'./2.txt'));
console.log(result.toString());

