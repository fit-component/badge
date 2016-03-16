import React from 'react'
import Animate from 'rc-animate'
import ScrollNumber from './scroll-number'
import classNames from 'classnames'
import './index.scss'

export default class Badge extends React.Component {
    render() {
        const { count, overflowCount, className, style, dot, children, ...others } = this.props

        let countAfterCalculation = count > overflowCount ? `${overflowCount}+` : count

        // dot 不展示 count
        if (dot) {
            countAfterCalculation = ''
        }

        // null undefined "" "0" 0
        const hidden = (!countAfterCalculation || countAfterCalculation === '0') && !dot
        const scrollNumberCls = (dot ? 'dot' : 'count')

        const classes = classNames({
            '_namespace'     : true,
            [className]      : className,
            [`not-a-wrapper`]: !children
        })

        return (
            <span {...others} className={classes}
                              title={countAfterCalculation}>
                {children}
                <Animate showProp="data-show"
                         transitionName={`zoom`}
                         transitionAppear>
                    {hidden ? null :
                        <ScrollNumber data-show={!hidden}
                                      className={scrollNumberCls}
                                      count={countAfterCalculation}
                                      style={style}/>
                    }
                </Animate>
            </span>
        )
    }
}

Badge.defaultProps = {
    // @desc 展示的数字,为0时候则隐藏
    count        : 0,
    // @desc 是否不展示数字,只显示小红点
    dot          : false,
    // @desc 封顶数字
    overflowCount: 99
}