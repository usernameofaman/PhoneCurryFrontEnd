import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";


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
  const [phone, setPhone] = React.useState({
    Name: "",
    Brand: "",
    Processor: "",
    Model:"",
    Ram: "",
    Display: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(value);
    setPhone({ ...phone, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { Name, Brand,Model, Processor, Ram, Display } = phone;

    const res = await fetch("/SavePhoneData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Brand,
        Model,
        Processor,
        Ram,
        Display,
      }),
    }).then((res) => res.json());
    if(res.error)
    window.alert(res.error)
    if(res.status === 200){
    window.alert("Data Saved Successfully")

    }
  };

  return (
    <>
      <Container>
        <Card className={classes.card}>
          <TextField
            className={classes.TextField}
            label="Name"
            name="Name"
            onChange={handleInputs}
          />
          <TextField
            className={classes.TextField}
            label="Model"
            name="Model"
            onChange={handleInputs}
          />
          <TextField
            className={classes.TextField}
            label="Brand"
            name="Brand"
            onChange={handleInputs}

          />
          <TextField
            className={classes.TextField}
            label="Processor"
            name="Processor"
            onChange={handleInputs}

          />
          <TextField
            className={classes.TextField}
            label="Ram"
            name="Ram"
            onChange={handleInputs}

          />
          <TextField
            className={classes.TextField}
            label="Display"
            name="Display"
            onChange={handleInputs}

          />
          <Button onClick={PostData} className={classes.confirmButton} variant="contained" color="primary">
            Save
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default SavePhoneData;
