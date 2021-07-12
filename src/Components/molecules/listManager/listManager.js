import React from "react";
import "./listManager.css";
import BannerTilesHolder from "./../../organisms/bannerTilesHolder/bannerTilesHolder";
import ProductTilesHolder from "./../../organisms/productTilesHolder/productTilesHolder";
import CategoryTilesHolder from "../../organisms/categoryTilesHolder/categoryTilesHolder";
import { Switch, Route, NavLink , withRouter} from "react-router-dom";

function listManager(props) {
  
  const getPath = (type)=>{
    const path = props.location.pathname;
    return path.includes(type);
  }

  return (
    <div className="management-container">
      <div className="management-nav flex center-2">
        <div className="flex center-2 management-nav-links">
        <NavLink to="/embellish-admin-panel/management/banner" style={{textDecoration:"none"}}>
          <div className="management-links">
            <div className="management-links-text" style={getPath("banner") ? {color:"#6F8AE8"} : null}>Manage Banner</div>
            <div className="management-links-border" style={getPath("banner") ? {display:"flex"} : null}></div>
          </div>
        </NavLink>
        <NavLink to="/embellish-admin-panel/management/product" style={{textDecoration:"none"}}>
          <div className="management-links">
            <div className="management-links-text" style={getPath("product") ? {color:"#6F8AE8"} : null}>Manage Products</div>
            <div className="management-links-border" style={getPath("product") ? {display:"flex"} : null}></div>
          </div>
        </NavLink>
        <NavLink to="/embellish-admin-panel/management/category" style={{textDecoration:"none"}}>
          <div className="management-links">
            <div className="management-links-text" style={getPath("category") ? {color:"#6F8AE8"} : null}>Manage Categories</div>
            <div className="management-links-border" style={getPath("category") ? {display:"flex"} : null}></div>
          </div>
        </NavLink>
        </div>
        <div className="add-new-btn" onClick={()=>props.modalController('add','','')}>+ Add New</div>
      </div>

      <Switch>
        <Route path="/embellish-admin-panel/management/banner">
        <BannerTilesHolder modalController = {props.modalController}/>
        </Route>
        <Route path="/embellish-admin-panel/management/product">
          <ProductTilesHolder modalController = {props.modalController}/>
        </Route>
        <Route path="/embellish-admin-panel/management/category">
          <CategoryTilesHolder modalController = {props.modalController}/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(listManager);
