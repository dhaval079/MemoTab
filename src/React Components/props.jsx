import React from "react";
import Avatar from "./Avatar";
//react props
function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <p>{props.id}</p>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <p>{props.tel}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Cards;
