import * as React from 'react'
import * as Animate from 'rc-animate'
import ScrollNumber from '../scroll-number'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Badge extends React.Component<module.PropsInterface,module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    render() {
        let countAfterCalculation = this.props.count > this.props.overflowCount ? `${this.props.overflowCount}+` : this.props.count

        // dot 不展示
        if (this.props.dot) {
            countAfterCalculation = ''
        }

        // null undefined "" "0" 0
        const hidden = (!countAfterCalculation || countAfterCalculation === '0') && !this.props.dot
        const scrollNumberCls = (this.props.dot ? 'dot' : 'count')

        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className'],
            [`not-a-wrapper`]: !this.props.children
        })

        return (
            <span className={classes}
                  title={countAfterCalculation}>
                {this.props.children}
                <Animate showProp="data-show"
                         transitionName={`zoom`}
                         transitionAppear>
                    {hidden ? null :
                    <ScrollNumber data-show={!hidden}
                                  className={scrollNumberCls}
                                  count={countAfterCalculation}
                        {...others(new module.Props(), this.props)}/>
                        }
                </Animate>
            </span>
        )
    }
}