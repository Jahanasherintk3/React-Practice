import React, { Component } from 'react'

class One extends Component {
    constructor(props){     //this will execute first to initialize the value
        super(props)
            this.state={
                currentTime: new Date().toLocaleTimeString()
            }
        }
    componentDidMount(){      //third this will execute then again render
        setInterval(()=>{
            this.setState({currentTime:new Date().toLocaleTimeString ()})
        },1000)
    }
  render() {     // second will execute
    return (
    <div>
        <h2>Digital Clock</h2>
        <div className="contain">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-body bg success">
                                <h4>Time--{this.state.currentTime}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default One;