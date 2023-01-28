import React, { Component } from 'react'
class ClassB extends Component {
  render() {
    return (
      <div>
        <h2>ClassB</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h4>Employee Name:{this.props.Data[0].name}</h4>
        <h4>Employee Name:{this.props.Data[1].name}</h4>
        </div>
    )
  }
}

export default ClassB;