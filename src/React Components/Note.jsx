import React from "react";

function Note(props){
    
    function deleteitem(){
        props.ondelete(props.id);
    }
    return (
            <div className="note" style={{ display: "inline-block", margin: "40px" ,marginLeft:"50px",marginRight:"40px"}}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteitem}>Delete</button>
            </div>
    )
}

export default Note;    

