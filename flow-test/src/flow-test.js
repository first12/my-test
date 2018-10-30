
// @flow

let a :number = 1;
let b :number = NaN;
let d :number = Infinity;

// string

// boolean

// void --》 undefined

// Array 类型
// 在生命数据类型的时候需要为数组指定元素的类型

let arr: Array<number> = [12,4,6];

// any 任何类型
let name = 'as';
name = 12;

// function 类型

function test(a:number, b:number):number {
  return a + b;
}

// let a1: string = test(1,2);
let a1: number = test(1,2);

// 类型或操作

let a2: number|string = 12;

a2 = 'asd';

// 对象类型

function greet(obj: {sayHello: () => void}){
  obj.sayHello()
}
var o = {
  name: '12'
}

greet(o)

function ajax(option: {url: string, type: string, success: (data: Object) => void}){

}