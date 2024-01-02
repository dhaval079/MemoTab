import React , {useState} from "react";
import Createarea from "./Createarea";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

function Keeperapp() {
    const [notes,setnotes]=useState([]);


    function addnote(note){

        // console.log(notes);
        setnotes(prenotes =>{
            return [...prenotes,note];
        });
    }
    function deleteNote(id){
      setnotes(preNotes => {
        return preNotes.filter((notes,index) => {
            return index!=id
          })
  
      })
    }
  return (
    <div>
      <Heading/>
      <Createarea onadd={addnote}  />;
      {notes.map((noteitem,index) => <Note key={index} id={index} ondelete={deleteNote} title={noteitem.title} content={noteitem.content} /> )}
      <Footer />
    </div>
  );
}

export default Keeperapp;
