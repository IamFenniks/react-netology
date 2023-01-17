import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {    
    const [steps, setSteps] = useState([]);

    const handleAddData = data => { setSteps(prevSteps => [prevSteps, data]) }
 
    // const filteredData = steps.filter(s => function() {
    //     return steps;
    // });

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={ handleAddData } />
                <StepsTable items={ steps } />
            </div>
        </div>
    );
}

export default Steps;