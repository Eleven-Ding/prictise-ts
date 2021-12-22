(function () {
    // class Animal {
    //     public name: string;
    //     private age: number;
    //     public constructor(theName: string, age: number) { this.name = theName; this.age = age }
    //     public move(distanceInMeters: number) {
    //         console.log(`${this.name} moved ${distanceInMeters}m.`);
    //     }
    // }
    // const animal = new Animal("dog",12)
    // console.log(animal.name);
    //私有变量只允许在Class中进行访问
    // console.log(animal.age);
    class Animal {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    class Rhino extends Animal {
        constructor() { super("Rhino"); }
    }

    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    animal = rhino;
    // animal = employee; // 错误: Animal 与 Employee 不兼容.


})()