import * as React from 'react'
import Badge from '../../src'

export default class Demo extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Badge count={5}/>
                <Badge count={3}
                       style={{background:'#3a3f51',marginLeft:15}}/>
                <Badge count={500}
                       style={{background:'#27c24c',marginLeft:15}}/>
            </div>
        )
    }
}