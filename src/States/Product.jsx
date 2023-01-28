import React, { Component } from 'react'
class Product extends Component {
    state={
        product:{
        product_Name:"APPLE IPHONE 14",
        image:"https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        price:"73990",
        qty:1
        }
    }
    decrHandler=()=>{
         this.setState({
            product:
            {...this.state.product,qty:this.state.product.qty -1}
        })
    }
    incrHandler=()=>{
        this.setState({
            product:{
                ...this.state.product,qty: this.state.product.qty +1
            }
        })
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
                                        <td>{this.state.product.product_Name}</td>
                                        <td><img src={this.state.product.image} height="60px" /></td>
                                        <td>{this.state.product.price}</td>
                                        <td>
                                        <i class="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.product.qty}
                                        <i class="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                        </td>
                                        <td>{this.state.product.qty * this.state.product.price}</td>
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

export default Product;