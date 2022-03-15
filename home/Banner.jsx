import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'


const useStyle = makeStyles(
    {
        banner: {
            marginTop: 100
        },

        image:{
            width: "90%",
            height: 550,
            marginLeft: '5%'
        }
    }
)

export const Banner = () =>
{
    const classes = useStyle()
    
     const banner = [
         "https://pbs.twimg.com/media/FAyW_FfVQAMSciq.jpg",
       "https://assets.myntassets.com/assets/images/retaillabs/2021/9/25/2ddcd045-00fe-4409-bab9-bb78a5e6660e1632554603260-landing-page-banner-img-eors-400.jpg",
        "https://baggout.com/wp-content/uploads/2020/12/Kiara_PS-Banner_02_1024x500.jpg",
     ]

    return (
        <>
           <Carousel className={classes.banner} animation="slide" autoPlay={true} navButtonsAlwaysVisible={true}>
                {
                    banner.map(image  =>
                        (
                            <img src= {image} className={classes.image} />
                        ))
                }
           </Carousel>
        </>
    )
} 