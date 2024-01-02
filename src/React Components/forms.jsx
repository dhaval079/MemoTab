import React from "react";
import { useState } from "react";

function FormsNew(){
   //step 1 make two hooks
   const [name,setName]=useState("");
   const [heading,setHeading]=useState("");

    function handleChange(event){
        console.log(event.target.value);
        console.log(event.target.name);
        setName(event.target.value);
    }
    function handleSubmit(event){
        setHeading(name);
        event.preventDefault();
    }
    return(
        <div>
            <h1>Hello {heading}</h1>
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="Name" placeholder="What's your name" type="text"></input>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default FormsNew;