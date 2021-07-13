import LeftLayout from "./leftLayout";
import RightLayout from "./rightLayout";
import MobileNav from "../../Components/organisms/mobileNav/mobileNav";
import Card from "./../../Components/atoms/card/card";
import "./layout.css";
import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { setUser } from "../../Store/action/actions";

function MainLayout() {
    
  const currentUser = useSelector((state)=>state.user);
  const dispatch = useDispatch();

    useEffect(() => {
      const isLogin = window.sessionStorage.getItem("isLogin");
      const user = JSON.parse(window.sessionStorage.getItem("user"));
      
      if(isLogin){
        dispatch(setUser(user));
      }
    }, [])

  return (
    <div className="layout-container">
      {
          currentUser.isLogin ? 
        <>
          <LeftLayout></LeftLayout>
          <RightLayout></RightLayout>
          <MobileNav></MobileNav>
        </>
        : <Card/>
      }
    </div>
  );
}

export default MainLayout;
