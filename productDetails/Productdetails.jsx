import {Box, makeStyles} from "@material-ui/core";
import StarIcon from '@mui/icons-material/Star';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import {Footer} from "../footer/Footer"




const useStyle = makeStyles({

    container: {
        marginTop: '6%',
        marginLeft: '20'
    },
    
    main: {
        width: '99%',
        display: 'flex'
    },

    flexDivleft:{
        width: '60%',
        marginRight: 20

    },

    flexDivright:{
        width: '45%'
    },
    star:{
        transform: 'scale(0.7)',
        verticalAlign: 'text-bottom',
        color: 'teal'
    },

    button: {
         /* Green */
        border: '1px solid grey',
        padding: 20,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '29',
        fontWeight:"bolder",
        margin: '4px',
        cursor: 'pointer',
        borderRadius: '65%',
        backgroundColor: 'white',
        marginRight: '20px'
      },

      big1:{
          width: "35%",
          margin: "5% 10%",
          textAlign: "center",
          backgroundColor: 'red',
          padding: '2%',
          color: 'white',
          borderRadius: '5px',
          border: 'none'
      },

      big2:{

        width: "25%",
        margin: "5% 10%",
        textAlign: "center",
        padding: '2%',
        backgroundColor: 'white',
        borderRadius: '5px',
        border: '1px solid grey'

      },
      bag: {
          color: "white",
          verticalAlign: 'text-bottom',
      },
      pin:{
          width: "45%",
          marginTop: '20px',
          height: "50px",
          borderRadius: '5px',
          border: "solid grey"
      },
      similar:{
          display: 'flex',
          width:'100%'
      },

      imgs: {
          width: '15.90%',
          marginLeft: "10px",
          border: '1px solid grey'
      },

      imgSize: {
          width:'100%'
      },
      leftImg: {
          display: "flex",
          width: "100%",
         
      },

      leftDivs: {
          width: "48%",
          marginLeft: 10
      }
     





})



export const Productdeatils = () => {

    const classes = useStyle()
    return(
            <Box className={classes.container}>
                
                <div>
                        <p>
                        Home/Clothing/Women Clothing/Dresses/ <span style={{fontWeight: "bolder"}}>SASSAFRAS Dresses/More By SASSAFRAS</span>
                        </p>

                        <div className={classes.main}>
                            <div className={classes.flexDivleft}>
                                <div className={classes.leftImg}>
                                     <div className={classes.leftDivs}>
                                         <img style={{width: '100%'}} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big%20image1.webp"/>
                                     </div>
                                     <div className={classes.leftDivs}>
                                         <img style={{width: '100%'}}  src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big2.webp"/>
                                     </div>
                                </div>
                                
                                <div className={classes.leftImg}>
                                      <div className={classes.leftDivs}>
                                          <img style={{width: '100%'}}  src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big3.webp"/>
                                      </div>
                                      <div className={classes.leftDivs}>
                                          <img style={{width: '100%'}}  src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big4.webp"/>
                                      </div>

                                </div >
                                
                                <div  className={classes.leftImg}>
                                        <div className={classes.leftDivs}>
                                            <img style={{width: '100%'}}  src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big5.webp"/>
                                        </div>
                                        <div className={classes.leftDivs}>
                                            <img style={{width: '100%'}}  src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/big2.webp"/>
                                        </div>
                                </div>
                                
                        </div>
                         
                         
                        <div className={classes.flexDivright}>
                             <h2>SASSAFRAS</h2>
                             <h3 style={{color: 'grey', fontWeight:'lighter'}}>Black & Pink Floral Printed Wrap Dress</h3>
                             <p>4.4 <StarIcon  className={classes.star}/>|13.8k Ratings</p>
                             <hr/>
                             <h3>Rs. 815 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs.2399</span><span style={{color: 'red'}}> (66% OFF)</span></h3>
                             <h6 style={{color: 'teal'}}>inclusive of all taxes</h6>

                             <h4>SELECT <span style={{color: 'red'}}>SIZESIZE CHART </span></h4>

                             <div>
                             <button className={classes.button} >XS</button>
                             <button className={classes.button}>S</button>
                             <button className={classes.button}>M</button>
                             <button className={classes.button}>L</button>
                             <button className={classes.button}>XL</button>
                             </div>

                             <button className={classes.big1}><ShoppingBagIcon className={classes.bag}/>ADD TO BAG</button>
                             <button className={classes.big2}><FavoriteBorderOutlinedIcon style={{verticalAlign: 'text-bottom'}}/>WISHLIST</button>
                             <h3>DELIVERY OPTIONS<span><LocalShippingOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <input placeholder="Enter A PIN code" className={classes.pin}/>
                             <h6>Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                             <p>100% Original Products</p>
                             <p>Pay on delivery might be available</p>
                             <p>Easy 30 days returns and exchanges</p>
                             <p>Try & Buy might be available</p>

                             <h3>BEST OFFERS <span><LocalOfferOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <h4>Best Price: Rs. 615</h4>
                             <li>Applicable on: Orders above Rs. 799 (only on first purchase)</li>
                             <li>Coupon code: HELLO200</li>
                             <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
                             <h6 style={{color: 'red'}}>View Eligible Products</h6>
                             <h4>Get additional offer</h4>
                             <p>Buy this style and unlock additional 10% off on a selected catalogue.</p>
                             <h6 style={{color: 'red'}}>View Products</h6>
                             <h4>EMI option available</h4>
                             <li>EMI starting from Rs.39/month</li>
                             <h6 style={{color: 'red'}}>View Plan</h6>
                             <hr/>
                             <h3>PRODUCT DETAILS<span><EventNoteOutlinedIcon style={{verticalAlign: 'text-bottom'}}/></span></h3>
                             <p>Black and pink printed woven wrap dress with tie-up detail, has a v-neck, three-quarter sleeves, concealed zip closure, an attached lining, and flared hem</p>
                             <h3>Material & Care</h3>
                             <p>100% polyester</p>
                             <p>Machine-wash</p>
                        </div>
                         
                    </div>

                       <div>
                             <h3 style={{marginLeft: "10px"}}>SIMILAR PRODUCTS</h3>
                             <div className={classes.similar}>
                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/pic1.webp"/>
                                 <h4>Nayo</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 714 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/pic2.webp"/>
                                 <h4>SASSFRAS</h4>
                                 <p>Accordin pleant A-line dress</p>
                                 <h5>Rs. 790 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1099</span> <span style={{color: 'red'}}>(67% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/pic3.webp"/>
                                 <h4>Harpa</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 814 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 2299</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img  className={classes.imgSize} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/pic4.webp"/>
                                 <h4>PlusS</h4>
                                 <p>Floral A line dress</p>
                                 <h5>Rs. 614 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 1200</span> <span style={{color: 'red'}}>(66% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://github.com/ShaikRiyazuddin/Myntra_Clone/blob/Sweta_myntra/src/images/pic5.jpg?raw=true"/>
                                 <h4>Anouk</h4>
                                 <p>Floral Cotton kurta dress</p>
                                 <h5>Rs. 1000 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 2299</span> <span style={{color: 'red'}}>(60% 0ff)</span></h5>
                                 </div>

                                 <div className={classes.imgs}>
                                 <img className={classes.imgSize} src="https://raw.githubusercontent.com/ShaikRiyazuddin/Myntra_Clone/Sweta_myntra/src/images/pic6.webp"/>
                                 <h4>U&F</h4>
                                 <p>Floral Maxi dress</p>
                                 <h5>Rs. 1814 <span style={{textDecoration: "line-through", color: 'grey', fontWeight:"lighter"}}>Rs. 2799</span> <span style={{color: 'red'}}>(56% 0ff)</span></h5>
                                 </div>

                                 
                            </div>
                        </div>
                </div>
                <Footer/>
            </Box>

           
       
    )
}