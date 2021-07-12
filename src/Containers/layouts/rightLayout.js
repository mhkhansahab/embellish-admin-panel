import React from "react";
import { Switch, Route } from "react-router-dom";
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Home from "./../home/home";
import Management from "./../management/management";
import Newsletter from "../newsletter/newsletter";
import Logo from "./../../Components/atoms/logo/logo";

function rightLayout() {
  return (
    <div className="right-layout">
      <div className="right-layout-logo">
        <Logo />
      </div>
      <Switch>
        <Route path="/embellish-admin-panel/management">
          <Management/>
        </Route>
        <Route path="/embellish-admin-panel/newsletter">
          <Newsletter/>
        </Route>
        <Route path="/embellish-admin-panel/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default rightLayout;
