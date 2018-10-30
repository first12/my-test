interface PersonInterface {
    name: string,
    age: number,
    eat():void
}

class XiaoMing implements PersonInterface{
   name:string = 'xiaoming';
   age:number = 12;
   eat() {}
}

//数据访问层代码