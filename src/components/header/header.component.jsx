import React from "react";
import "./header.component.css";
import cartImg from './header-resources/shopping-cart.png';
import shopImg from './header-resources/shop.png';
import signinImg from './header-resources/sign-in.png';
import brandImg from './header-resources/logo192.png';

const Header = () => {
    return (
        <div className="header">
            <div class="navbar">
                <div class="brand">
                    <img class="brand-img" src={brandImg} alt="brand" />
                    First React App
                    </div>
                <div class="nav-item-collection">
                    <div class="nav-item">
                        <img src={cartImg} alt="cart" />
                        &nbsp;Cart
                    </div>
                    <div class="nav-item">
                        <img src={shopImg} alt="shop" />
                        &nbsp;Shop
                    </div>
                    <div class="nav-item">
                        <img src={signinImg} alt="sign-in" />
                        &nbsp;Sign in
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
