import React from "react";
import "./bannerTile.css";
import attachmentButton from "./../../../Assets/tile-icons/attachment.svg";
import TileButtons from "./../tileButtons/tileButtons";

function bannerTile(props) {
  return (
    <div className="banner-tile flex center-2">
      <span className="banner-image">
        <img src={props.image} alt=""></img>
      </span>
      <span className="attachment-container flex center-2">
        <span className="attachment-btn">
          <img src={attachmentButton} alt=""></img>
        </span>
        <span className="attachment-text">{props.link}</span>
      </span>
      <span>
        <TileButtons
          deleteFunc={props.deleteFunc}
          editFunc={() => props.modalController("edit", props.id, "banner")}
        ></TileButtons>
      </span>
    </div>
  );
}

export default bannerTile;
