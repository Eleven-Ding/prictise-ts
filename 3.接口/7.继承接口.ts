(function () {

    interface Shape {
        width: number;
        height: number;
    }

    interface Shape2{
        len:number
    }

    interface Circle extends Shape {
        color: string
    }


    
   // let model=<Circle>{}
    let model = {} as Circle; //使用类型断言
    model.width = 1;
    model.height=3;
    model.color="red"
    console.log(model);


    //继承多个接口
    interface combine extends Shape,Shape2{
        
    }
    let model2 = {} as combine;
    model2.len = 2
    console.log(model2);
    
    
}())



