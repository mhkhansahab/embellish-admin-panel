import React from "react";
import Navigator from "./../../atoms/navigator/navigator";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PollRoundedIcon from "@material-ui/icons/PollRounded";
import SettingsIcon from "@material-ui/icons/Settings";

function navbar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="navlinks">
        <Navigator text="Home">
          <HomeRoundedIcon style={{ fill: "#000" }}/>
        </Navigator>
      </NavLink>
      <NavLink to="#" className="navlinks">
        <Navigator text="Analytics">
          <PollRoundedIcon style={{ fill: "#000" }}/>
        </Navigator>
      </NavLink>
      <NavLink to="/management/banner" className="navlinks">
        <Navigator text="Management">
          <SettingsIcon style={{ fill: "#000" }}/>
        </Navigator>
      </NavLink>
    </div>
  );
}

export default navbar;