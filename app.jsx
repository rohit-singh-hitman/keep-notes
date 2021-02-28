import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
const App=()=>{
  const [addItem,setAddItem]=useState([]);
  const addNote = (note)=>{
    //alert('i am clicked');
    setAddItem((prev)=>{
       return[...prev,note];
    });
    console.log(note);
  };
  const onDelete = (id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata,ind)=>{
        return ind!==id;
      })
    );
    

  };
  return (
    <>
    <Header />
    <CreateNote passNote={addNote}/>
    
    {addItem.map((val,index)=>{
      return <Note key={index}
        id={index}
        title={val.title}
        content={val.content}
        DeleteItem={onDelete}
      />
    })};
    <Footer />
    
    
    </>
  )

}
export default App;