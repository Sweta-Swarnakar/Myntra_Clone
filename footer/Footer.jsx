import React from 'react'
import "../styles/footer.css";

export const Footer = () => {
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Track Order","Shipping","Cancellation","Returns","Whitehat","Blog"]},
    ]

    return (
        <div>
            <div className="Footerclass">
                {footer1.map((item,j)=><div key={j} className="Footerclassdiv1">
                   <h5 className="colorblack">{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}
                <div  className="Footerclassdiv2">
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                     <div>
                        <img className="footericon1" src="https://github.com/ShaikRiyazuddin/Myntra_Clone/blob/Sweta_myntra/src/images/gstore.png?raw=true" alt="" />
                        <img className="footericon2" src="https://github.com/ShaikRiyazuddin/Myntra_Clone/blob/Sweta_myntra/src/images/apple.png?raw=true" alt="" />
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                    <img src="https://github.com/ShaikRiyazuddin/Myntra_Clone/blob/Sweta_myntra/src/images/Social.png?raw=true" alt="" />
                </div>
                <div>
                    <img className="footer4" src="https://github.com/ShaikRiyazuddin/Myntra_Clone/blob/Sweta_myntra/src/images/Guarantee.png?raw=true" alt="" />
                </div>
            </div>
            <div className="footer5">
            <p className="footerspan">In case of any concern,<span style={{color: "blue"}}>Contact Us</span></p>
            <p>© 2021 www.myntra.com. All rights reserve</p>
            </div>      
        </div>
    )
}

