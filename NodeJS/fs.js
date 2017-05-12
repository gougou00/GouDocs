// Node.js内置的fs模块就是文件系统模块，负责读写文件
// 和所有其它JavaScript模块不同的是
// fs模块同时提供了异步和同步的方法
// 什么是异步方法
// 因为JavaScript的单线程模型
// 执行IO操作时，JavaScript代码无需等待
// 而是传入回调函数后，继续执行后续JavaScript代码
// jquery提供的getJSON()操作：
// $.getJSON('http://example.com/ajax', function (data) {
//     console.log('IO结果返回后执行...');
// });
// console.log('不等待IO结果直接执行后续代码...');
// 同步的IO操作则需要等待函数返回：
// // 根据网络耗时，函数将执行几十毫秒~几秒不等:
// var data = getJSONSync('http://example.com/ajax');

// 同步操作的好处是代码简单，缺点是程序将等待IO操作
// 在等待时间内，无法响应其它任何事件
// 异步读取不用等待IO操作，但代码较麻烦

// 异步读文件
'use strict';
var fs = require('fs');
// 异步读取时，传入的回调函数接收两个参数 function(err, data) {}
// 当正常读取时，err参数为null
// data参数为读取到的String
// 当读取发生错误时，err参数代表一个错误对象，data为undefined
// 这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果
// console.log('>>> BEGIN >>>');
// fs.readFile('test.txt', 'utf-8', function(err, data) {
//     // 由于err是否为null就是判断是否出错的标志
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 读取一个图片文件
// fs.readFile('test.jpg', function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + 'byte');
//         // console.log('>>> END >>>')
//     }
// })
// 当读取二进制文件时，不传入文件编码时
// 回调函数的data参数将返回一个Buffer对象
// 在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）
// Buffer对象可以和String作转换

// 同步读文件
// 同步读取的函数和异步函数相比，多了一个Sync后缀
// 并且不接收回调函数，函数直接返回结果
// console.log('同步读文件：');
// // 原异步调用的回调函数的data被函数直接返回
// // 函数名需要改为readFileSync，其它参数不变
// var data = fs.readFileSync('test.txt', 'utf-8');
// console.log(data);


// // 写文件：
// var data = "Hello, Node.js!!!!";
// // writeFile()的参数依次为文件名、数据和回调函数
// // 如果传入的数据是String，默认按UTF-8编码写入文本文件
// // 如果传入的参数是Buffer，则写入的是二进制文件
// // 回调函数由于只关心成功与否，因此只需要一个err参数
// fs.writeFile('output.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('OK.');
//     }
// })

// // 同步写文件：
// var data = "MomO";
// fs.writeFileSync('output.txt', data);

// // 获取文件大小，创建时间等信息，可以使用fs.stat()
// // 它返回一个Stat对象，能告诉文件或目录的详细信息
// fs.stat('test.txt', function(err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         // 是否是文件：
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录：
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小：
//             console.log('size: ' + stat.size);
//             // 创建时间：
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间：
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
// })

// 同步获取文件信息：
try {
    var statInfo = fs.statSync('test.txt');
    console.log('isFile: ' + statInfo.isFile());
    console.log('isDirectory: ' + statInfo.isDirectory());
    if (statInfo.isFile()) {
        console.log('size: ' + statInfo.size);
        console.log('birth time: ' + statInfo.birthtime);
        console.log('modified time: ' + statInfo.mtime);
    }
} catch(err) {
    console.log('有错！');
}

// 异步还是同步
// 在fs模块中，提供同步方法是为了方便使用
// Node环境执行的JavaScript代码是服务器端代码
// 绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码
// 否则，同步代码在执行时期，服务器将停止响应
// 因为JavaScript只有一个执行线程
// 服务器启动时如果需要读取配置文件
// 或者结束时需要写入到状态文件时，可以使用同步代码
// 因为这些代码只在启动和结束时执行一次
// 不影响服务器正常运行时的异步执行