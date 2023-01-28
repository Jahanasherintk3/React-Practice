import React from 'react'
import { Link } from 'react-router-dom'

const Navbarproduct = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <link to='/' className='navbar-brand'>Product CRUD Example</link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link className='nav-link' to="/products" >Products</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbarproduct