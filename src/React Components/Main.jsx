import React from "react";
import Contacts from "./contacts";
import Cards from "./props";


function Createcard(Contacts){
    return (
            <Cards
            key={Contacts.id}
            id={Contacts.id}
            name={Contacts.name} 
            img={Contacts.img} 
            tel={Contacts.tel} 
            email={Contacts.email} />
    )
}
function Main(){
    return (
        <div>
            <h1 className="heading">My contacts</h1>
            {Contacts.map(Createcard)}
        </div>
    )
}



// TODO : you can write like this individually calling each element of array or you can write the other optimal way shown above
// function Main(){
//     return (
//         <div>
//         <h1 className="heading">My contacts</h1>
//         <Cards
//         name={ Contacts[0].name }
//         img={ Contacts[0].img } 
//         tel={ Contacts[0].tel }
//         email={ Contacts[0].email }
//         />
//          <Cards
//         name={ Contacts[1].name }
//         img={ Contacts[1].img }
//         tel={ Contacts[1].tel }
//         email={ Contacts[1].email }
//         />
//          <Cards
//         name={ Contacts[2].name }
//         img={ Contacts[2].img }
//         tel={ Contacts[2].tel }
//         email={ Contacts[2].email }
//         />
//         </div>
//     );
// };
export default Main;