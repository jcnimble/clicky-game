import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="img-thumbnail" onClick={props.imageClick}>
      <img alt={props.name} src={props.image} id={props.id} />
    </div>

  );
}

export default FriendCard;
