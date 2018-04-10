/**
 * 生成器是一个函数，可以用来生成迭代器
 * 生成器函数和普通函数不一样，普通函数是一旦调用一定会执行完
 * 但是生成器函数中间可以暂停，可以执行一会歇一会
 */
//生成器函数有一个特点，需要加个*
//生成器有若干个阶段，如何划分这些阶段呢？
function *go(){
    console.log(1);
    let b = yield 'a';
    console.log(2);
    let c = yield b;
    console.log(3);
    return c;
}
//生成器函数和普通的函数不一样，调用它的话函数并不会立即执行
//它会返回此生成器的迭代器，迭代器是一个对象，每调用一次next就可以返回一个值对象
let it = go();
let r1 = it.next();
console.log(r1);   //{value: 'a',done:false}

//
