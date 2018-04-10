/**
 * Created by Administrator on 2018/3/6.
 */


/////////////////////////
//->
// 先打开一个cmd
// mongod --dbpath D:\mongo
// 然后打开另外一个cmd
// mongo


//->mongodb常用

// 打开数据库
// show dbs


////////////////////////
//-> 表数据设计和插入
// 两个集合
// Goods:
// {
//     "productId":String,
//     "productName":String,
//     "salePrice":Number,
//     "checked":String,
//     "productNum":Number,
//     "productImage":String
// }

//-> 登录，注册
// Users:
// {
//     "userId":String,
//     "userName":String,
//     "userPwd":String,
//     "orderList":Array,
//     "cartList":[
//         {
//             "productId":String,
//             "productName":String,
//             "salePrice":String,
//             "productImage":String,
//             "checked":String,
//             "productNum":String
//         }
//     ],
//     "addressList":[
//         {
//             "addressId": String,
//             "userName": String,
//             "streetName": String,
//             "postCode": Number,
//             "tel": Number,
//             "isDefault": Boolean
//         }
//     ]
// }

// 查看有多少数据库
// show dbs
// 创建数据库
// use db_demo
// 直接创建数据库并插入数据
// db.goods.insert({"productId":"10001","productName":"aaa","salePrice":249,"productImage":"1.jpg"})
// 查询
// db.goods.find()

// 新建集合的方式
// db.createCollection("users")

// 删除集合
// db.users.drop()
// show collections
// db.users.find()
//-> 通过命令行的形式导入，在cmd里面就可以操作
//-> --file是文件地址
// mongoimport --db db_demo --collection users --file C:\Users\Administrator\Desktop\dumall-users.json

// 导入数据时，报错：missing ; before statement

//->安装mongodb客户端 Robomongo
// robo3t-1.2.1-windows-x86_64-3e50a65.exe
// 安装目录：C:\Program Files\Robo 3T 1.2.1
// 超级好用：
// Create-> localhost:27017 就连接上了



