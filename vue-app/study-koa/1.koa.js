/**
 * Created by Administrator on 2018/3/19.
 */
const Koa = require('koa');
const app = new Koa();
//koa推荐 是async
//ctx context是koa提供的一个对象，包括一些常见的方法和属性
app.use(async (ctx, next)=>{
    console.log(ctx.url);
    console.log(1);
    next();
});
app.use(async (ctx, next)=>{
    console.log('a');
});
app.listen(8089);