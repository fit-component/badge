import * as React from 'react'
import Badge from '../../src'

const boxStyle = {
    width: 42,
    height: 42,
    borderRadius: 6,
    background: '#eee',
    display: 'inline-block'
}

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <Badge count={5}>
                <div style={boxStyle}></div>
            </Badge>
        )
    }
}