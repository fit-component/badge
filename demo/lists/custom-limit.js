import React from 'react'
import Badge from 'fit-badge'

const boxStyle = {
    width       : 42,
    height      : 42,
    borderRadius: 6,
    background  : '#eee',
    display     : 'inline-block'
}

export default class Demo extends React.Component {
    render() {
        return (
            <Badge overflowCount={998}
                   count={9999999}>
                <div style={boxStyle}></div>
            </Badge>
        )
    }
}