import React from 'react'
import "./BagNavbar.css"
import offerImg from "./Images/offers.webp";
export const Pincode = () => {
    return (
        <div>
            <div className="pin">
                <div className='pin1'>Check delivery time and services</div>
                <div className='pin2'>ENTER PIN CODE</div>
            </div>
            <div className="offers">
                <div className="box1">
                    <img src={offerImg} alt="" width="18px" height="18px" />
                    <div className="margin">Available Offers</div>
                </div>
                <div className="offerList" >
                    <li>10% Instant Discount on Bank Of Baroda Credit Cards on a minimum spend of Rs 2,500. TCA</li>
                    <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                    <li>10% Instant Discount on Bank Of Baroda Credit Cards on a minimum spend of Rs 2,500. TCA</li>
                    <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>

                </div>
            </div>
        </div>
    )
}

