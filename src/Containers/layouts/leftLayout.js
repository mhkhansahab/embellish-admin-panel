import React from "react";
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Logo from "./../../Components/atoms/logo/logo";
import Navbar from "./../../Components/molecules/navbar/navbar";

function leftLayout() {
  return (
    <div className="left-layout">
      <div className="left-layout-logo">
        <Logo></Logo>
      </div>
      <Navbar></Navbar>
    </div>
  );
}

export default leftLayout;
