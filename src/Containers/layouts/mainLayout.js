import LeftLayout from "./leftLayout";
import RightLayout from "./rightLayout";
import MobileNav from "../../Components/organisms/mobileNav/mobileNav";
import Card from "./../../Components/atoms/card/card";
import "./layout.css";
import React, { useEffect } from "react";
import {useSelector} from "react-redux";

function MainLayout() {
    
  const currentUser = useSelector((state)=>state.user);

    useEffect(() => {
      const isLogin = window.sessionStorage.getItem("isLogin");
      if(isLogin){
        currentUser.isLogin = true;
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
