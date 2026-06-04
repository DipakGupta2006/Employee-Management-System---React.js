import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar__brand">growwWell Pvt. Ltd.</div>
            <ul className="navbar__menu">
                <li className="navbar__item"><Link to="/" className="navbar__link">Dashboard</Link></li>
                <li className="navbar__item"><Link to="/add" className="navbar__link">Add Employee</Link></li>
                <li className="navbar__item"><Link to="/view" className="navbar__link">View Employee</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
