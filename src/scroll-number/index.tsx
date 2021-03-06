/// <reference path="../../../../../typings-module/css-animation.d.ts" />

import * as React from 'react'
import {isCssAnimationSupported} from 'css-animation'
import * as _ from 'lodash'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

const getNumberArray = (num:number) => {
    return num ? num.toString().split('').reverse().map(i => Number(i)) : []
}

export default class ScrollNumber extends React.Component <module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()
    private lastCount:number

    constructor(props:any) {
        super(props)
        this.state = {
            animateStarted: true,
            count: props.count
        }
    }

    getPositionByNum(num:number, i:number) {
        if (this.state.animateStarted) {
            return 10 + num
        }
        const currentDigit = getNumberArray(this.state.count)[i]
        const lastDigit = getNumberArray(this.lastCount)[i]
        // 同方向则在同一侧切换数字
        if (this.state.count > this.lastCount) {
            if (currentDigit >= lastDigit) {
                return 10 + num
            }
            return 20 + num
        }
        if (currentDigit <= lastDigit) {
            return 10 + num
        }
        return num
    }

    componentWillReceiveProps(nextProps:module.PropsInterface) {
        if ('count' in nextProps) {
            if (this.state.count === nextProps.count) {
                return
            }
            this.lastCount = this.state.count
            // 复原数字初始位置
            this.setState({
                animateStarted: true
            }, () => {
                // 等待数字位置复原完毕
                // 开始设置完整的数字
                setTimeout(() => {
                    this.setState({
                        animateStarted: false,
                        count: nextProps.count
                    }, () => {
                        this.props.onAnimated()
                    })
                }, 5)
            })
        }
    }

    renderNumberList() {
        const childrenToReturn:any = []
        for (let i = 0; i < 30; i++) {
            childrenToReturn.push(<p key={i}>{i % 10}</p>)
        }
        return childrenToReturn
    }

    renderCurrentNumber(num:number, i:number) {
        const position = this.getPositionByNum(num, i)
        const height = this.props.height
        const removeTransition = this.state.animateStarted || (getNumberArray(this.lastCount)[i] === undefined)

        return React.createElement('span', {
            className: `only`,
            style: {
                transition: removeTransition && 'none',
                WebkitTransform: `translate3d(0, ${-position * height}px, 0)`,
                transform: `translate3d(0, ${-position * height}px, 0)`,
                height
            },
            key: i
        }, this.renderNumberList())
    }

    renderNumberElement():any {
        if (!this.state.count || isNaN(this.state.count)) {
            return this.state.count
        }
        return getNumberArray(this.state.count).map((num, i) => this.renderCurrentNumber(num, i)).reverse()
    }

    render() {
        const props:any = _.assign({}, this.props, {
            className: `scroll-number ${this.props['className']} _namespace`
        })

        const isBrowser = (typeof document !== 'undefined' && typeof window !== 'undefined')
        const otherProps = others(new module.Props(), props)

        if (isBrowser && isCssAnimationSupported) {
            return React.createElement(
                this.props.component,
                otherProps,
                this.renderNumberElement()
            )
        }

        return React.createElement(
            this.props.component,
            otherProps,
            props['count']
        )
    }
}