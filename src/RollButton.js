import React, { Component } from 'react'

export default class RollButton extends Component{
    render () {
        return (
            <React.Fragment>
            
                <button onClick={this.props.rollIt}>Roll the Die!</button>
            </React.Fragment>
        )
    }
}