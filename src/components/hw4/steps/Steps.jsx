import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    
    const [item, setItem] = useState({
        date: '',
        steps: ''
    });
// debugger;
    const addData = (date, steps) => {
        setItem(prevItem => {
            return { ...prevItem, date: date, steps: steps };
        }); 
    }

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={ addData } />
                <StepsTable item={ item } />
            </div>
        </div>
    );
}

export default Steps;