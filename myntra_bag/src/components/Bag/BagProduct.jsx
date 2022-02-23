import React from 'react'
import "./BagNavbar.css"

export const BagProduct = () => {
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
            {bagD.map((e, i) =>
                <div className='pr marginTop'>
                    <div><img src={e.images.image1} alt=""></img></div>
                    <div><p className='fontBold'>{e.title}</p>
                        <p className='font14'>{e.description}</p>
                        <div className="gridData" >
                            <div className="subGridDiv1 marginTop">Size:{e.selected_size}▼  </div>
                            <div className="subGridDiv2 marginTop}">Qty:{e.quantity}▼</div>
                        </div>
                        <div className='price'> <h3> ₹{e.price}</h3><p className='off'>{e.off_price}</p><p className='disc'>{e.discount}% OFF</p></div>

                    </div>

                  
                </div>
            )}
        </div>
    )
}

// export default BagProduct