import React from 'react'
class NavbarProp extends React.Component{
    render(){
        return(
            <div>
                <nav className='navbar bg-dark navbar-dark'>
                    <a href="#" className='navbar-brand'>Props</a>
                    <div className='navbar-expand'>
                    <ul className="navbar-nav">
                        <li className='navbar-list'>
                            <a href="#" className='nav-link'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='nav-link'>About</a>
                        </li>
                        <li>
                            <a href="#" className='nav-link'>Services</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavbarProp;
