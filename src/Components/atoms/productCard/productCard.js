import React from 'react';
import TileButtons from '../tileButtons/tileButtons';
import "./productCard.css";

function ProductCard(props) {
    return (
        <div className="product-card">
            
            <div className="product-card-img"><img src={props.img}/></div>
            <div className="product-card-detail">
                <div className="product-card-text"><b>Name</b>: {props.name}</div>
                <div className="product-card-text"><b>Description</b>: {props.description}</div>
                <div className="product-card-text"><b>Quantity</b>: {props.quantity}</div>
                <div className="product-card-text"><b>Category</b>: {props.category}</div>
                <div className="product-card-text"><b>Price (PKR)</b>: {props.price_pkr}</div>
                <div className="product-card-text"><b>Price (INR)</b>: {props.price_ind}</div>
                <div className="product-card-text"><b>Price (UAED)</b>: {props.price_uae}</div>
                <div className="product-card-text"><b>Size</b>: {props.sizes}</div>
                <div className="product-card-text"><b>Colors</b>: {props.colors}</div>
                
                <TileButtons editFunc={props.productEditor} deleteFunc={props.productRemover}/>
            </div>
            

        </div>
    )
}

export default ProductCard;
