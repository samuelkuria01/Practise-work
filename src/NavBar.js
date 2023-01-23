import React from "react";
import { NavLink } from "react-router-dom";

function NavBar (){
    return(
        <nav className="navbar bg-body-tertiary ">
            <div className="container-fluid d-flex justify-content-end">
            <NavLink className="navbar-brand " to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="about">About</NavLink>
            <NavLink className="navbar-brand" to="category">Category</NavLink>
            <NavLink className="navbar-brand"to="products">Products</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;