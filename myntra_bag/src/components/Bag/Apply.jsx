import React from 'react';
import couponIcon from "./Images/couponIcon.png";
import giftImage from "./Images/giftImage.png"
import "./BagNavbar.css"
export const Apply = () => {
    const bagD = [{
        id: 11,
        categories: "shirt",
        size: "Sizes : 39, 40, 42, 44...",
        title: "Men Blue Regular Fit Printed Casual Shirt",
        price: "699",
        gender: "men",
        description:
            "Green and White printed casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket",
        brand: "Roadster",
        color: "navyBlue",
        discount: 40,
        off_price: 1049,
        images: {
            image1:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
            image2:
                "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg",
            image3:
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1364628/2016/8/31/11472636737673-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-3.jpg",
            image4:
                "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1364628/2016/8/31/11472636737656-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-4.jpg",
        },
        rating: 3.9,
        count: 29,
    }]
    return (
        <div>
            <div className="fontBold font14">
                COUPONS
            </div>
            <div className="coupon">
                <div>
                    <img src={couponIcon} alt="" width="22px" />
                </div>
                <div>Apply Coupons</div>
                <div>APPLY</div>
            </div>
            <div className="marginTop borderBottom">
                <div className="fontBold font14 marginTop20">GIFTING AND PERSONILISATION</div>
                <div className="marginTop ">
                    <img src={giftImage} alt="" width="100%" />
                </div>
            </div>
            <div>
                <div className="fontBold font14 marginTop20">PRICE DETAILS ({bagD.length} Items)</div>
                <div className="priceFlex marginTop">
                    <div>Total MRP</div>
                    <div>₹1200</div>
                </div>
                <div className="priceFlex lineHeight">
                    <div>Discount on MRP</div>
                    <div className="teal">-₹400</div>
                </div>
                <div className="priceFlex lineHeight">
                    <div>Coupon Discount</div>
                    <div className="pink cursor">Apply Coupon</div>
                </div>
                <div className="priceFlex borderBottom lineHeight">
                    <div>Convenience Fee
                        <span className="pink fontBold cursor" > Know More</span>
                    </div>
                    <div>
                        <span className="lineThrough">₹99</span>
                        <span className="teal"> FREE</span>
                    </div>
                </div>
                <div className="priceFlex marginTop fontBold">
                    <div>Total Amount</div>
                    <div>₹800</div>
                </div>
                <div  className="placeOrderBtn marginTop font14 fontBold cursor" >PLACE ORDER</div>
            </div>
        </div>
    );
};

