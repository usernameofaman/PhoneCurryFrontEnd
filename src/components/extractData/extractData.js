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

function ExtractData(props) {
  const classes = useStyles();
  const [url, setURL] = React.useState({
    url: "",
  });
  const handleInputs = (e) => {
    setURL({ url: e.target.value });
    console.log(url)
  };

  const PostData = async (e) => {
    e.preventDefault();
    const address = url;
    const websiteData = await fetch("https://www.google.com",{method:"GET"})
    console.log(websiteData)

    // const res = await fetch("/extractData", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     websiteData
    //   }),
    // }).then((res) => res.json());
    // if(res.error)
    // window.alert(res.error)
    // if(res.status === 200){
    // window.alert("Data Saved Successfully")
    // }
  };

  return (
    <>
      <Container>
        <Card className={classes.card}>
          <TextField
            className={classes.TextField}
            label="URL"
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

export default ExtractData;
