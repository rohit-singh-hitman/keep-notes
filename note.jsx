import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

const Note=(props)=>{
    
    const deleteNote = ()=>{
        props.DeleteItem(props.id);

    }
  return (
    <>
       <div className="my_note">
           <h1>{props.title}</h1>
           <br />
           <p>{props.content}</p>
           <Button  className="btn" onClick={deleteNote}>
           <DeleteOutlineIcon className="deleteIcon"/>
           </Button>

       </div>
    </>
  )

};
export default Note;