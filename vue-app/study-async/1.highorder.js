/**
 * 1.在JS里，函数是一等公民，可以作为函数的返回值，也可以作为
 */
//判断一个参数是否是字符串
// function isString(param){
//     return Object.prototype.toString.call(param)=='[object String]';
// }
// console.log(isString('123')); //true
// console.log(isString({}));    //false
//
// //判断一个参数是否是数组
// function isArray(param){
//     return Object.prototype.toString.call(param)=='[object Array]';
// }
// console.log(isArray({}));     //false
// console.log(isArray([]));     //true

//函数可以作为返回值
// function isType(type){
//     return function(param){
//         return Object.prototype.toString.call(param)==`[object ${type}]`;
//     }
// }
// let isString = isType('String');
// let isArray = isType('Array');
// console.log(isString({}));           //false
// console.log(isArray([]));            //true

//lodash after指定一个函数被调用多少次才会真正执行
function eat(){
    console.log('吃完了');
}
function after(times,fn){
    let count = 0;
    return function(){
        if(++count==times){
            fn();
        }
    }
}
let newEat = after(3,eat);
newEat();
newEat();
newEat();