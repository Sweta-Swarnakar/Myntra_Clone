import React from 'react'
import "./Navbar.css"
export const Navbar = () => {
    return (
        // <div className='nav-cont'>
        //     <div className='logo'><img src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"></img></div>
        //     <div></div>
        //     <div></div>
        // </div>
        <div id="nav">
            <div>
                <img id="logo"
                    src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
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

