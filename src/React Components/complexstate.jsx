import React ,{useState} from "react";

// function Form(){
//     // use of hooks
//     const [fname,setfname] =  useState("");
//     const [lname,setlname] =  useState("");
    
//     //use of event handling
// function updatefname(event){
//     setfname(event.target.value);
// }
// function updatelname(event){
//     setlname(event.target.value);
// } 


//     return (
//         <div>
//             <h1>hello {fname} {lname}</h1>
//             <form>
//                 <input name="fname" type="text" onChange={updatefname} placeholder="First Name" value={fname}/>
//                 <input name="lname" type="text" onChange={updatelname} placeholder="Last Name" value={lname} />
//             </form>
//         </div>

//     )
// }
// //?you can do the above method or you can do another simplified method for a code with many functions 
// example of spread operator:
const citrus =["lime","lemon","shake"]
const fruits =["apple","banana",...citrus,"orange"]
console.log(fruits);


//program for complex state
function Form1(){
    // use of hooks
    const [fullname,setfullname] =  useState({
        fname:"",
        lname:""
    });

     
    
    //use of event handling
function updatefullname(event){
    //destructuring of const newvalue and const inputvalue
    const {value,name} = event.target;    
    console.log(value);
    console.log(name);
    // setfullname(prevalue =>{
    //     if(name=="fname"){
    //         return{
    //         fname : value,
    //         lname : prevalue.lname
    //         }
    //     } 
    //     else if(name=="lname"){
    //         return{
    //             fname : prevalue.fname,
    //             lname : value
    //             }
    //     }
    // });
    //if you don't want to use the if else statements you can use the spread operators below :
   

    setfullname(prevalue =>{
        return {
       ...prevalue,  //spread operator : ...
       [name] : value
        }
    });
}



    return (
        <div>
            <h1>hello  {fullname.fname} {fullname.lname}</h1>
            <form>
                <input  name="fname" type="text" onChange={updatefullname} placeholder="First Name" />
                <input  name="lname" type="text" onChange={updatefullname} placeholder="Last Name"  />
            </form>
        </div>

    )
}

export default Form1;