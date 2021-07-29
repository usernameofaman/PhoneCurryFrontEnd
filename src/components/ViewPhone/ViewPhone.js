import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    backgroundColor: "rgba(0, 0, 0, 0.51)",
    


  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  TextField: {
    width: "100%",
    margin: "10px 0px 0px 0px"
  },
  card: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    width: "250px",
    height: "170px",
    padding: "25px",
    marginTop: "30px",
    backgroundColor: "#7F000000",
    cursor: "pointer"


  },
  media: {
    height: 240,
  },

  confirmButton: {
    width: "100%",
    margin: "20px 5px 5px 5px",
  },
  phoneCard: {
    margin: "10px 0px 10px 0px ",
  }
}));

const Container = styled.div`

background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  display: flex;
  justify-content: center;
  flex-direction:Row;
  align-items:center;
  gap: 80px;
  background: ;
`;

function SavePhoneData(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return (
    <>
      {/* <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.card}>
            <Typography>
              {phone.Name}
            </Typography>
            <Typography>
              {phone.Price}

            </Typography>
            <Typography>
              {phone.Brand}
            </Typography>
          </Card>
        ))}
      </Container>
      <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.card}>
            <Typography>
              {phone.Name}
            </Typography>
            <Typography>
              {phone.Price}

            </Typography>
            <Typography>
              {phone.Brand}
            </Typography>
          </Card>
        ))}
      </Container>
      <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.card}>
            <Typography>
              {phone.Name}
            </Typography>
            <Typography>
              {phone.Price}

            </Typography>
            <Typography>
              {phone.Brand}
            </Typography>
          </Card>
        ))}
      </Container>
      <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.card}>
            <Typography>
              {phone.Name}
            </Typography>
            <Typography>
              {phone.Price}

            </Typography>
            <Typography>
              {phone.Brand}
            </Typography>
          </Card>
        ))}
      </Container>
      <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.card}>
            <Typography>
              {phone.Name}
            </Typography>
            <Typography>
              {phone.Price}

            </Typography>
            <Typography>
              {phone.Brand}
            </Typography>
          </Card>
        ))}
      </Container> */}


      {/* <Container>
      {props.state.phoneData.map((phone) => (
      <Card className={classes.card}>
        <CardActionArea>
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
        <CardMedia
          className={classes.media}
          image= "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020_big.jpg.large.jpg"
          title="Contemplative Reptile"
        />
            {phone.Name}
            
            </Typography>
            
            <Typography gutterBottom variant="h5" component="h2">
            {phone.Brand}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
            {phone.Price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {phone.Model}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      ))}
      </Container> */}
      <Container>
        {props.state.phoneData.map((phone) => (
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  Pf
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={phone.Name}

            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
                
              <Typography variant="body2" color="textSecondary" component="p">
                
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
                <Typography>Specifications</Typography>
            </CardActions>
            <Collapse  in={expanded} timeout="auto" unmountOnExit> 
              <CardContent>
                
                <Typography >
                Ram = {phone.Specification.Ram}
                <Typography paragraph>
                Weight = {phone.Specification.Weight}
                <Typography paragraph>
                CameraMain = {phone.Specification.CameraMain} 
                <Typography paragraph>
                CameraSecondary = {phone.Specification.CameraSecondary}
                <Typography paragraph>
                CameraFront = {phone.Specification.CameraFront}
                <Typography paragraph>
                CameraVideoRes = {phone.Specification.CameraVideoRes}
                <Typography paragraph>
                Weight = {phone.Specification.Weight}
                <Typography paragraph>
                is5G = {phone.Specification.is5G}
                 
                <Typography paragraph>
                Os = {phone.Specification.Os}
                 
                <Typography paragraph>
                ExternalMemory = {phone.Specification.ExternalMemory}
                 
                <Typography paragraph>
                InternalMemory = {phone.Specification.InternalMemory}
                 
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                </Typography>
                
                </Typography>
                
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Container>
      );








    </>
  );

}
export default SavePhoneData;
