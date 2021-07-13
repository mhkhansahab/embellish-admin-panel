import React from "react";
import "./layout.css";
import "./../../Styles/media-queries/layout.css";
import Logo from "./../../Components/atoms/logo/logo";
import Navbar from "./../../Components/molecules/navbar/navbar";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch} from "react-redux";
import { signOut } from "../../Store/action/actions";

function LeftLayout() {
  const dispatch = useDispatch();
  return (
    <div className="left-layout">
      <div className="left-layout-logo">
        <Logo></Logo>
      </div>
      <Navbar></Navbar>
      <div className="add-new-btn logout" onClick={()=>dispatch(signOut())}><ExitToAppIcon/> Log Out</div>
    </div>
  );
}

export default LeftLayout;
