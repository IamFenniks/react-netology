import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const handleAddData = data => {
        data.id = nanoid();
        setSteps(prevSteps => [...prevSteps, data]);
    }

    var holder = {};
    steps.forEach(function (d) {
        if (holder.hasOwnProperty(d.date)) {
            holder[d.date] = holder[d.date] + parseFloat(d.dist);
        } else {
            holder[d.date] = parseFloat(d.dist);
        }
    });

    let newObj = [];
    for (let prop in holder) {
        newObj.push({ id: nanoid(), date: prop, dist: holder[prop] });
    }

    // Сортируем пункты согласно даты
    const sortFunction = (a, b) => {
        // debugger
        let dateA = new Date(a.date); // dateA: Sat Jan 14 2023 03:00:00 GMT+0300 (Москва, стандартное время)
        let dateB = new Date(b.date);
        return dateA > dateB ? 1 : -1;
    };

    // Отсортировав переворачиваем их: ранние внизу, поздние вверху и сохраняем в новой константе 
    const newSteps = newObj.sort(sortFunction).reverse();

    const handleEdit = date => {
        setEditMode(true);
        
        steps.filter(s => {
            s.date === date &&
                setEditItem(prevEditItem => [...prevEditItem, s]);
            return;
        });
        
        
    }
    alert(editMode)

    const handleRemove = date => {
        setSteps(prevSteps => prevSteps.filter(o => o.date !== date));
    }

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={handleAddData} editMode={editMode} onEditItem={editItem} />
                <StepsTable items={newSteps} onRemove={handleRemove} onEdit={handleEdit} />
            </div>
        </div>
    );
}

export default Steps;