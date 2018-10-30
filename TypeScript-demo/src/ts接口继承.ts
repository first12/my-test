
//接口继承接口

interface TwoDPoint {
    x: number,
    y: number
}

interface ThreeDPoint extends TwoDPoint {
    z: number
}

//多继承

interface FourDPoint extends ThreeDPoint, TwoDPoint {
    time: Date
}

let point: ThreeDPoint = {
    x: 12,
    y: 33,
    z: 66
}