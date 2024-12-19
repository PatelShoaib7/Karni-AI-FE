import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state  = useSelector((state)=> state)
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>E-Shop</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-cart">
                <span className="cart-icon">&#128722;</span>
                <span className="cart-count">{"cartCount"}</span>
            </div>
        </nav>
    );
};

export default Navbar;
