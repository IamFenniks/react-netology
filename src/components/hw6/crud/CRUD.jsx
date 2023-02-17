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
  
  debugger
  return (
    <div className="m-content">
      <h2>CRUD - реализация</h2>
      <UpdateBtn /> 

      <CrudBody noteText={noteText} deleteItem={handleRemove} />

      <CrudForm className="new-note" addData={handleAddText} />
    </div>
  );
}

export default CRUD;
