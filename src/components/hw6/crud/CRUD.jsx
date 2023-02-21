import React, { useEffect, useState } from "react";
import { noteReduser } from "./backend/noteReduser";
import CrudBody from "./crud-inner/CrudBody";
import CrudForm from "./crud-inner/CrudForm";
import UpdateBtn from "./crud-inner/UpdateBtn";

const CRUD = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await noteReduser({method: 'get'});
      setState([...result]);
    }

    loadData();

    setLoading(false);
  }, []);

  

  const handleAddText =  async (noteData) => {
    await noteReduser({ method: 'post', noteData });

    const result = await noteReduser({method: 'get'});
    setState([...result]);
    // debugger
  }
    

  const handleRemove = async (id) => {
    await noteReduser({id, method: 'delete'});

    const result = await noteReduser({method: 'get'});
    setState([...result]);
  }
    
  const handleUpdate = async () => {
    const result = await noteReduser({method: 'get'});
    setState([...result]);
    debugger
  }

  return (
    <div className="m-content">
      <h2>CRUD - реализация</h2>
      <UpdateBtn updateNotes={handleUpdate} /> 

      { loading 
        ? <div>Loading...</div> 

        : <div className="preview-wrapper">
          { 
            state.map(item => 
              <CrudBody key={item.id} id={item.id} text={item.text} deleteItem={handleRemove} /> 
            )
          }
        </div>
      }
      
      
      <CrudForm className="new-note" addData={handleAddText} />
    </div>
  );
}

export default CRUD;
