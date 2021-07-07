import React from 'react';
import "./mobileNav.css";
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PollRoundedIcon from "@material-ui/icons/PollRounded";
import SettingsIcon from "@material-ui/icons/Settings";


function mobileNav() {
    return (
        <div className="mobile-nav">
            <NavLink to="/embellish-admin-panel/"><HomeRoundedIcon style={{ fill: "#000" }}/></NavLink>
            <NavLink to="#"><PollRoundedIcon style={{ fill: "#000" }}/></NavLink>
            <NavLink to="/embellish-admin-panel/management/banner"><SettingsIcon style={{ fill: "#000" }}/></NavLink>

        </div>
    )
}

export default mobileNav
