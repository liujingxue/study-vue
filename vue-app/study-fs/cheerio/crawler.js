/**
 * Created by Administrator on 2018/3/21.
 */
//加载http模块
let http = require('http');
//Cheerio是一个Node.js的库，它可以从html的片段中构建DOM结构，
//然后提供向jquery一样的
let cheerio = require('cheerio');
//定义网络爬虫的目标地址：自如友家的主页
let url = 'http://www.ziroom.com/';

http.get(url,function(res){
    let html = '';
    //获取页面数据
    res.on('data',function(data){
        html+=data;
    });
    //数据获取结束
    res.on('end',()=>{
        //通过过滤页面信息获取实际需求的轮播图信息
        let slideListData = filterSlideList(html);
        //打印信息
        printInfo(slideListData);
    });
}).on('error',function(){
    console.log('数据获取出错！');
});

/* 过滤页面信息 */
function filterSlideList(html){
    if(html){
        //沿用jQuery风格，定义$
        let $ = cheerio.load(html);
        //根据id获取轮播图列表信息
        let slideList = $('#foucsSlideList');
        //轮播图数据
        let slideListData = [];
        /* 轮播图列表信息遍历 */
        slideList.find('li').each(function(item) {

            var pic = $(this);
            // 找到a标签并获取href属性
            var pic_href = pic.find('a').attr('href');
            // 找到a标签的子标签img并获取_src
            var pic_src = pic.find('a').children('img').attr('_src');
            // 找到a标签的子标签img并获取alt
            var pic_message = pic.find('a').children('img').attr('alt');
            // 向数组插入数据
            slideListData.push({
                pic_href : pic_href,
                pic_message : pic_message,
                pic_src : pic_src
            });
        });
        // 返回轮播图列表信息
        return slideListData;
    } else {
        console.log('无数据传入！');
    }

}





/* 打印信息 */
function printInfo(slideListData) {
    // 计数
    var count = 0;
    // 遍历信息列表
    slideListData.forEach(function(item) {
        // 获取图片
        var pic_src = item.pic_src;
        // 获取图片对应的链接地址
        var pic_href = item.pic_href;
        // 获取图片信息
        var pic_message = item.pic_message;
        // 打印信息
        console.log('第' + (++count) + '个轮播图');
        console.log(pic_message);
        console.log(pic_href);
        console.log(pic_src);
        console.log('\n');
    });
}



















