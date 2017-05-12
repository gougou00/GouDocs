// 因为Node.js是运行在服务区端的JavaScript环境
// 服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了
// 服务器程序必须能接收网络请求，读写文件，处理二进制内容
// 所以，Node.js内置的常用模块就是为了实现基本的服务器功能
// 这些模块在浏览器环境中是无法被执行的
// 因为它们的底层代码是用C/C++在Node.js运行环境中实现的

// global
// JavaScript有且仅有一个全局对象，在浏览器中，叫window对象
// 在Node.js环境中，也有唯一的全局对象，但不叫window，而叫global
// 这个对象的属性和方法也和浏览器环境的window不同

// process
// process也是Node.js提供的一个对象，它代表当前Node.js进程
// 通过process对象可以拿到许多有用信息

// JavaScript程序是由事件驱动执行的单线程模型，Node.js也不例外
// Node.js不断执行响应事件的JavaScript函数
// 直到没有任何响应事件的函数可以执行时，Node.js就退出了

// process.nextTick(function () {
//     console.log('nextTick callback!!');
// });
// console.log('nextTick was set!');

// // 程序即将退出时的回调函数:
// process.on('exit', function (code) {
//     console.log('about to exit with code: ' + code);
// });

// 判断JavaScript执行环境
// 有很多JavaScript代码既能在浏览器中执行，也能在Node环境执行
// 程序本身需要判断自己到底是在什么环境下执行的
// 常用的方式就是根据浏览器和Node环境提供的全局变量名称来判断
// if (typeof(window) === 'undefined') {
//     console.log('node.js');
// } else {
//     console.log('browser');
// }


// global objects in nodejs:

// current js file:
console.log('current js file: ' + __filename);
// current js file dir:
console.log('current js dir: ' + __dirname);

