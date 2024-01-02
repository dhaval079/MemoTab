import React from "react";
import Emojis from "./emojis";
import Single from "./Single";


// //you can do this way to map components or you can do other easy way given below
// 1st method
// function Create(props1) {
//   return (
//     <Single
//       key={props1.id}
//       id={props1.id}
//       name={props1.name}
//       img={props1.img}
//       ds={props1.ds} />
//   );
// }

// function Emojimain() {
// return (
//   <div>
//     <h2 className="title">EMOJI-PEDIA</h2>
//     {Emojis.map(Create)}    {/* emojis.map(name of function) */}
//   </div>
//     );
// }

// export default Emojimain;


//2nd method
//use of arrow functions and map function


function Emojimain() {
return (
  <div>
    <h2 className="title">EMOJI-PEDIA</h2>
    {Emojis.map((props1) => 
    <Single
      key={props1.id}
      id={props1.id}
      name={props1.name}
      img={props1.img}
      ds={props1.ds} />
    )}    
{/* emojis.map(name of function) */}
  </div>
    );
}
export default Emojimain;