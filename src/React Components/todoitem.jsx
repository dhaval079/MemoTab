import React, { useState } from "react";


function Todoitem(props){

    const [isdone,setisdone]=useState(false);

    function handlechange(){
        setisdone(prevalue =>{
            return !prevalue;
        })
    }

    return(
        <div onClick={() =>{
                props.onChecked(props.id)
            }}>
        <li style={{textDecoration : isdone ? "line-through" : "none"}}>{props.text}</li>
        </div>
    )
}
// onclick()
export default Todoitem;