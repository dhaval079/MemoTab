import React from "react";


function Footer(){
    const currentyear = new Date().getFullYear();
    return ( 
    <footer className="footer">
    Copyright &copy; {currentyear}
    </footer> 
         );
}
export default Footer;