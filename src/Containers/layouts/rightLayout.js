import React from "react";
import { Switch, Route } from "react-router-dom";
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Home from "./../home/home";
import Management from "./../management/management";
import Logo from "./../../Components/atoms/logo/logo";

function rightLayout() {
  return (
    <div className="right-layout">
      <div className="right-layout-logo">
        <Logo />
      </div>
      <Switch>
        <Route path="/management">
          <Management></Management>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default rightLayout;
