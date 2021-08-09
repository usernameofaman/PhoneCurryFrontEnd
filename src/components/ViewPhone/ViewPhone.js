import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';




const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles((theme) => ({
  cardd: {
    width: "250px",
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  DiaCard: {
    // flexGrow: 1,
    // maxWidth : 400,
    minWidth: 350,
    minHeight: 550,
    marginTop: 90,



  },
  root: {
    flexGrow: 1,
    maxWidth: 345,




  },

  insidedialoge: {

  },
  title: {
    flexGrow: 1,
  },

  card: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // width: "250px",
    // height: "170px",
    // padding: "25px",
    // marginTop: "30px",
    // backgroundColor: "#7F000000",
    cursor: "pointer",


  },
  media: {
    height: 340,
  },

  confirmButton: {
    width: "100%",
    margin: "20px 5px 5px 5px",
  },
  phoneCard: {
    margin: "10px 0px 10px 0px ",
  },
  root: {
    display: 'flex',
  },

}));

const Container = styled.div`

// // background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  display: flex;
  flex-wrap : wrap;
  justify-content: space-between;
//   flex-direction:row;
  // align-items:center;
  
//   height : 15vh;
padding : 10%;

// `;

function SavePhoneData(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [selectedPhone, setSelectedPhone] = React.useState('');

  const handleClickOpen = (phone) => {
    console.log(phone)
    setSelectedPhone(phone)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <>
      <Container>
        {props.state.phoneData.map((phone) => (

          <Card className={classes.cardd} onClick={() => handleClickOpen(phone)} >
            <CardActionArea>
              <CardMedia style={{ width: "90px", height: "200px", marginLeft:"70px", marginTop:"20px"  }}
                className={classes.media}>
                <img style={{ width: "100px", height: "200px",  }}src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70" alt="" />
              
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {phone.Name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {phone.Brand}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {phone.Price} INR
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>


            </CardActions>
          </Card>
        ))}
      </Container>




      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar style={{ background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", position: "static" }} className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {selectedPhone.Name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              {selectedPhone.Brand}
            </Button>
          </Toolbar>
        </AppBar>

        <Card style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className={classes.DiaCard}>
          <CardContent>
            <img src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg" alt="" />
            <Typography style={{ fontSize: "30px", fontWeight: "bolder" }} >
              Specifications
              <Typography>
                DisplayRes : {selectedPhone?.Specification?.DisplayRes}
              </Typography>
              <Typography>
                DisplayType : {selectedPhone?.Specification?.DisplayType}
              </Typography>
              <Typography>
                Ram : {selectedPhone?.Specification?.Ram}
              </Typography>
              <Typography>
                Weight : {selectedPhone?.Specification?.Weight}
              </Typography>
              <Typography>
                Os : {selectedPhone?.Specification?.Os}
              </Typography>
              <Typography>
                InternalMemory : {selectedPhone?.Specification?.InternalMemory}
              </Typography>
              <Typography>
                ExternalMemory : {selectedPhone?.Specification?.ExternalMemory}
              </Typography>
              <Typography>
                CameraSecondary : {selectedPhone?.Specification?.CameraSecondary}
              </Typography>
              <Typography>
                CameraVideoRes : {selectedPhone?.Specification?.CameraVideoRes}
              </Typography>
              <Typography>
                Weight : {selectedPhone?.Specification?.Weight}
              </Typography>
              <Typography>
                is5G : {selectedPhone?.Specification?.is5G}
              </Typography>

            </Typography>

          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
       


      </Dialog>





      );
    </>
  );

}
export default SavePhoneData;
