import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {    
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState([]);
    console.log(editItem)

    const handleAddData = data => { setSteps(prevSteps => [...prevSteps, data]) }
 
    function sortFunction(a,b){
        var dateA = new Date(a.date).getTime();
        var dateB = new Date(b.date).getTime();
        return dateA > dateB ? 1 : -1;  
    }; 
   
    const newSteps = steps.sort(sortFunction).reverse();

    const handleRemove = id => {
        setSteps(prevSteps => prevSteps.filter(o => o.id !== id));
    }

    const handleEdit = id => {
        setEditItem(prevEditItem => ({prevEditItem, function() {
             return steps.filter(s => s.id === id && s);
        }}));
    }

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={ handleAddData } />
                <StepsTable items={ newSteps } onRemove={handleRemove} onEdit={handleEdit} />
            </div>
        </div>
    );
}

export default Steps;