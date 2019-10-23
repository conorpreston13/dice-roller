import React, { Component } from 'react';
import RollTracker from './RollTracker'
import RollButton from './RollButton'
import './index.css'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      rolls: [],
      seenRolls: [],
    }
  }
  rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6 + 1)
    const seenRolls = this.state.seenRolls
    seenRolls.push(randomNum)
    this.setState({seenRolls: seenRolls})
    this.setState({rolls: randomNum})
  }
  
  render () {
    return (
      <React.Fragment>
        <center>
          <h1>Die Roller</h1>
          <p>{this.state.rolls}</p>
          <RollButton rollIt = {this.rollDice} />
          <RollTracker seenRolls = {this.state.seenRolls} />
        </center>
      </React.Fragment>
    )
  }
}
