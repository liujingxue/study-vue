/**
 * Created by Administrator on 2018/3/23.
 */
let fs = require('fs');//文件系统fs.open fs.write fs.read
let path = require('path');
//怎么创建文件夹
//mkdirSybc同步
//目录创建必须保证父级存在才能创建
// fs.mkdir('./a',function(err){
//     if(err) console.log(err);
// });


//创建目录makep mkdir -p
//同步创建 性能低

// function makep(dir){
//     let paths = dir.split('/');
//     for(let i=1;i<=paths.length;i++){
//         let newPath = paths.slice(0,i).join('/');
//         //创建目录需要先干一件事
//         try{
//             //fs.access权限，fs.constants常量，是否ok
//             fs.accessSync(newPath,fs.constants.R_OK)
//         }catch (e){
//             fs.mkdirSync(newPath)
//         }
//     }
// }
//递归创建目录成功
// makep('a/b/c/d/e');



//异步的需要递归
//记住：如果是异步的永远不能用for循环
// function mkdir(dir,callback){
//     let paths = dir.split('/');
//     let index=1;
//     function next(index){
//         if(index>paths.length) return callback();
//         let newPath = paths.slice(0,index).join('/');
//         //fs.access判断文件是否存在
//         fs.access(newPath,function(err){
//             if(err){//如果文件不存在
//                 fs.mkdir(newPath,function(err){
//                     next(index+1);//创建后 继续创建下一个
//                 })
//             }else{
//                 next(index+1);//这个文件存在了 那就创建下一个文件夹
//             }
//         })
//     }
//     next(index);
// }
// mkdir('a/e/w/q/m/n',function(){
//  console.log('完成');
// });





//fs.rmdirSync('a');删除文件夹
//fs.rmdir('a',()=>{});

//fs.unlinkSync('1.js');同步删除文件
//fs.unlink('a.js',()=>{})

//判断文件夹中的内容是文件还是我们的文件夹
//文件夹状态
//stat文件夹状态
// fs.stat('a',(err,stat)=>{
//     console.log(stat.isDirectory());//isDirectory()是否是文件夹
//     console.log(stat.isFile());//isFile()是否是文件
//     //读取当前文件夹下的内容
//     if(stat.isDirectory()){
//         fs.readdir('a',(err,files)=>{
//             console.log(files);
//         })
//     }
// })


// fs.stat('1.api.js',(err,stat)=>{
//    if(stat.isFile()){
//        console.log('是文件');
//    }
// })



//把a文件夹整个删掉
// function removeDir(dir) {
//     let files = fs.readdirSync(dir);//读取到所有内容
//     for(let i=0;i<files.length;i++){
//         let newPath = path.join(dir,files[i]);
//         let stat = fs.statSync(newPath);
//         if(stat.isDirectory()){
//             //如果是文件夹，就递归走下去
//             removeDir(newPath)
//         }else{
//             //文件
//             fs.unlinkSync(newPath)
//         }
//     }
//     fs.rmdirSync(dir);//如果文件夹是空的，就将自己删除掉
// }
// removeDir('a');

//异步删除 promise
//怎么用promise递归删除文件夹
// function removePromise(dir) {
//     return new Promise((resolve,reject)=>{
//         fs.stat(dir,(err,stat)=>{
//             if(stat.isDirectory()){
//                 //异步读文件夹
//                 fs.readdir(dir,(err,files)=>{
//                     //map()是映射
//                     files = files.map(file=>path.join(dir,file)); // [a/b,a/e]
//                     files = files.map(file=>removePromise(file));
//                     //Promise.all()
//                     Promise.all(files).then(()=>{
//                         fs.rmdir(dir,resolve)
//                     });
//                 })
//             }else{
//                 //如果是文件
//                 fs.unlink(dir,resolve)
//             }
//
//         })
//
//     })
// }
// removePromise('a').then(()=>{
//     console.log('删除');
// });



function rmdir(dir,callback){
    fs.readdir(dir,(err,files)=>{
        //读取到文件
        function next(index) {
            let newPath = path.join(dir,files[index]);
            fs.stat(newPath,(err,stat)=>{
                if(stat.isDirectory()){
                    //如果是文件夹
                    //要读的是b里的第一个 而不是去读c
                    rmdir(newPath,()=>next(index+1));
                }
            })
        }
        next(0);
    })
}
rmdir('a',()=>{
    console.log('删除成功');
});







