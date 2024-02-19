import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Header = () => {
    return (
        <div>
            <header className="h-100">
                <nav className="navbar bg-black  opacity-75 navbar-expand-lg">
                    <button className="navbar-brand text-light px-3 bg-black opacity-75 border-0">
                        <img className="mx-1" src={"./images/logo.png"} width={29} alt={"logo"}/>
                            TRIP|IL</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i className=" fa-lg text-white fa fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-50">
                            <li className="nav-item   col-2  text-center  ">
                                <NavLink className="nav-link text-light border" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item   col-2  text-center ">
                                <NavLink className="nav-link text-light" aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item   col-2  text-center ">
                                <NavLink className="nav-link text-light" aria-current="page" to="/qa">Q&A</NavLink>
                            </li>
                            <li className="nav-item   col-2  text-center ">
                                <NavLink className="nav-link text-light" aria-current="page" to="/gallery">Gallery</NavLink>
                            </li>
                            <li className="nav-item   col-2  text-center ">
                                <NavLink className="nav-link text-light" aria-current="page" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item   col-3  text-center ">
                                <NavLink className="nav-link text-light" aria-current="page" to="/conectUs">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default Header