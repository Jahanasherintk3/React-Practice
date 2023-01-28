import React, { Component } from 'react'

class Form extends Component {
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email: event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <h1>FORM HANDLING</h1>
        <form onSubmit={this.submitHandler}>
            <pre>{JSON.stringify(this.state)}</pre>
            <label>Email</label>
            <input type="Email" onChange={this.emailHandler}></input>
            <br/>
            <br/>
            <label>Password</label>
            <input type="password" onChange={this.passwordHandler}></input>
            <br/>
            <button>Click</button>
        </form>
        </div>
    )
  }
}

export default Form