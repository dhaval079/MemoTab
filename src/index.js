//if you want to interpret any js code inside react code then put that js code inside curly braces like this {contacts.map()} here contacts.map() is a js code
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//importing jsx file to write inside html code
import Keeperapp from "./React Components/keeperapp";
import Cards from "./React Components/props";
import Main from "./React Components/Main";
import Contacts from "./React Components/contacts";
import Emojimain from "./Challenge1/Emojimain";
import Loginmain from "./Loginpage/loginmain";
import Hooks from "./React Components/hooks";
import FormsNew from "./React Components/forms";
import Heading from "./React Components/Heading.jsx"
import pi , {doublepi,triplepi} from "./React Components/pi.jsx";
////!  or you can write// import * as pi from "./components/pi";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// // jsx doesn't allow expressions , coz they evaluate something , instead they allow statements
// //watch a video on expressions vs statements
// <h1>Hello dear {`${fnmae} ${lname}`}</h1> 
// root.render(  
//   <div>
//     <App />
//   </div>
// );
// reportWebVitals();
// ////! styling
// const img="https://picsum.photos/200";

// // learnt applying custom style in jsx

// ////! timing problem

// const root = ReactDOM.createRoot(document.getElementById("root"))
// const date= new Date(2023,19,2,16);  //year,month,day,hour
// const currenttime = date.getHours();
// let greeting;

// if(currenttime < 12){
//   greeting="good morning"
// }
// else if(currenttime < 18){
//   greeting = "good afternoon"
// }
// else{
//   greeting = "good night"
// }

// root.render(
//   <div>
//     <h1 className='header'>Hello world</h1>
//     <Heading/>
//     <ul>
//       <li style={{color: "red"}}>Home</li>
//       <li>About and {pi.default}</li>
//       <li>Services and {pi.doublepi()}</li>
//       <li>Contact us and {pi.triplepi()}</li>
//       <br></br>
//       <img src={img + "?grayscale"} />
//     </ul>

//     <h1>{greeting}</h1>
//   </div>
// );



// ////!<-----------------------------------    NOW WE WILL START CODE FOR KEEPER PROJECT  -------------------------------------->
// import Footer from "./React Components/Footer";
// import Note from "./React Components/Note";
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <div>
//   <Heading />
//   <Note title="Props" content="created by props"  />
//   <Footer />
//   </div>
// );



////! <-------------------------------------- Props ----------------------------------7----------------->
////! props
////! react props are same as html attributes just there is a bit difference of syntax

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <div>
//   <Main />
// </div>
// );

// reportWebVitals();




////! <-------------------------------------- Props ----------------------------------7----------------->
////! props project for challenge1

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//     <Emojimain />
//   </div>
// );

// reportWebVitals();



////! 08-03-2023
////! <-------------------------------------- map , filter , reduce , arrow functions----------------------------------7----------------->

// //filter :
// const newarray=[2,5,78,55,33,90];

// console.log("Filtered elements are : " + newarray.filter(x => x>10));


// // forEach :
// var newnumber=[];
// const newone = newarray.forEach(x => newnumber.push(x * 2))
// console.log(newone); 



// //map :
// const newarray3=[2,5,78,55,33,90];

// console.log("mapped elements are : " + newarray3.map( x => x*3));


// //reduce : to accumulate something inside array
// // .reduce works as loop function which loops the function inside it
// const numbers=[2,4,56,77,36,87];
// console.log("sum of numbers array is : " + numbers.reduce((accumulator , currentnumber) => {
//   console.log("accumulator is : " + accumulator);
//   console.log("currentnumber is : " + currentnumber);
//   console.log("hello there");
//   return accumulator + currentnumber
// }))

// //find , findindex : finds the  first item only that matches the given condition in array and findindex finds the first index
// const newarray4=[4,5,10,11,34,23];
// console.log("element greater than 10 is : " + newarray4.find( x => x>10));
// console.log("elements index greater than 10 is : "+ newarray4.findIndex( x => x>10));



//// ! 09-03-2023
//// ! <-------------------------------------- ternary operator and &&--------------------------------------------------->

//Expressions can be assigned or used as operands, while statements can only be declared.
//Statements create side effects to be useful, while expressions are values or execute to values.

//ternary operator turns an statement into expression by using it's syntax
//syntax : 
//condition ? do if true : do if false

//for using && you can wrote the above line as :
//condition && Expression
//True && Expression
//False && Expression4
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <div>
//     <Loginmain />
//   </div>
// );

// reportWebVitals();


// declarative vs imperative programming
//declararive prog - the use of ternary operators , states , hooks
//imperative programming -the use of pure js like :  document.getelementbyid("root").innerHTML




// ! 10-03-2023
// ! <-------------------------------------- React States and Hooks--------------------------------------------------->
// //? UI = f(state)

////?react hooks must be called inside an component meaning like an different file than main file
// //this method is not optimal to increase the value on screen 
// var count=0;

// function increase(){
//   count++;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//   <h1>{count}</h1>  
//   <button onClick={increase}>+</button>
// </div>,
// );
// reportWebVitals();
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//   <h1>{count}</h1>  
//   <button onClick={increase}>+</button>
// </div>,
// );
// reportWebVitals();
// //so we use hooks for an optimal way
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//   <Hooks />
// </div>,
// );
// reportWebVitals();
//for time problem part2 in video 31 use method : setinterval(functionname , 1000ms )q



// ! 11-03-2023
// ! <--------------------------------------Destructuring , event handling , react forms--------------------------------------------------->
//Destructuring

  //  const [count, setcount] = React.useState(0);

  // //*you can further create object literal :
  // const {countno, conunname} = count;

  // //*you can further give names of the objects literal
  // const {countno : num1 ,countname : string} = count;

  // //*you can further provide value of the objects which it will take in action if the object's value is undefined 
  // const {countno = "433" ,countname = "dhaval"} = count;

  // //*if there is another object inside an object do this:
    //  const {countno, conuntime , counname : {fname,lname} } = count;
    //  const [cat,dog] =animals;
    // //  destructure an object named cat
    //  const {name ="fluffy" , sound="meow"} = cat

    // function useAnimals(animals){
    //   return [
    //     animals.name,
    //     function(){
    //         console.log(animals.sound);
    //     }
    //   ] ;
    // }
    // console.log("hello")
    // // const [animal,makesound] =useAnimals(cat)
    // console.log(animal) 
    // // --> cat
    // // makesound() --> prints meow
// //Event Handling

// //React Forms
// // console.log(event.target.value);

import Form from "./React Components/complexstate";
import Todolist from "./React Components/todolist";
import Todoitem from "./React Components/todoitem.jsx";
import Form1 from "./React Components/complexstate";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Keeperapp />
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <div>
//     <FormsNew />
//   </div>  
// )
reportWebVitals();

//? revision of react - video 36 i am doing hooks vs classes
///!instead of making components in function you can make classes 
//!format of class is 
// class App extends React.Component{
//   render(){

//   }
// }

// ! 12-03-2023
// ! <--------------------------------------Revision Complex state , spread operator , component tree--------------------------------------------------->
//you will find the above concepts in complexstate.jsx , todolist.jsx , todoitem.jsx , hooks.jsx



// ! 13-03-2023
// ! <--------------------------------------Revision Complex state , spread operator , component tree--------------------------------------------------->
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <div>
//   <Keeperapp />
//   </div>
// );
// reportWebVitals();

