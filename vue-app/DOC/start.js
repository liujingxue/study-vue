/**
 * Created by Administrator on 2018/2/27.
 */


//-> 1. vue环境搭建以及vue-cli使用
// vue-cli构建SPA应用， vue-cli是官方提供的构建项目的脚手架工具
// 安装vue-cli
// cnpm install -g vue-cli
// vue init webpack-simple demo (demo是项目名， webpack-simple是初始化webpack简单模式下的项目)
// 或者 vue init webpack demo2 (demo2是项目名， webpack是初始化一个完整的webpack的项目)

// 安装
// cnpm i -g vue-cli  (全局安装vue-cli脚手架)
// vue init webpack-simple demo5 (先初始化一个webpack简单模式下的项目，demo5是项目名)
// 是否使用sass -> No
// 如何启动这个项目?
// cnpm install  (安装依赖)
// cnpm run dev  (dev是开发模式)

// 或者
// vue init webpack demo6 (初始化一个webpack完整项目, demo6是项目名)
// ESLint -> No
// vue-router -> yes
// Mocha -> No (单元测试)
// e2e -> No
// cnpm install (安装依赖)
// cnpm run dev (启动项目)


// 安装
// cnpm i -g vue-cli
// cd study-app
// vue init webpack demo5 (demo5是完整版webpack的vue项目)



//-> vue配置(上)

//->项目结构介绍
// build                            (打包配置文件所在文件夹)
//      |--build.js
//      |--check-versions.js
//      |--logo.png
//      |--utils.js
//      |--vue-loader.config.js
//      |--webpack.base.conf.js
//      |--webpack.dev.conf.js
//      |--webpack.prod.conf.js

// config                           (打包的配置)
//      |--dev.env.js
//      |--index.js
//      |--prod.env.js

// src                              (开发的源码)
//      |--App.vue                  (入口的组件)
//      |--main.js                  (入口文件)

// static                           (静态资源)


//-> 代码都在src中去写

//-> vue基础语法
//->模板语法
// vue内置了一套模板引擎
// Mustache语法： {{msg}}
// Html赋值： v-html=""
// 绑定属性： v-bind:id=""
// 使用三元表达式： {{ok ? 'Yes':'No'}}
// 文本赋值： v-text=""
// 指令： v-if=""
// 过滤器： {{message | capitalize}} 和 v-bind:id="rawld | formatld"

//->Class和Style绑定
// 对象语法： v-bind:class="{active:isActive, 'text-danger':hasError }">
// 数组语法： <div v-bind:class="{activeClass, errorClass}">
// data: {
//     activeClass: 'active',
//     errorClass: 'text-danger'
// }
// style绑定-对象语法： v-bind:style="{ color:activeColor, fontSize: fontSize + 'px'}"


//-> 路由基础介绍


//-> 商品列表模块实现
//-> 商品列表组件拆分
// Header组件
// Footer组件
// 面包屑组件

// assets 和 static都是放置静态资源的，但是assets更偏向于组件的资源


//-> 面包屑处理
//-> 面包屑要做成活的
// slot是一个插槽，供其他页面放入内容
// <slot></slot>

// 面包屑组件：
// <slot name="bread"></slot>
// <slot name="thirdBread"></slot>


/////////////////////////////
//->使用JSON Server搭建Mock服务器(亲测可用： https://www.jianshu.com/p/ccd53488a61b)
// 全局安装 npm install -g json-server
// 项目根目录下创建mock文件夹
// mock文件夹下添加db.json文件，内容如下：
// {
//     "posts": [
//     { "id": 1, "title": "json-server", "author": "typicode" }
// ],
//     "comments": [
//     { "id": 1, "body": "some comment", "postId": 1 }
// ],
//     "profile": { "name": "typicode" }
// }
// package.json 添加命令
// "mock": "json-server --watch mock/db.json",
// "mockdev": "npm run mock & npm run dev"
// cnpm run mock启动
// 访问http://localhost:3000/posts
/////////////////////////////


/////////////////////////////
//->使用axios
// 安装
// cnpm install axios --save
// 使用
// axios.get("http://localhost:3000/posts").then((result)=>{
//     var res = result.data;
//     console.log(res);
//     this.goodsList = res.result;
// })
/////////////////////////////


/////////////////////////////
//-> vue的for循环
// <li v-for="(item,index) in goodsList">
//     <div class="pic">
//          <a href="#"><img v-bind:src="'/static/'+item.productImg" alt=""></a>
//     </div>
//     <div class="main">
//          <div class="name">{{item.productName}}</div>
//          <div class="price">{{item.productPrice}}</div>
//          <div class="btn-area">
//              <a href="javascript:;" class="btn btn--m">加入购物车</a>
//          </div>
//      </div>
// </li>

// 不要直接写src,要用v-bind动态绑定
/////////////////////////////




////////////////////////////
//新版本的vue-cli不生成dev-server.js
//修改webpack.dev.conf.js文件
//把请求模拟数据的路由写在webpack.dev.conf.js文件里
////////////////////////////


////////////////////////////
//-> 加上点击事件     <div @click="_setPriceFilter" />
//-> 加上点击事件     <div @click="priceChecked='all'" /> , 点击的时候，把all赋给priceChecked
//-> 动态绑定class    <div v-bind:class="{'cur':priceChecked=='all'}" /> , 如果priceChecked=='all',那么class就等于cur。
//-> 加上索引         <dd v-for="(price,index) in priceFilter" >
////////////////////////////

////////////////////////////
//->实现图片懒加载
//->介绍一个插件： vue-lazyload
// 安装
// cnpm i vue-lazyload --save
// 使用
// import VueLazyLoad from 'vue-lazyload';
// 配置
// Vue.use(VueLazyLoad,{
// loading: "/static/loading-svg/loading-bars.svg"
// });
// 在页面中使用
// <img v-lazy="'/static/'+item.productImg" alt="">
////////////////////////////



////////////////////////////
//->创建http Server容器
// Common规范
// NodeJs开发遵循Common规范
// 创建一个Http Server
// 创建一个Web容器，可以访问到HTML内容

//-> 使用NodeJs的http模块，创建一个服务器
// let http = require('http');
// let server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type","text/plain;charset=utf-8");
//     res.end("Hello,NodeJs");
// })
//
// server.listen(3001,'127.0.0.1',(req,res)=>{
//     console.log("服务器已经运行，请打开浏览器，输入:http://127.0.0.1:3001/ 进行访问");
// })
////////////////////////////


////////////////////////////
//->NodeJs里面，服务端使用http.get()去调取接口
////////////////////////////


////////////////////////////
//->搭建基于Express框架运行环境
// 安装express generator生成器
// 通过生成器自动创建项目
// 配置分析

// server文件夹是安装Express的文件夹
// 前后端是分离的，
// 可以单独去创建一个新的项目

// 安装express generator生成器
// cnpm i -g express-generator
// 查看生成器的版本
// express --version
// 利用生成器生成一个Express项目
// express server
// 安装好之后
// cnpm i (在demo5目录安装依赖，因为他们共用了一个package.json)
// 启动
// cd server
// node bin/www


// cd server && cnpm install
// install dependencies:
//     > cd server && npm install
//
// run the app:
//     > SET DEBUG=server:* & npm start
//
////////////////////////


////////////////////////
//-> 配置不用jade,改用html
// 先安装ejs
// cnpm i ejs --save
// 在app.js里面使用ejs模板引擎
//->引入ejs
// var ejs = require('ejs')

//->设置模板引擎为ejs
// app.engine('.html',ejs.__express);
// app.set('view engine', 'html');
////////////////////////



////////////////////////
//->NodeJs启动调试方式
// 1.通过node命令启动
// 2.webstorm配置启动入口
// 3.pm2

//-> 1.通过Node命令启动
// cd demo5
// node server/bin/www
// 浏览器打开: http://localhost:3002

//-> 2. 或者通过webstorm配置启动入口
// Run->Debug->
// Node interpreter -> /usr/local/bin/node   (Node的安装目录)

//-> 3. 或者通过pm2启动
// 安装
// cnpm install -g pm2
// 查看版本
// pm2 -v
// 启动
// cd demo5
// pm2 start server/bin/www
// 停止
// pm2 stop server/bin/www

//-> 可以通过pm2启动多个Node项目
////////////////////////


////////////////////////
//->基于Express开发商品列表查询接口
//->
// 查询接口是基于Mongoose来实现的
// 安装
// cnpm i mongoose --save

// 创建model， 写在server的models文件夹里
//
// 创建路由
// 基于Mongoose，实现商品列表的查询功能

//-> Error: Failed to lookup view "error" in views directory
// 出现这个：因为 pm2启动冲突了，先停止 pm2
// pm2 stop server/bin/www
// 再通过node启动
// node server/bin/www

// supervisor也是启动Node服务的，但是没有pm2好用

//->数据查询成功，前端进行渲染
//-> localhost:3002, 跨域了，需要代理
// axios不支持跨域，
// 使用config/index.js里面的 proxyTable
// proxyTable 是个代理插件
// proxyTable: {
//     '/goods':{
//         target:'http://localhost:3002'
//     }
// },

// 然后启动
// cnpm run dev
// 前端端口改成8989(前端端口为8080的时候，代理不成功，请求localhost:3002失败)
// 页面渲染成功



///////////////////////
//->商品列表的升降序
//








