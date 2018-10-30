"use strict";
var People = /** @class */ (function () {
    function People() {
        this._name = '';
    }
    Object.defineProperty(People.prototype, "name", {
        //属性存取器
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 2 || value.length > 5) {
                throw new Error('不符合标准');
            }
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var p = new People();
p.name = 'asdddddd';
