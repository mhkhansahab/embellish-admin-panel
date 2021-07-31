import React from 'react';
import "./../productCard/productCard.css";
import {useDispatch} from "react-redux";

function OrderCard(props) {
    const dispatch = useDispatch();
    return (
        <div className="product-card order-card">
            <div className="product-card-detail">
                <div className="product-card-text"><b>Name</b>: {props.name}</div>
                <div className="product-card-text"><b>Email</b>: {props.email}</div>
                <div className="product-card-text"><b>Phone</b>: {props.phone}</div>
                <div className="product-card-text"><b>Address</b>: {props.address}</div>
                <div className="product-card-text"><b>Payment Method</b>: {props.payment_method}</div>
                <div className="product-card-text"><b>Payment Status</b>: {props.payment_status ? "Paid" : "Not Paid"}</div>
                <div className="product-card-text"><b>Total</b>: {props.total}</div>
                <div className="fulfilled-btn" onClick={()=>props.viewOrder(props.id)}>View Order</div>
                {
                    props.pending 
                    ?
                    <div className="fulfilled-btn" onClick={()=>dispatch(props.markAsCompleted({order_id : props.id, order_status: true}))}>Mark as Completed</div>
                    :
                    <div className="fulfilled-btn" onClick={()=>dispatch(props.markAsCompleted({order_id : props.id, order_status: false}))}>Mark as Pending</div> 
                }
                
            </div>
            
        </div>
    )
}

export default OrderCard;
