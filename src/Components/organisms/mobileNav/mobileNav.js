import React from 'react';
import "./mobileNav.css";
import { NavLink } from 'react-router-dom';
import {useDispatch} from "react-redux";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PollRoundedIcon from "@material-ui/icons/PollRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../../Store/action/actions';

function MobileNav() {
    const dispatch = useDispatch();
    return (
        <div className="mobile-nav">
            <NavLink to="/embellish-admin-panel/"><HomeRoundedIcon style={{ fill: "#000" }}/></NavLink>
            <NavLink to="/embellish-admin-panel/newsletter"><PollRoundedIcon style={{ fill: "#000" }}/></NavLink>
            <NavLink to="/embellish-admin-panel/management/banner"><SettingsIcon style={{ fill: "#000" }}/></NavLink>
            <span className="mobile-logout" onClick={()=>dispatch(signOut())}><ExitToAppIcon/></span>
        </div>
    )
}

export default MobileNav;
