/**
 * Created by Administrator on 2018/3/23.
 */
//events模块只提供了一个对象：events.EventEmitter
//

let events = require('events');
let eventEmitter = new events.EventEmitter();
console.log(eventEmitter);


eventEmitter.on('some_event',()=>{
    console.log('some_event 事件触发');
});
setTimeout(()=>{
    //emit注册事件
    eventEmitter.emit('some_event');
},1000);