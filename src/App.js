import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import Redux from "./components/Redux/ReduxUI"
import Nav from "./components/Nav/"
import SavePhoneData from "./components/SavePhoneData/SavePhoneData"
import ViewPhone from "./components/ViewPhone"
import ExtractData from "./components/extractData/extractData"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Nav name={"sarthak"}/>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/savePhoneData" component={SavePhoneData} />
        <Route exact path="/viewPhone" component={ViewPhone} />
        <Route exact path="/ExtractData" component={ExtractData} />
        <Route path="/signin" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Redux" component={Redux} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
