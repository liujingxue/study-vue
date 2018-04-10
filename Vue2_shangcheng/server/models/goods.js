/**
 * Created by Administrator on 2018/3/7.
 */

/////////////////////////
//-> 商品接口
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//->定义一个商品模型
var productSchema = new Schema({
  "productId":String,
  "productName":String,
  "salePrice":Number,
  "productImage":String
});
//-> goods表示跟goods集合进行关联。  指定goods集合
module.exports = mongoose.model('Good', productSchema,'goods');

