// stream是Node.js提供的又一个仅在服务区端可用的模块
// 目的是支持“流”这种数据结构
// 什么是流？流是一种抽象的数据结构
// 流的特点是数据是有序的
// 而且必须依次读取，或者依次写入，不能像Array那样随机定位
// 在Node.js中，流也是一个对象，只需要响应流的事件就可以了
// data事件表示流的数据已经可以读取了
// end事件表示这个流已经到末尾了
// 没有数据可以读取了，error事件表示出错了

// // 从文件流读取文本内容的示例:
// 'use strict';
// var fs = require('fs');
// // 打开一个流：
// var rs = fs.createReadStream('test_stream.txt', 'utf-8');
// rs.on('data', function (chunk) {
//     console.log('DATA:')
//     console.log(chunk);
// });
// rs.on('end', function () {
//     console.log('END');
// });
// rs.on('error', function (err) {
//     console.log('ERROR: ' + err);
// });


// // 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
// 'use strict';
// var fs = require('fs');
// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write('使用Stream写入文本数据...\n');
// ws1.write('END.');
// ws1.end();

// var ws2 = fs.createWriteStream('output2.txt');
// ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
// ws2.write(new Buffer('END.', 'utf-8'));
// ws2.end();

// 所有可以读取数据的流都继承自stream.Readable
// 所有可以写入的流都继承自stream.Writable

// pipe
// 一个Readable流和一个Writable流串起来后
// 所有的数据自动从Readable流进入Writable流，这种操作叫pipe
// 在Node.js中，Readable流有一个pipe()方法，就是用来干这件事的
// 用pipe()把一个文件流和另一个文件流串起来
// 这样源文件的所有数据就自动写入到目标文件里了
// 这实际上是一个复制文件的程序
'use strict';
var fs = require('fs');
var rs = fs.createReadStream('test_stream.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);
// 默认情况下，当Readable流的数据读取完毕，end事件触发后
// 将自动关闭Writable流
// 如果我们不希望自动关闭Writable流，需要传入参数：
// readable.pipe(writable, { end: false });