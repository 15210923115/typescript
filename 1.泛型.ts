/**
    关键词：类型变量、泛型变量、泛型函数、泛型接口

    1.泛型变量就是类型变量。
    2.类型变量T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
    3.类型变量T使用<>包裹。
    4.类型变量T可以当做类型的一部分使用，而不是整个类型，增加了灵活性。
 */

// 泛型函数
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("aad"));

// 类型变量T可以当做类型的一部分使用，而不是整个类型，增加了灵活性。
function loggingIdentity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
loggingIdentity2([1,2,3,4]);

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
loggingIdentity([1,2,3]);

// 泛型类型
function identity2<T>(arg: T): T {
    return arg;
}
let myIdentity2: <T>(arg: T) => T = identity2;
console.log(myIdentity2(234));

interface GenericIdentityFn {// 泛型接口
    <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity3: GenericIdentityFn = identity3;
console.log(myIdentity3(1324));