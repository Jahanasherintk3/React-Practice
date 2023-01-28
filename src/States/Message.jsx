//import { Button } from 'bootstrap';
import React, { Component } from 'react';

class Message extends Component {
  message="Hello"
  changeMessage =()=>{
    //console.log("Test Case 123")   ...this is for only testing whether to know it is running or not
    this.message="Good Morning"
   //console.log("this.message")    ....this is also for testing purpose
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        <h2>Message</h2>
        <h3>Messages:{this.message}</h3>
        <button onClick={this.changeMessage}>GM</button>
        <button>GN</button>
        </div>
    )
  }
}

export default Message; 