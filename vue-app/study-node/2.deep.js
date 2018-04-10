let cheerio = require('cheerio');
let http = require('http');
let iconv = require('iconv-lite');
let url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';
http.get(url,(sres)=>{
    let chunks = [];
    sres.on('data',(chunk)=>{
        chunks.push(chunk);
    });
    sres.on('end',()=>{
        let titles = [];
        let html = iconv.decode(Buffer.concat(chunks),'gb2312');
        let $ = cheerio.load(html,{decodeEntities:false});
        $('.co_content8 .ulink').each((idx,element)=>{
            let $element=$(element);
            titles.push({
                title:$element.text()
            })
        })
        console.log(titles);
    });
});


