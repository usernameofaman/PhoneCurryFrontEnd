import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formControl: {
    // margin: theme.spacing(0),
    width: "100%",
    margin: "5px 5px 5px 5px",
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
  colorWhite: {
    color: "white",
  },
  confirmButton: {
    width:"100%",
    margin: "5px 5px 5px 5px",
  },
  cardText:{
    width: "100%",
    padding: "0px 10px 0px 10px",
    textAlign: "center"
  }
}));

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 20px; */
`;
const CardContainer = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  padding: 20px;
`;

function Menu() {
  const classes = useStyles();
  const [minimum, setMinimum] = React.useState("");
  const [maximum, setMaximum] = React.useState("");

  const handleChangeMin = (event) => {
    setMinimum(event.target.value);
  };
  const handleChangeMax = (event) => {
    setMaximum(event.target.value);
  };
  return (
    <HomeContainer>
      <CardContainer>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.cardText}>Let us help you select a good phone for you</Typography>
            <Typography className={classes.cardText}>Start by select a price range</Typography>
            {/* Select Element */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Min
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={minimum}
                onChange={handleChangeMin}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10000}>10,000</MenuItem>
                <MenuItem value={20000}>20,000</MenuItem>
                <MenuItem value={30000}>30,000</MenuItem>
                <MenuItem value={40000}>40,000</MenuItem>
                <MenuItem value={50000}>50,000</MenuItem>
                <MenuItem value={60000}>60,000</MenuItem>
                <MenuItem value={70000}>70,000</MenuItem>
                <MenuItem value={80000}>80,000</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Max
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={maximum}
                onChange={handleChangeMax}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10000}>10,000</MenuItem>
                <MenuItem value={20000}>20,000</MenuItem>
                <MenuItem value={30000}>30,000</MenuItem>
                <MenuItem value={40000}>40,000</MenuItem>
                <MenuItem value={50000}>50,000</MenuItem>
                <MenuItem value={60000}>60,000</MenuItem>
                <MenuItem value={70000}>70,000</MenuItem>
                <MenuItem value={80000}>80,000</MenuItem>
              </Select>
            </FormControl>
            {/* Select Element */}
            <Button className={classes.confirmButton} variant="contained" color="primary">
            View Phones
          </Button>
          </CardContent>
          
        </Card>
      </CardContainer>
    </HomeContainer>
  );
}

export default Menu;
