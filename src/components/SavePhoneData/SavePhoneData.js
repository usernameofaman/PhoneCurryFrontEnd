import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
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
    width: "750px",
    padding: "25px",
    marginTop: "30px",
  },
  confirmButton: {
    width: "100%",
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
    Model: "",
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
    const { Name,
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
      is5G, } = phone;
    console.log(Name, Brand, Model, Processor, Ram, Display)

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
    if (res.error)
      window.alert(res.error)
    if (res.status === 200) {
      window.alert("Data Saved Successfully")

    }
  };

  return (
    <>
      <Container>
        <Card className={classes.card}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "35px" }}>

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
                label="Processor"
                name="Processor"
                onChange={handleInputs}

              />
              <TextField
                variant="outlined"
                className={classes.TextField}
                label="Price"
                name="Price"
                type="Number"
                onChange={handleInputs}

              />

              <form style={{ marginTop: "10px" }} className={classes.container} noValidate>
                <TextField 
                  variant="outlined"
                  id="datetime-local"
                  name="ReleaseDate"
                  label="ReleaseDate"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  onChange={handleInputs}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
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
                label="DisplayRes"
                name="DisplayRes"
                type="Name"
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
                label="Weight"
                name="Weight"
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

            </div>
            <div style={{ marginLeft: "35px" }} >
              <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">is5G</InputLabel>
                <Select
                  native
                  onChange={handleInputs}
                  label="is5G"
                  inputProps={{
                    name: 'is5G',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </Select>
              </FormControl>

              <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">OS</InputLabel>
                <Select
                  native
                  onChange={handleInputs}
                  label="Os"
                  inputProps={{
                    name: 'Os',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Android"}>Android</option>
                  <option value={"iOS"}>iOS</option>
                  <option value={"Windows"}>Windows</option>
                </Select>
              </FormControl>

              <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Ram</InputLabel>
                <Select
                  native
                  onChange={handleInputs}
                  label="Ram"
                  inputProps={{
                    name: 'Ram',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"3GB"}>3GB</option>
                  <option value={"4GB"}>4GB</option>
                  <option value={"6GB"}>6GB</option>
                  <option value={"8GB"}>8GB</option>
                </Select>
              </FormControl>


              <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Brand</InputLabel>
                <Select
                  native
                  onChange={handleInputs}
                  label="Brand"
                  inputProps={{
                    name: 'Brand',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"Apple"}>Apple</option>
                  <option value={"OnePlus"}>OnePlus</option>
                  <option value={"Samsung"}>Samsung</option>
                  <option value={"Google"}>Google</option>
                  <option value={"Huawei"}>Huawei</option>
                  <option value={"Xiaomi"}>Xiaomi</option>
                  <option value={"LG"}>LG</option>
                  <option value={"Oppo"}>Oppo</option>
                  <option value={"Vivo"}>Vivo</option>
                  <option value={"Nokia"}>Nokia</option>
                  <option value={"Asus"}>Asus</option>
                  <option value={"Realme"}>Realme</option>
                  <option value={"Lenevo"}>Lenevo</option>
                  <option value={"Asus"}>Asus</option>
                  <option value={"Sony"}>Sony</option>
                  <option value={"Lyf"}>Lyf</option>
                  <option value={"Motorola"}>Motorola</option>
                  <option value={"Infinix"}>Infinix</option>
                  <option value={"ZTE"}>ZTE</option>
                  <option value={"Lava"}>Lava</option>
                </Select>
              </FormControl>




              <FormControl size="small" variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">DisplayType</InputLabel>
                <Select
                  native
                  onChange={handleInputs}
                  label="DisplayType"
                  inputProps={{
                    name: 'DisplayType',
                    id: 'outlined-age-native-simple',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"LCD"}>LCD</option>
                  <option value={"OLED"}>OLED</option>
                  <option value={"AMOLED"}>AMOLED</option>
                  <option value={"TFT"}>TFT </option>
                  <option value={"IPS"}>IPS </option>
                  <option value={"Super AMOLED"}>Super AMOLED</option>
                </Select>
              </FormControl>

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
