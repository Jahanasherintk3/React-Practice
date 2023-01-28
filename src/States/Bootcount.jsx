import React, { Component } from 'react'
export class Bootcount extends Component {
    state = {
        qty: 0
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
        console.log("two")
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Quantity:{this.state.qty}</h3>
                                </div>
                                <div className="card-body">
                                    <button className="btn btn-success mr-5"onClick={this.decrHandler}>Decr</button>
                                    <button className="btn btn-primary"onClick={this.incrHandler}>Incr</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Bootcount;