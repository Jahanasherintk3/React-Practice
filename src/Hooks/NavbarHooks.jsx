import React from 'react'
class NavbarHooks extends React.Component{
  render(){
    return (
    <div><nav className="navbar navbar-dark bg-dark">
      <a href="#" className="navbar-brand">React Hooks</a>
      <div className="ml-auto navbar-expand">
        <ul className="navbar-nav">
          <li className="navbar-list">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="navbar-list">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="navbar-list">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      </nav>
      </div>)
  
  }
}
export default NavbarHooks;