"use strict";
/**
    关键词：类型变量、泛型变量、泛型函数、泛型接口

    1.泛型变量就是类型变量。
    2.类型变量T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
    3.类型变量T使用<>包裹。
    4.类型变量T可以当做类型的一部分使用，而不是整个类型，增加了灵活性。
 */
// 泛型函数
function identity(arg) {
    return arg;
}
console.log(identity("aad"));
// 类型变量T可以当做类型的一部分使用，而不是整个类型，增加了灵活性。
function loggingIdentity2(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity2([1, 2, 3, 4]);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1, 2, 3]);
// 泛型类型
function identity2(arg) {
    return arg;
}
var myIdentity2 = identity2;
console.log(myIdentity2(234));
function identity3(arg) {
    return arg;
}
var myIdentity3 = identity3;
console.log(myIdentity3(1324));
