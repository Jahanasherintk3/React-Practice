import React from 'react'
import { useState } from 'react'

const Productcount = () => {
    let [product,setproduct]=useState({
        prod_Name:"Iphone 14 pro",
        image:"https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
        price:132000,
        qty:1
    });
    let incrHandler =()=>{
        setproduct({...product,qty:product.qty +1})
    }
    let decrHandler =()=>{
        setproduct({...product,qty:product.qty -1})
    }
  return (
    <div>
        <h1>Product counter</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table>
                        <thead className='table table-hover bg-dark text-white'>
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.prod_Name}</td>
                                <td><img src={product.image} height="50px"></img></td>
                                <td>{product.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                                <td>{product.qty*product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productcount