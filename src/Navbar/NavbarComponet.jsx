import React from 'react'
class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark bg-dark '>
                    <a href="#" className='navbar-brand'>Components</a>
                    <div className='navbar-expand'>
                        <ul className='navbar-nav'>
                            <li className='navbar-list'>
                            <a className='nav-link' href="#">Home</a>
                            </li>
                            <li className='navbar-list'>
                            <a className='nav-link' href="#">About</a>
                            </li>
                            <li className='navbar-list'>
                                <a href="#" className='nav-link'>Services</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;
