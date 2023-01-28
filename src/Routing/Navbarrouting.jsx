import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Navbarrouting extends Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to="/" className="navbar-brand">React Routing</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/users">Users</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/services">Services</Link></li>

                </ul>
            </div>
       </nav>
    }
}  
export default Navbarrouting;
