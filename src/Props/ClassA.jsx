import React  from 'react'
import ClassB from './ClassB.jsx'
class ClassA extends React.Component {
    user=[{id:11,name:"Raj",sal:40000},
    {id:12,name:"Ram",sal:50000}]
  render() {
    return (
      <div>
        <h2>ClassA</h2>
        <hr/>
        <ClassB Data={this.user}/>
      </div>
    )
  }
}

export default ClassA