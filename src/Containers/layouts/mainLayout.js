import LeftLayout from "./leftLayout";
import RightLayout from "./rightLayout";
import MobileNav from "../../Components/organisms/mobileNav/mobileNav";
import "./layout.css";
import React from 'react'

function mainLayout() {
    return (
        <div className="layout-container">
            <LeftLayout></LeftLayout>
            <RightLayout></RightLayout>
            <MobileNav></MobileNav>
        </div>
    );
}

export default mainLayout;
