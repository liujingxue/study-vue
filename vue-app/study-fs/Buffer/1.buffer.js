/**
 * Created by Administrator on 2018/3/22.
 */
//Buffer是global上的属性
//申请内存可以存放图片文本
//他长的很像数组
// let buffer = Buffer.alloc(6);//这种申请方式内存永远是干净的
// // let buffer = Buffer.allocUnsafe(6);//他申明buffer比较快
// buffer.fill(1,3,5)
// console.log(buffer);

// 通过长度来申请
//通过字符串来申请


let buffer = Buffer.alloc(12);
let buf1 = 'd';
let buf2 = 'ee';
//写入的内容，偏移量，长度
//往里面写
buf1.write(buffer,0,3,'utf8');_
buf2.write(buffer,3,9,'utf8');