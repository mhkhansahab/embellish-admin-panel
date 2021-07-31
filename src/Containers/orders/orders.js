import React, {useEffect} from "react";
import Header from "../../Components/organisms/header/header";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./../../Components/atoms/orderCard/orderCard";
import "./orders.css";
import { NavLink, withRouter, Switch, Route } from "react-router-dom";
import { getCompletedOrders, getPendingOrders, markAsCompleted } from "../../Store/action/actions";

function Newsletter(props) {
  const dispatch = useDispatch();
  const pendingOrders = useSelector((state) => state.orders.pendingOrders);
  const completedOrders = useSelector((state) => state.orders.completedOrders);
  
  useEffect(() => {
      dispatch(getPendingOrders());
      dispatch(getCompletedOrders());
  }, [])
  
  const getPath = (type) => {
    const path = props.location.pathname;
    return path.includes(type);
  };
  const viewOrder = (id)=>{
      window.open("https://embellish-shop.web.app/show_order?order_id=" + id, '_blank');
  }

  return (
    <div>
      <Header upperText="Manage" lowerText="Orders"></Header>
      <div className="newsletter-container">
        <div className="flex center-2 management-nav-links order-nav-links">
          <NavLink
            to="/embellish-admin-panel/orders/pending"
            style={{ textDecoration: "none" }}
          >
            <div className="management-links">
              <div
                className="management-links-text"
                style={getPath("pending") ? { color: "#6F8AE8" } : null}
              >
                Pending Orders
              </div>
              <div
                className="management-links-border"
                style={getPath("pending") ? { display: "flex" } : null}
              ></div>
            </div>
          </NavLink>
          <NavLink
            to="/embellish-admin-panel/orders/completed"
            style={{ textDecoration: "none" }}
          >
            <div className="management-links">
              <div
                className="management-links-text"
                style={getPath("completed") ? { color: "#6F8AE8" } : null}
              >
                Completed Orders
              </div>
              <div
                className="management-links-border"
                style={getPath("completed") ? { display: "flex" } : null}
              ></div>
            </div>
          </NavLink>
        </div>
        <Switch>
          <Route path="/embellish-admin-panel/orders/pending">
          <div className="flex order-tiles-holder">
          {pendingOrders && pendingOrders.length > 0 ? pendingOrders.map((order) => {
          return (
            <OrderCard
              key={order._id}
              id = {order._id}
              name={order.name}
              total={order.total}
              email={order.email}
              phone={order.phone}
              address={order.address}
              payment_method={order.payment_method}
              payment_status={order.payment_status}
              pending = {true}
              viewOrder = {viewOrder}
              markAsCompleted = {markAsCompleted}
            />
          );
        }) : <div>No Order Available</div>
    }
          </div>
          </Route>
          <Route path="/embellish-admin-panel/orders/completed">
          <div className="flex order-tiles-holder">
          {completedOrders && completedOrders.length > 0 ? completedOrders.map((order) => {
          return (
            <OrderCard
            key={order._id}
            id = {order._id}
            name={order.name}
            total={order.total}
            email={order.email}
            phone={order.phone}
            address={order.address}
            pending = {false}
            payment_method={order.payment_method}
            payment_status={order.payment_status}
            viewOrder = {viewOrder}
            markAsCompleted = {markAsCompleted}
            />
          );
        }) : <div>No Order Available</div>
    }
          </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(Newsletter);
