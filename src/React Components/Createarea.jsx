import React ,{useState} from "react";

function Createarea(props){
    const [note,setnote]=useState({
        title:"",
        content:""
    });

    function updatenote(event){
        const {name,value}=event.target;
        setnote(prevalue=>{
            return{
                ...prevalue,
                [name]:value
            }
        })
    }

    function additem(event){
       props.onadd(note);
       event.preventDefault();
    }

 return (
    <form>
        <div className="title"> 
            <input style={{fontWeight : "bold"}} name="title"   type="text" placeholder="Title" onChange={updatenote} value={note.title} />
            <input name="content"  type="text" placeholder="Take a Note" onChange={updatenote} value={note.content} />
            <br></br>
            <button onClick={additem}>Add</button>
        </div>
            
 </form>
 );
}

export default Createarea;