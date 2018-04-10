/**
 * Created by Administrator on 2018/3/23.
 */
//异步的发展流程
//异步 同步
//callback -> promise -> generator+co ->async+await
//读文件读到后再去写文件
//->先干一件事 中间去干其他的事 最终在回来干这件事 同步：同步连续执行
// callback
// 读文件读到后再去写文件
let fs = require("fs");//readFile
//异步不支持try/catch,try/catch只针对同步代码
fs.readFile('./1.txt','utf8',(err,data)=>{//error-first
    console.log(data);
});
//并行

function runAsynnc(){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('执行完成');
            resolve('随便什么数据');
        },2000);
    });
    return p;
}
runAsynnc().then((data)=>{
    console.log(data);
    return 'aa';
}).then((data)=>{
    console.log(data);
});



