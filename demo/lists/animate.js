import React from 'react'
import Badge from 'fit-badge'
import { Button, ButtonGroup } from 'fit-button'

const boxStyle = {
    width       : 42,
    height      : 42,
    borderRadius: 6,
    background  : '#eee',
    display     : 'inline-block'
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 20
        }
    }

    handleClick(number) {
        this.setState({
            count: this.state.count + number
        })
    }

    render() {
        const { count } = this.state

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