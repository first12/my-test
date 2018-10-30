
interface SumInterface {
    (a:number, b:number):number
}

let sum: SumInterface = function (a:number, b) {
    return a + b;
}