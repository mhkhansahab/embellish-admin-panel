import React from "react";
import "./tileButtons.css";
import deleteButton from "./../../../Assets/tile-icons/delete.svg";
import editButton from "./../../../Assets/tile-icons/edit.svg";


function TileButtons(props) {
  return (
    <div className="tile-btns-container">
      <span className="tile-btn"  onClick={props.editFunc}>
        <img src={editButton} alt=""></img>
      </span>
      <span className="tile-btn" onClick={props.deleteFunc}>
        <img src={deleteButton} alt=""></img>
      </span>
    </div>
  );
}

export default TileButtons;
