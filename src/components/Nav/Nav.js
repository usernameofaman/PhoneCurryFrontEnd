import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MobileMenu from './Mobile';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Nav(props) {
  const classes = useStyles();
  const [ham , setHam] = React.useState(false)
  const showMobileMenu = () => {
    setHam(!ham)
  }
  let PhoneData = {
    name:"Oneplus",
    ram:"8GB"
  }

  return (
    <>
      <AppBar style={{background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", position:"static"}}>
        <Toolbar>
          <IconButton
            onClick={showMobileMenu}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phonify
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {ham===true ? <MobileMenu closeMobileMenu={showMobileMenu} PhoneData={PhoneData} name="sarthak"/> : "" }
      
    </>
  );
}

export default Nav;
