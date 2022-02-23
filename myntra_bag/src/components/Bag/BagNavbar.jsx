import React from 'react'
import "./BagNavbar.css"
import logo from "./Images/myntra-logo.png"
export const BagNavbar = () => {
    return (
        <div id="nav">
            <div>
                <img id="logo"
                    src={logo}
                    alt="" />
            </div>
            <div id="nav-2">
                <span id="blue">
                    <div>BAG &ensp;</div>
                    <div id="blueline"></div>
                </span>
                <span> --------- ADDRESS --------- PAYMENT</span>
            </div>
            <div id="checkdiv">
                <img id="check" src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="" />
                <span>100% SECURE</span>
            </div>
        </div>
    )
}

