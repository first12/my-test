//接口可以理解为一个约定， 规范

//接口使用 interface 声明

interface AjaxOptions {
    url: string,
    type?: string,//可选属性
    data: object,
    success(data: object): void
}

// option 参数中需要包含 url type data success
function ajax(options: AjaxOptions) {

}

ajax ({
    url: 'http://aaa.com.cn',
    // type: 'get',
    data: {
        name: 'haha',
    },
    success(data){}
})


interface Point {
    readonly x: number,//只读属性
    y: number
}

let po: Point = {
    x: 2,
    y: 3
}
// po.x = 6