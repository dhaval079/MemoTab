import React from "react"
import Login from "./login"

var isloggedin = true;


function Loginmain(){
    return (
      <div className="container">{
        isloggedin === true ? <h1>hello world</h1> : <Login />  //this is a ternary operator
      }</div>
    )
  }

export default Loginmain;