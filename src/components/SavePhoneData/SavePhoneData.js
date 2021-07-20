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
    margin: "10px 0px 0px 0px",
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
    Price: "",
    ReleaseDate: "",
    DisplayRes: "",
    DisplayType: "",
    Weight: "",
    Os: "",
    InternalMemory: "",
    ExternalMemory: "",
    CameraMain: "",
    CameraSecondary: "",
    CameraFront: "",
    CameraVideoRes: "",
    is5G: "",
  });
  console.log(phone);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log(value);
    setPhone({ ...phone, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {  Name, 
      Model, 
      Brand, 
      Processor, 
      Price,
      Display,
      ReleaseDate,
      Ram, 
      DisplayRes,
      DisplayType,
      Weight,
      Os,
      InternalMemory,
      ExternalMemory,
      CameraMain,
      CameraSecondary,
      CameraFront,
      CameraVideoRes,
      is5G,} = phone;
    console.log(Name, Brand,Model, Processor, Ram, Display)

    const res = await fetch("/SavePhoneData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name, 
        Model, 
        Brand, 
        Processor, 
        Price,
        Display,
        ReleaseDate,
        Ram, 
        DisplayRes,
        DisplayType,
        Weight,
        Os,
        InternalMemory,
        ExternalMemory,
        CameraMain,
        CameraSecondary,
        CameraFront,
        CameraVideoRes,
        is5G,
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
         <div style={{display:"flex" }}>
         <div style={{marginRight:"35px"}}>
          <TextField
           variant="outlined"
           
            className={classes.TextField}
            label="Name"
            name="Name"
            onChange={handleInputs}
          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Model"
            name="Model"
            onChange={handleInputs}
          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Brand"
            name="Brand"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Processor"
            name="Processor"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Price"
            name="Price"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Display"
            name="Display"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="ReleaseDate"
            name="ReleaseDate"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="CameraFront"
            name="CameraFront"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="CameraSecondary"
            name="CameraSecondary"
            onChange={handleInputs}

          />
          </div>
          <div>
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Ram"
            name="Ram"
            onChange={handleInputs}
          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="DisplayRes"
            name="DisplayRes"
            onChange={handleInputs}
          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="DisplayType"
            name="DisplayType"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Weight"
            name="Weight"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="Os"
            name="Os"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="InternalMemory"
            name="InternalMemory"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="ExternalMemory"
            name="ExternalMemory"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="CameraVideoRes"
            name="CameraVideoRes"
            onChange={handleInputs}

          />
          <TextField
           variant="outlined"
            className={classes.TextField}
            label="is5G"
            name="is5G"
            onChange={handleInputs}

          />
          </div>
         </div>
          <Button onClick={PostData} className={classes.confirmButton} variant="contained" color="primary">
            Save
          </Button>
        </Card>
      </Container>
    </>
  );
}

export default SavePhoneData;
