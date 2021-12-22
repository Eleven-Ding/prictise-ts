interface myFc {
    getUser: () => void;
    getAge: () => number,
    testArgs:(age:string,height:number)=>void
}

const ObjFc: myFc = {
    getUser: function () {
        console.log(2333);
    },
    getAge: function () {
        return 1
    },
    testArgs:function(a,b){
        console.log(a,b);
        
    }
}
//函数是不会检测参数名字是否一致，只会检测是否是同类型的
ObjFc.testArgs("1",2);