import React, { Component } from 'react'

export default class RollTracker extends Component {
    render () {
        return (
            <React.Fragment>
                <h2>Past Rolls</h2>
                {this.props.seenRolls.map((rolls, index) => {
                return (<p key={index}>{rolls}</p>)
                })}
            </React.Fragment>
        )
    }
}