var fetch = require('node-fetch');

const asyncReadFile = async function () {
    // return await new Promise(function (resolve, reject) {
    //         resolve('我是string')
    //     });
    // return await '我是string'  //异步函数默认就会返回一个promise对象，不用自己生成
    //await '我是string'  // 不返回是undefined，async函数内部return语句返回的值，会成为then方法回调函数的参数。
    return await Promise.resolve('我是string');//还能直接定义resolve参数

};
asyncReadFile().then(function (data) {
    console.log(data);
})

async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
asyncPrint('hello world', 50);
async function f() {
    throw new Error('出错了');
    // await Promise.reject('出错了');
}

f().then(
    v => console.log('resolve', v),
    e => console.log('reject', e)
).catch(e=>console.log(e))

async function getHtml() {
    let response = await fetch('https://www.baidu.com/');
    let html = await response.text();
    return html;
}
getHtml().then(console.log)