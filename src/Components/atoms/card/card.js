import React from 'react';
import "./card.css";
import coin from "./../../../Assets/general/coin.svg";

function card(props) {
    return (
        <div className="card">
            <div className="card-image flex center-1 center-2">
                <img src={props.image} alt=""></img>
                <div className="price-div flex center-2">
                    <img src={coin} alt="coin"></img>
                    <span>{props.price}</span>
                </div>
            </div>
            <div className="card-detail">
                <div className="product-type">{props.type}</div>
                <div className="product-name">{props.name}</div>
            </div>
        </div>
    );
}

export default card;
