import React from 'react'
import logohome from '../assets/logos/logohome.png'
import '../styles/navbar.css'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container">
            <div className="navbar-brand">
                <img src={logohome} alt="" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to="home" className="nav-link" activeClassName="active">HOME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="game" className="nav-link" activeClassName="active">GAME</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="eshop" className="nav-link" activeClassName="active" >ESHOP</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="compte" className="nav-link" activeClassName="active" >MON COMPTE</NavLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar