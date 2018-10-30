
// number类型()

let a: number = 5
let b: number = 0xA12

// string
let str1: string = 'asd'
let str2: string = `we12${str1}`

//boolean
let flag1: boolean = false

// Array

let arr1: Array<number> = [1,2,3]

// 数据类型[]

let arr2: number[] = [1,2,3,4]

//元组（Tuple）

let arr3: [number, string] = [1, '12']

// void 空值 --> undefined

let re1: void = undefined

// null/undefined

let re3: null = null
let re4: undefined = undefined

// any 任意类型

let an1: any = 'as'
let an2: any = 123
let an3: any = [12, 'ad']

// object类型

let obj: object = {}
let obj2: object = []

let obj3: {name: string, age: number} = {name: 'd', age: 18}

// enum: 枚举类型  :===>>

enum color {
    red,
    blue,
    orange
}
console.log(color)


// 类型断言

let stri: any = 'add'
let len: number = (<string>stri).length

