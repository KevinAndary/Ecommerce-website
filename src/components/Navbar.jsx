import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css';


const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{ textDecoration: 'none', background: 'linear-gradient(to right, #FF5733, #FFC300, #4CAF50, #2196F3, #9C27B0, #FF5733)', WebkitBackgroundClip: 'text', color: 'transparent', padding: '8px 12px', borderRadius: '4px' }}>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>T</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>r</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>e</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>n</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>d</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>y</span>
                    <span style={{ fontFamily: 'Your-Font-Here', fontSize: '2rem', color: '#fff' }}>T</span>
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>





                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar
