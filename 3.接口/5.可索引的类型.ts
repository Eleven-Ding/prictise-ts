interface stringArr {
    [index: number]: string;//这里表示用number去索引Arr是的到的元素是string类型的
}
let Arr: stringArr;
Arr = ['2', "s22"];

class Animal {
    name: string;
}
class Dog {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!    
interface NotOkay {

    /**
     * 大概意思是通过number去索引 想要返回Animal类型的， 通过string去索引 想要返回Dog类型的  但是通过number会转换成通过string
     */
    // [x: number]: Animal;
    [y: string]: Dog;
}

let obj:NotOkay = {
    key:new Dog()
}




interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
  }