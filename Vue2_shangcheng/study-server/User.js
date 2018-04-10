/**
 * Created by Administrator on 2018/3/6.
 */

//->NodeJs的导出模块的写法
module.exports = {
  userName:"Jack",
  sayHello:function(){
    return 'Hello';
  }
}

//->另一种写法
// exports.userName = "Tom";
// exports.sayHello = function(){
//   return 'World';
// }


