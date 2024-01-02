import React from "react";
//!for importing multiple functions :
// import Input,{input1} from "../loginpage/input";

function Hooks() {


  const [count, setcount] = React.useState(0);
  // count is initial name of the array and next element is the funciton to be passed

  // //*you can further create object literal :
  // const {countno, conunname} = count;

  // //*you can further give names of the objects literal
  // const {countno : num1 ,countname : string} = count;

  // //*you can further provide value of the objects which it will take in action if the object's value is undefined 
  // const {countno = "433" ,countname = "dhaval"} = count;

  // //*if there is another object inside an object do this:
  //    const {countno, conuntime , counname : {fname,lname} } = count;

  function increase() {
    setcount(count+1); //Note: here don't use count++ as we are using hooks element setcount
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Hooks;