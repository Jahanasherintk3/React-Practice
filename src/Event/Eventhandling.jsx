import React, { Component } from 'react'

class Eventhandling extends Component {
    state={
        click:"Welcome"
    }
    clickHandler=(click)=>{
        this.setState({click:click})
    }
  render() {
    return (
      <div>
        <h2>Eventhandling</h2>
        <br></br><br></br>
        <h6>WISHING:{this.state.click}</h6>
        <hr/>
        <button onClick={this.clickHandler.bind(this,"To Our world")}>Click</button>
        <hr/>
        <button onClick={this.clickHandler.bind(this,"To My world")}>Click</button>
        <hr/>
        <button onClick={this.clickHandler.bind(this,"To Neethus home")}>Click</button>
        <hr/>
        <button onClick={this.clickHandler.bind(this,"To Kerala")}>Click</button>
       </div>
    )
  }
}

export default Eventhandling