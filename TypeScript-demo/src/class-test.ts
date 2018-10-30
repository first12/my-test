class People {
    private _name: string = ''
    //属性存取器
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if(value.length < 2 || value.length >5) {
            throw new Error('不符合标准');
        }
        this._name = value;
    }
}
var p = new People();
p.name = 'asdddddd';
