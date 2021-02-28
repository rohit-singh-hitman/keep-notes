import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote=(props)=>{
    const [expand,setExpand]=useState(false);
    const [note,setNote]=useState({
        title:'',
        content:'',
    });
    const inputEvent = (event)=>{
        //const value=event.target.value;
       // const name=evnet.target.name;
        const{name,value} = event.target;

        setNote((prev)=>{
            return {
                ...prev,
                [name]:value,
            };
        });
        console.log(note);

    };
    const AddEvent =()=>{
        props.passNote(note);
        setNote({title:'',
        content:'',});

    }

    const expandIt = ()=>{
        setExpand(true);
    }
    const btoNormal = ()=>{
        setExpand(false);
    }
    const year = new Date().getFullYear();
  return (
    <>
    <div className="main_note" onDoubleClick={btoNormal}>
        <form>
        {expand?(
            <input type="text" 
            name="title"
             placeholder="Title" 
             value={note.title} 
             autoComplete="off" 
             onChange={inputEvent}

             />):null}
            <textarea rows="" 
            column=""
             name="content" 
             value={note.content}
              onChange={inputEvent} 
              placeholder="Take a Note..."
              onClick={expandIt}>

              </textarea>
              {expand?(
            <Button className="butn" onClick={AddEvent}>
              <AddIcon />
            </Button>):null}
        </form>
    </div>
      
    </>
  )

}
export default CreateNote;