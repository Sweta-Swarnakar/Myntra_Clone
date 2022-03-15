import { AppBar, Toolbar, makeStyles, Box, Typography} from "@material-ui/core";
import { SearchBar } from "./SearchBar";
import { Iconbuttons } from "./Iconbuttons";
// import {Link} from "react-router-dom"
import {Inlinenav} from "./Inlinenav"




const useStyle = makeStyles(
    {
        header: {
           background: "white",
           height: 77,
           boxShadow: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
           
        },

        logo: {
             width: 60,
             
        },

        

        container: {
            display: 'flex',
            color: 'black',
            fontSize: 'bold',
            paddingLeft: '2%',
            marginTop: "1%"
        },

        subHeading: {
            padding: 15,
           
        }
       
    }
)



export  const Header = () =>
{
     const classes = useStyle();
     const logoUrl = "https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format&q=35&w=1200";
    return(
        <AppBar className={classes.header}>
            <Toolbar>
                {/* <Link to="/"> */}
                <Box>
                 <img src= {logoUrl} className={classes.logo}/>
                 </Box>
                 {/* </Link> */}
                 <Box component="span" className={classes.container}>
                        <Inlinenav/>
                        
                        
                 </Box>
                 <SearchBar/>
                 <Iconbuttons/>
            </Toolbar>
           
        </AppBar>
    )
}

