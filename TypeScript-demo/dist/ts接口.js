"use strict";
//接口可以理解为一个约定， 规范
// option 参数中需要包含 url type data success
function ajax(options) {
}
ajax({
    url: 'http://aaa.com.cn',
    // type: 'get',
    data: {
        name: 'haha',
    },
    success: function (data) { }
});
var po = {
    x: 2,
    y: 3
};
// po.x = 6
