/**
    函数类型：为函数定义类型（包含两部分：参数类型，返回值类型）

 */

// 书写完整函数类型：(x: number, y: number) => number 就是函数类型，规定了参数类型和返回值类型
let myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}

// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 我们也可以这么写：
let myAdd2: (baseValue: number, increment: number) => number = function(x: number, y: number): number { 
    return x + y; 
};

// 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
let myAdd3: (baseValue: number, increment: number) => void = function(x: number, y: number): void { 
    console.log(x + y); 
};

// 推断类型，尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型：
let myAdd4 = function(x: number, y: number): number {
    return x + y;
}

let myAdd5: (baseValue: number, increment: number) => number = function (x, y) {// 这叫做“按上下文归类”，是类型推论的一种。 它帮助我们更好地为程序指定类型。
    return x + y;
}

// 函数重载在类型系统里的表示

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);

/**
    这样改变后，重载的pickCard函数在调用的时候会进行正确的类型检查。

    为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。

    注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
 */