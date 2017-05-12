// var name ='world';
// var s = `hello ${name}!`;
// console.log(s);

// 为了编写可维护的代码，把很多函数分组，分别放到不同的文件里
// 这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式
// 在Node环境中，一个.js文件就称之为一个模块（module）
// 当一个模块编写完毕，就可以被其他地方引用
// 使用模块还可以避免函数名和变量名冲突
// 相同名字的函数和变量完全可以分别存在不同的模块中

// hello.js文件就是一个模块
// 模块的名字就是文件名（去掉.js后缀）
// 所以hello.js文件就是名为hello的模块

// 改造：
'use strict';

// var s = 'Hello';
// function greet(name) {
//     console.log(s + ', ' + name + '!!!');
// }
// // 把函数greet作为模块的输出暴露出去
// // 这样其他模块就可以使用greet函数了
// module.exports = greet;


// 作业：
var s = 'hello';
function greet(name) {
    console.log(s + ', ' + name + '!!!');
}
function hi(name) {
    console.log("Hi, " + name + '!!');
}
function goodbye(name) {
    console.log('goodbay, ' + name + '!');
}
module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye
};