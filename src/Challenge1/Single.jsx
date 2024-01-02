import React from "react";
import Emojis from "./emojis";

function Single(props) {
  return (
    <section className="comp">
      <div className="maincomp">
        <h2 className="imgcomp">{props.img}</h2>
        <h3 className="headcomp">{props.name}</h3>
        <p className="paracomp">{props.ds}</p>
      </div>
    </section>
  );
}
export default Single;
