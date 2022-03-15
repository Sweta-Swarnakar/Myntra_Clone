import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, InputBase, Box} from '@material-ui/core';


const useStyle = makeStyles(({
    search: {
        borderRadius: 2,
        marginLeft: '6%',
        marginTop: 10,
        width: '30%',
        backgroundColor: '#fff',
        display: 'flex',
        
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'grey',
        background: "#EBEFF2"
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%',
        background: '#EBEFF2',
       
        
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
        
       
    }
}))

export const SearchBar = () => {
    const classes = useStyle();
   

   
    return (
        <div className={classes.search}>
             <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
           
          
        </div>
    )
}

