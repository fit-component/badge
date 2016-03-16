import React from 'react'
import Badge from 'fit-badge'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Badge count={5}/>
                <Badge count={3}
                       style={{background:'#3a3f51'}}/>
                <Badge count={500}
                       style={{background:'#27c24c'}}/>
            </div>
        )
    }
}