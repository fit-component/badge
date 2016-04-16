export interface PropsInterface {
    /**
     * 总数量
     */
    count?:number

    /**
     * 渲染的节点名称
     */
    component?:string

    /**
     * 动画中回调
     */
    onAnimated?:()=> void

    /**
     * 数字高度
     */
    height?:number

    [x:string]:any
}

export class Props implements PropsInterface {
    count = 0
    component = 'sup'
    onAnimated = ()=> {
    }
    height = 18
}

export interface StateInterface {
    animateStarted?:boolean
    count?:number
}

export class State implements StateInterface {
    animateStarted = false
    count=0
}