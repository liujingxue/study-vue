/**
 * Created by Administrator on 2018/3/19.
 */


const Koa = require('koa');
const app = new Koa();
const path = require('path');
app.listen(8089);


app.use(async (ctx, next)=>{
    if(ctx.url == '/user' && ctx.method == 'GET'){
        ctx.set('Content-Type','text/html;charset=utf8');
        ctx.body = (
            `
            <form method="POST" enctype="multipart/form-data">
                <input type="text" name="username" />
                <input type="file" name="avatar" />
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
        let type = ctx.type; //请求体的内容类型
        if(type == 'multipart/form-data'){
            let contentType = ctx.headers['content-type'];
            let matches = contentType.match(/\bboundary=(.+)/);
            let sep = '--' + matches[1];  //----WebKitFormBoundaryVjQcZgWCemrBRwKS
            ctx.body = await getBody(ctx.req, sep);

        } else {
            next();
        }

    }else{
        await next();
    }
});

//返回了真正的请求体
function getBody(req,seq){
    return new Promise(function(resolve,reject){
        let buffers = [];
        req.on('data',function(data){
            buffers.push(data);
        });
        req.on('end',function(){
            let all = Buffer.concat(buffers);
            all.split();
        });
    });
}


/*
* 请求头中的内容类型
* Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryVjQcZgWCemrBRwKS
*
* 请求体
*
*
*/

let fields = {
    username: "123",
    avatar:[
        { path }
    ]
}