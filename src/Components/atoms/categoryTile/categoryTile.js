import React from 'react';
import "./../bannerTile/bannerTile.css";
import attachmentButton from "./../../../Assets/tile-icons/attachment.svg";
import TileButtons from './../tileButtons/tileButtons';

function CategoryTile(props) {
    return (
        <div className="banner-tile flex center-2">
        <span className="banner-image">
          <img src={props.image} alt=""></img>
        </span>
        <span className="attachment-container flex center-2">
          <span className="attachment-btn">
            <img src={attachmentButton} alt=""></img>
          </span>
          <span className="attachment-text">{props.name}</span>
        </span>
        <span>
          <TileButtons
            deleteFunc={props.deleteFunc}
            editFunc={() => props.modalController("edit", props.id, "category")}
          ></TileButtons>
        </span>
        </div>
    );
}

export default CategoryTile;
