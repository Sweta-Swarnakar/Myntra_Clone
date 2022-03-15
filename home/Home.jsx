import { ClassNames } from "@emotion/react";
import {makeStyles, Box} from "@material-ui/core";
import {Banner} from "./Banner";
import {Footer} from "../footer/Footer"

const useStyle = makeStyles(
    {

    main:{
        background: "#EDF3F7 "
        
    },

    singleImg:{
        width:'100%'
    },

    flexImg: {
        display: 'flex',
        width: "98%",
        marginLeft: '1%'
       
    },

    flexImgs: {
        width: '50%'
    },

    firstDiv: {
        width: '20%'
    },
    cat: {
         width: '100%'
     },

    catDiv:{
        width: '16.66%'
    }
    

    

})



export const Home = () => {

    const classes = useStyle();
    const bankUrl = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/22/605afc83-63fd-4f49-8d01-adad963322c31645531441053-Desktop.jpg"
    const img1 = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/9f5aeebf-bdfc-4086-a611-ca6c79a213641645592523615-Dk1_Extra-250-Off-on-must-have-styles_01.jpg"
    const img2 = "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8c08c6e9-d08d-4d6e-86f8-252df2b65c5f1645592523606-Dk1_Extra-250-Off-on-must-have-styles_02.jpg"
    const deals = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/fa0e52f1-62ad-449e-bab4-549e3a8d6eee1645184509714-Sectional-Header-16.jpg";
    
    const firstDivImg1 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/fa2750b0-2b34-4943-bef7-619d32ce9bb81645110051520-Best_of_Dresses.png";
    const firstDivImg2 =  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/e8ae2c76-1b62-4943-bc5d-52eede82ee461645110054355-Woodland-_Red_Chief_-_more_Min_35__off.png";
    const firstDivImg3 =  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/0f37e81a-6bbd-4271-8e36-0b0c3ee040d11645110012572-Top_sellers_of_western_wear_.png";
    const firstDivImg4 =  "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/f37e34db-6307-44ae-accc-7c719e2202ca1645110052333-Kurta_Sets_1499__999.png";
    const firstDivImg5 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/a6164b44-d34a-47c1-95ab-e32f19532aeb1645110051666-Cartlon_London-Roadster-_Dressberry_-_more_-_Min.60_off.jpg";
    
    const offer = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/67f5bd02-8b9f-4328-bc90-eec2f7f7677a1645184509621-Sectional-Header-1.jpg";
    
    const secDivImg1 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/4341fe90-ee6a-4857-8cae-e17f60a981241645091289566-Adidas.jpg";
    const secDivImg2 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/9e50d189-910d-40ca-b1e5-e81cc728616e1645091289648-Jack_-_Jones.jpg";
    const secDivImg3 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/104ddee3-ecd5-43c2-8d64-5957e4b8ad401645091289667-Marks_-_Spencer.jpg";
    const secDivImg4 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/daa4eed2-0ba9-491a-a969-4a71369d956e1645091289710-Puma.jpg";
    const secDivImg5 = "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/17/7bfeda92-fa8e-46c9-b862-ca088fdb69671645091289769-USPA_Kids_min_50_OFF.jpg"
  
    const cate = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/1e48297c-0e36-4754-929e-0091d81bc1191645184509701-Sectional-Header-14.jpg"
   const catDivImg1 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0f3792a7-6d3d-453a-94ef-b62195b1a8381645176963610-Clearance_DK_HP_02.jpg"
   const catDivImg2 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/185f9fc2-3c5b-49c8-b9cb-7ef1cdcb2a3f1645176963617-Clearance_DK_HP_03.jpg"
    
   const catDivImg3 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/0efdd330-c3bf-42ef-97c9-746387a287ff1645176963625-Clearance_DK_HP_04.jpg"
   const catDivImg4 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/46651033-7dc5-43d8-b130-9e5b6fbc48851645176963633-Clearance_DK_HP_05.jpg"
   const catDivImg5 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b8698182-0561-4905-9a33-e9efab85888a1645176963641-Clearance_DK_HP_06.jpg"
   const catDivImg6 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/16e94d11-13da-457b-a105-b6fa84f2f8531645176963648-Clearance_DK_HP_07.jpg"
   
   const catDivImg7 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/b6651e12-10d6-422c-a7be-446663fd472f1645176963656-Clearance_DK_HP_08.jpg"
   const catDivImg8 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/44b23c5b-93c8-438c-a493-4cc23fdeea391645176963662-Clearance_DK_HP_09.jpg"
   const catDivImg9 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/c82d64b6-fd66-4f25-a5ba-dd313f99fe3c1645176963732-Clearance_DK_HP_16.jpg"
   const catDivImg10 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/21a13fbf-ef34-4946-ac1b-dde789d06d8a1645176963679-Clearance_DK_HP_11.jpg"
   const catDivImg11 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/eacc3423-f384-4f32-93e1-4431e65811361645176963687-Clearance_DK_HP_12.jpg"
   const catDivImg12 = "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/94fec5ee-f4f7-4755-9dd7-014a593879dd1645176963696-Clearance_DK_HP_13.jpg"

   
    return(

        <>
            <Box className={classes.main}>
                        <Banner/>
                        <img src={bankUrl} className={classes.singleImg}/>

                        <Box className={classes.flexImg}>
                            <img src={img1} className={classes.flexImgs}/>
                            <img src={img2} className={classes.flexImgs}/> 
                        </Box>
                        <img src={deals} className={classes.singleImg}/>

                        <Box className={classes.flexImg}>
                        <img src={firstDivImg1} className={classes.firstDiv}/>
                        <img src={firstDivImg2} className={classes.firstDiv}/>
                        <img src={firstDivImg3} className={classes.firstDiv}/>
                        <img src={firstDivImg4} className={classes.firstDiv}/>
                        <img src={firstDivImg5} className={classes.firstDiv}/>
                        </Box>
 
                        <img src={offer} className={classes.singleImg}/>
                        
                        <Box className={classes.flexImg}>
                        <img src={secDivImg1} className={classes.firstDiv}/>
                        <img src={secDivImg2} className={classes.firstDiv}/>
                        <img src={secDivImg3} className={classes.firstDiv}/>
                        <img src={secDivImg4} className={classes.firstDiv}/>
                        <img src={secDivImg5} className={classes.firstDiv}/>
                        </Box>

                        <img src={cate} className={classes.singleImg}  />

                        <Box className={classes.cat}>
                        <img src={catDivImg1} className={classes.catDiv}/>
                        <img src={catDivImg2} className={classes.catDiv}/>
                        <img src={catDivImg3} className={classes.catDiv}/>
                        <img src={catDivImg4} className={classes.catDiv}/>
                        <img src={catDivImg5} className={classes.catDiv}/>
                        <img src={catDivImg6} className={classes.catDiv}/>
                        </Box>

                        <Box className={classes.cat}>
                        <img src={catDivImg7} className={classes.catDiv}/>
                        <img src={catDivImg8} className={classes.catDiv}/>
                        <img src={catDivImg9} className={classes.catDiv}/>
                        <img src={catDivImg10} className={classes.catDiv}/>
                        <img src={catDivImg11} className={classes.catDiv}/>
                        <img src={catDivImg12} className={classes.catDiv}/>
                        </Box>

                        <Footer/>
                              
            </Box>   
        
        </>
        
    )
}


