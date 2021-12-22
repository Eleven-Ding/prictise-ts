//对于对象的一些属性，我们不希望对他进行修改，我们使用只读属性

interface types {
    readonly id: string;
    name: string;
}
const Person: types = { id: "123", name: "dsy" };
Person.name = "321"
// Person.id="233"//报错 不允许修改


//我们可以通过readonly创建一个不可变的数组
let arr1: ReadonlyArray<number> = [1];
// arr1.push(233);//报错，不允许被修改

let p: number[] = arr1 as number[];