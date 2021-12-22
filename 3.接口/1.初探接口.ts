interface objTYpe {
    name: string;
    age: number
}
function print(obj: objTYpe): void {
    console.log(obj.name);

    //height属性不在我们所希望传入的对象中，已经进行了限制，所以会报错
    // console.log(obj.height);
}

print({ name: "dsy", age: 1})