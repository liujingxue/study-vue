/**
 * Created by Administrator on 2018/3/16.
 */
var Promise = exports.Promise = function(fn){
    if(typeof this !== "object") throw new TypeError("Promise must be constructed via new");
    if(typeof fn !== "function") throw new TypeError("not a function");
    var state = null;   // 状态，null:pending, true:fulfilled, false:rejected
    var value = null;
    var deferreds = [];
    var self = this;
    this.then = function(onFulfilled, onRejected){
        return new self.constructor(function(reslove, reject){
            handle(new Handler(onFulfilled, onRejected, reslove, reject));
        });
    };
    // 保存和执行deferreds数组中的元素
    function handle(deferred){

    }
}