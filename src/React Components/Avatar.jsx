import React from "react";
import Cards from "./props";

function Avatar(props){
    return (
        <img className="circle" src={props.img} />
 
    )
}
export default Avatar;