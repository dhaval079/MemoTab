import React ,{useState}from "react";
import Todoitem from "./todoitem";
import "./todo.css";
function Todolist(){

    const [list,setlist]=useState("");
    const [item,setitem]=useState([]);

    function updatelist(event){
        setlist(event.target.value)
    }

    function additem(){
        setitem(prevalue1 =>{
            return [...prevalue1,list];
        })
        setlist("")
    }
    function deleteItem(id){
        setitem(prevalue =>{
            return prevalue.filter((item,index)=>{
                return index !== id;
            })
        })
    }
    return(
        <div className="container1">
            <h1>To DO LIST</h1>
            <input name="list" type="text" placeholder="Type a task" onChange={updatelist} value={list}/>
            <button onClick={additem}>Add</button>
                <ul>
                    {item.map((todoitem,index) => <Todoitem key={index} id={index} text= {todoitem} onChecked={deleteItem}/>)}
                </ul>
            
        </div>
    )
}

export default Todolist;

