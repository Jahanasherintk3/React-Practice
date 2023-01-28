import React, { Component } from 'react'
class Set extends Component {
state={
    message:"Hello"
}
gmHandler=()=>{
    console.log("Test case Two")
    this.setstate({message:"Breakfast is Ready"})

}
gaHandler=()=>{
    console.log("Test case three")
    this.setstate({message:"Lunch is Ready"})

}
gnHandler=()=>{
    this.setstate({message:"Dinner is Ready"})
    console.log("Test case one")

}
 render() {
    return (
      <div>
        <h1>Set</h1>
        <h3>Message:{this.state.message}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.gnHandler}>GM</button>
      </div>
    )
  }
}

export default Set;