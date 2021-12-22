import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <ul className="nav  ">
    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About us</Link>
                </li>
                
            </ul>

       </nav>
    )
}

export default Navbar
