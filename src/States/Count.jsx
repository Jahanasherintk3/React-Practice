import React, { Component } from 'react'
class Count extends Component {
    state={
        qty:1
    }
    decrHandler=()=>{
          this.setState({qty:this.state.qty -1})
    }
    incrHandler=()=>{
          this.setState({qty:this.state.qty +1})
    }
  render() {
    return (
      <div>
        <h1>Count</h1>
        <h2>Quantity={this.state.qty}</h2>
        <button onClick={this.decrHandler}>Decr</button>
        <button onClick={this.incrHandler}>Incr</button>
      </div>
    )
  }
}

export default Count;