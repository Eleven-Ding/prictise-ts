
/**
 * number
 */
let num: number = 6;
num = 3;
//undefined是所有类型的子类型
// num = undefined;
// num ="11";//报错

/**
 * string
 */
let str: string = "";
//  str = 3;//报错 数字不能赋值给string
//undefined是所有类型的子类型
// str = undefined;

/**
 * boolean
 */

let isTrue: boolean;
// isTrue = 1;
// isTrue = null;
// isTrue = undefined;
// isTrue= unknown


//声明一个只有数字的数组
let arr: number[];
arr = [1]
arr.push(2);
// arr.push("1")//如果加入字符串就会报错
//还可以使用另外一种声明方式

let arr2: Array<number>
// arr2 = [1, 2, 3, false]


//如果想要在数组中多加一些东西可以使用 |
// let tupleArr: [string , number];
let tupleArr: [string | number];
// tupleArr.push(1);
// tupleArr.push("1");
// tupleArr.push(3);

//如果想固定数组的元素类型和数量 我们可以使用元组
let tupeArr2: [number, string];
tupeArr2 = [1, "2"]




//枚举，就和我们在对象中写一些固定的数据一样
//普通的写法
const types = {
    ADD: "add",
    SUB: 'sub'
}

//ts的写法
enum types2 {
    ADD = 'add', SUB = 'sub'
}

console.log(types2.ADD);


//any  对于我们无法预测的一些类型，可以使用any代替
let arr3: any[] = [1, '1', true, undefined];
//any可以允许任何数据类型

//void则与any相反 表示没有任何的类型 当一个函数没有返回值的时候，我们就可以使用void
function handleClick(): void {
    // return null//这种方式虽然在编译的时候不会报错，但是在运行的时候还是会的
    while (true) { }
}


//never是永远不存在的类型
function handleClick1(): never {
    // return null//这种方式虽然在编译的时候不会报错，但是在运行的时候还是会的
    while (true) { }
}




//类型断言 当我们确定某个类型一定是我所写的类型的时候，我们就可以使用类型断言
//1.使用尖括号
let value: any = "string";
let len: number = (<string>value).length

//2. 使用as
let value2: any = "string";
let len2: number = (value as string).length


/**
 * 总结
 * 1. 虽然null和undefined是所有元素的子类型，在编译的时候不会报错，但是在一些版本ts运行的时候，是会报错的
 * 2. 对于元组，越界访问会使用联合类型处理
 * 3. 感觉never并不常用
 */