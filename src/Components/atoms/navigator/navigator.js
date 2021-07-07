import React from 'react'
import "./navigator.css";

function navigator(props) {
    return (
        <div className="whole-navigator flex center-2">
            <div className="navigator-icon flex center-1 center-2">{props.children}</div>
            <div className="navigator-text">{props.text}</div>
        </div>
    );
    }  
export default navigator;