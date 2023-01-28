import React, { Component } from 'react'
class Product2 extends Component {
    state={
        product_Name:"APPLE IPHONE 14",
        image:"https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        price:"73990",
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
                <h1>Flipkart</h1>
                <div className="container">
                    <div className="row">
                        <div className="col md-6">
                            <table className="table table-hover">
                                <thead className='bg-success'>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total Price</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product_Name}</td>
                                        <td><img src={this.state.image} height="60px" /></td>
                                        <td>{this.state.price}</td>
                                        <td>
                                        <i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.qty}
                                        <i class="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                        </td>
                                        <td>{this.state.qty * this.state.price}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product2;