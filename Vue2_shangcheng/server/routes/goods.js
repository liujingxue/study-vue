/**
 * Created by Administrator on 2018/3/8.
 */

///////////////////////
//-> 路由,这里写二级路由

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//-> 去连接本地mongodb
mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

//-> 通过on()去监听有没有连接成功
mongoose.connection.on("connected", ()=>{
  console.log("mongodb connected success");
});

mongoose.connection.on("error", ()=>{
  console.log("mongodb connected fail");
});

mongoose.connection.on("disconnected", ()=>{
  console.log("mongodb connected disconnected");
});

//-> 查询
// next表示向下继续执行
router.get('/', function(req, res, next) {
  // res.send('this is good.');

  //->查询数据库
  // find是模型自带方法
  Goods.find({},(err,doc)=>{
    if(err){
      res.json({
        status:'1',
        msg:err.message
      });
    }else{
      res.json({
        status:'0',          // 0代表请求成功，1代表失败
        msg:'',
        result:{
          count:doc.length,  // 总条数
          list:doc           // doc是查询出来的集合
        }
      });
    }
  })
});


router.get('/detail', function(req, res, next) {
  res.send('this is good detail.');
});


module.exports = router;
