import React from 'react';
import { Pincode } from "./Pincode";
import { BagProduct } from "./BagProduct";
import { Apply } from "./Apply";
import belowImage from "./Images/belowImage.png"
import "./BagNavbar.css"

export const MainBag = () => {
    return (
        <>

            <div className="mainbag">
                <div className="borderRight">
                    <Pincode />
                    <BagProduct />
                </div>
                <div className="billing">
                    <Apply />
                </div>
            </div>
            <div className="gridImage">
            <img src={belowImage} alt="" width="100%"/>
            <div className="cursor fontBold">Need Help? Contact Us</div>
        </div>
        </>
    );
};

