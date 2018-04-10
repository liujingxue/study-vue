/**
 * Created by Administrator on 2018/3/6.
 */

////////////////////
//->NodeJs去调用慕课网的接口
//->去调取接口
  //->使用http.get()调取接口, 是可以调取接口成功的，是需要在服务端去调取接口，NodeJs作为中间层
// res.on()是监听

let http = require('http');
let util = require('util');

let aUrl = "http://www.chenxingplan.com/api/articles?pageIndex=1&pageSize=10",
    bUrl = "http://www.imooc.com/u/card";

http.get(aUrl,(res)=>{
  let data = '';
  res.on("data",(chunk)=>{
    data += chunk;
  })

  res.on("end",()=>{
    let result = JSON.parse(data);

    console.log(util.inspect(result))
    console.log("result:"+result.msg);
  })
});
