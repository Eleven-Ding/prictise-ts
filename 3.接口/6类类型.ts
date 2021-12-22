//与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。


interface PersonInterface {
    name: string;
    printName: () => void
}

class People implements PersonInterface {
    name: string;
    constructor(){

    }
    printName(){
        console.log(2333);
        
    }
}
