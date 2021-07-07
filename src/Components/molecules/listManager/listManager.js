import React from "react";
import "./listManager.css";
import BannerTilesHolder from "./../../organisms/bannerTilesHolder/bannerTilesHolder";
import ProductTilesHolder from "./../../organisms/productTilesHolder/productTilesHolder";
import { Switch, Route, NavLink } from "react-router-dom";

function listManager(props) {
  return (
    <div className="banner-container">
      <div className="management-nav flex center-2">
        <div className="flex center-2">
        <NavLink to="/management/banner" style={{textDecoration:"none"}}>
          <div className="management-links">
            <div className="management-links-text" style={props.isBanner ? {color:"#6F8AE8"}: null}>Manage Banner</div>
            <div className="management-links-border" style={props.isBanner ? {display:"flex"}: null}></div>
          </div>
        </NavLink>
        <NavLink to="/management/product" style={{textDecoration:"none"}}>
          <div className="management-links product">
            <div className="management-links-text" style={props.isBanner ? null: {color:"#6F8AE8"}}>Manage Products</div>
            <div className="management-links-border" style={props.isBanner ? null: {display:"flex"}}></div>
          </div>
        </NavLink>
        </div>
        <div className="add-new-btn" onClick={()=>props.modalController('add','','')}>+ Add New</div>
      </div>

      <Switch>
        <Route path="/management/banner">
        <BannerTilesHolder modalController = {props.modalController}></BannerTilesHolder>
        </Route>
        <Route path="/management/product">
          <ProductTilesHolder modalController = {props.modalController}></ProductTilesHolder>
        </Route>
      </Switch>
    </div>
  );
}

export default listManager;
