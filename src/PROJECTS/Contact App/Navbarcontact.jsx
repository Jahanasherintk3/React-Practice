import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Navbarcontact extends Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to="/INDEX" className="navbar-brand">React Contact App</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-list">
                        <Link className="nav-link" to="/Index">Index</Link>
                    </li>

                </ul>
            </div>
       </nav>
    }
}  
export default Navbarcontact;
