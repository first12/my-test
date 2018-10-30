"use strict";
// number类型()
var a = 5;
var b = 0xA12;
// string
var str1 = 'asd';
var str2 = "we12" + str1;
//boolean
var flag1 = false;
// Array
var arr1 = [1, 2, 3];
// 数据类型[]
var arr2 = [1, 2, 3, 4];
//元组（Tuple）
var arr3 = [1, '12'];
// void 空值 --> undefined
var re1 = undefined;
// null/undefined
var re3 = null;
var re4 = undefined;
// any 任意类型
var an1 = 'as';
var an2 = 123;
var an3 = [12, 'ad'];
// object类型
var obj = {};
var obj2 = [];
var obj3 = { name: 'd', age: 18 };
// enum: 枚举类型  :===>>
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["orange"] = 2] = "orange";
})(color || (color = {}));
console.log(color);
// 类型断言
var stri = 'add';
var len = stri.length;
