import { nanoid } from "nanoid";
import React, { useState } from "react";
import CrudBody from "./crud-inner/CrudBody";
import CrudForm from "./crud-inner/CrudForm";
import UpdateBtn from "./crud-inner/UpdateBtn";

const CRUD = () => {
  const [noteText, setNoteText] = useState([]);

  const handleAddText = text =>
    setNoteText(prevNoteText => [...prevNoteText, text]);

  const handleRemove = id =>
    setNoteText(prevNoteText => prevNoteText.filter(o => o.id !== id));
  
  return (
    <div className="m-content">
      <h2>CRUD - реализация</h2>
      <UpdateBtn /> 

      <div className="preview-wrapper">
        { noteText.map(item => <CrudBody key={item.id} id={item.id} text={item.text} deleteItem={handleRemove} /> )}
      </div>
      
      <CrudForm className="new-note" addData={handleAddText} />
    </div>
  );
}

export default CRUD;
