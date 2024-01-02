import React from "react";
import Input from "./input";

function Login(){
    return (
    <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <button type="submit" placeholder="Submit">Login</button>
    </form>
    )
}

export default Login;