import React from 'react'
import "./logo.css";
import Logo from "./../../../Assets/logo-black.png";

function logo() {
    return (
        <div className="whole-logo flex center-1 center-2">
            <img src={Logo} alt="Logo"></img>
        </div>
    );
}

export default logo;
