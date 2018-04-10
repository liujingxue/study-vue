/**
 * Created by Administrator on 2018/3/19.
 */
const Koa = require('koa');
const querystring = require('querystring');
const app = new Koa();

// GET /user 返回一个空白 表单
// POST /user 表示提交 用户注册数据
app.use(async (ctx, next)=>{
    if(ctx.url == '/user' && ctx.method == 'GET'){
        ctx.set('Content-Type','text/html;charset=utf8');
        ctx.body = (
            `
            <form method="POST">
                <input type="text" name="username" />
                <input type="submit"/>
            </form>
            `
        );
    } else {
        await next();
    }
});

app.use(async (ctx, next)=>{
    if(ctx.url == '/user' && ctx.method == 'POST'){
        ctx.body = await parse(ctx.req);
    }else{
        await next();
    }
});

app.listen(8089);

function parse(req){
    return new Promise((resolve,reject)=>{
        let buffers = [];
        ctx.req.on('data',(data)=>{
            buffers.push(data);
        });
        ctx.req.on('end',()=>{
            console.log('end');
            let result = Buffer.concat(buffers);
            resolve(querystring.parse(result.toString()));
        });
    });
}