import * as React from 'react'
import Badge from '../../src'
import {Button, ButtonGroup} from '../../../../pc/button/src'

const boxStyle = {
    width: 42,
    height: 42,
    borderRadius: 6,
    background: '#eee',
    display: 'inline-block'
}

export default class Demo extends React.Component<any,any> {
    state:any = {
        count: 20
    }

    constructor(props:any) {
        super(props)
    }

    handleClick(number:number) {
        this.setState({
            count: this.state.count + number
        })
    }

    render() {
        const {count} = this.state

        return (
            <div>
                <Badge count={count}>
                    <div style={boxStyle}></div>
                </Badge>

                <ButtonGroup style={{marginLeft:15}}>
                    <Button onClick={this.handleClick.bind(this,-1)}>-</Button>
                    <Button onClick={this.handleClick.bind(this,1)}>+</Button>
                </ButtonGroup>
            </div>
        )
    }
}