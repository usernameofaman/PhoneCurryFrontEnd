import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import { Divider } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "500px",
    padding: "25px",
    marginTop: "30px",

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
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
`;

function SavePhoneData(props) {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default SavePhoneData;
