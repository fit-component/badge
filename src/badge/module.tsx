export interface PropsInterface {
    /**
     * 展示的数字,为0时候则隐藏
     */
    count?:number

    /**
     * 是否不展示数字,只显示小红点
     */
    dot?:boolean

    /**
     * 封顶数字
     */
    overflowCount?:number

    [x:string]:any
}

export class Props implements PropsInterface {
    count = 0
    dot = false
    overflowCount = 99
}

export interface StateInterface {

}

export class State implements StateInterface {

}