import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";


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
  confirmButton: {
    width:"100%",
    margin: "20px 5px 5px 5px",
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function SavePhoneData(props) {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Card className={classes.card}>
        <Typography>
          Name : Oneplus 7T Pro
        </Typography>
        <Typography>
        Ram : 8GB
        </Typography>
        <Typography>
        Processor: SD 855+
        </Typography>
          
          
        </Card>
      </Container>
    </>
  );
}

export default SavePhoneData;
