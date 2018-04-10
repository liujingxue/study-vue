/**
 * Created by Administrator on 2018/3/21.
 */
let fs = require('fs');
let path = require('path');
let index = require('./index');
//
function stripBOM(content){
    if(Buffer.isBuffer(content)){
        if(content[0]===0xEF && content[1]===0xBB && content[2]===0xBF){
            return content.slice(3);
        }
    } else {
        if(content.charCodeAt(0)===0xFEFF){
            content=content.slice(1);
        }
        return content;
    }

}

let result = fs.readFileSync(path.join(__dirname,'./1.txt'),'utf8');
result=stripBOM(result);
console.log(result.toString());


