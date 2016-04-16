import * as React from 'react'
import Badge from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <Badge dot>
                <a href="/">超链接</a>
            </Badge>
        )
    }
}