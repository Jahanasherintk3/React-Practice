import React, { Component } from 'react'

class Eventbindling extends Component {
    state={
        msg:"Hello"
    }
    messageHandler=(msg)=>{
            this.setState({msg:msg})
           
    }
  render() {
    return (
      <div>
        <h2>Eventbindling</h2>
        <h5>Message:{this.state.msg}</h5>
        <button onClick={this.messageHandler.bind(this,"Good Morning Everybody")}>Click</button>
        <button onClick={this.messageHandler.bind(this,"Good Afternoon Everybody")}>Click</button>
        <button onClick={this.messageHandler.bind(this,"Good Night Everybody")}>Click</button>

      </div>
    )
  }
}

export default Eventbindling;