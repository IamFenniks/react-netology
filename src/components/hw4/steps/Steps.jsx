import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsModel from "./StepsModel";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState([]);
    // const [newObj, setNewObj] = useState([]);

    const handleAddData = data => {
        debugger
        if(steps.length < 1) {
            data.id = nanoid();
            setSteps(prevSteps => [...prevSteps, data]);
            console.log(data);
        }

        // Находим одинакове даты и сумируем их километры
        var holder = {};
        steps.forEach(function (d) {
            if (holder.hasOwnProperty(d.date)) {
                debugger
                holder[d.date] = holder[d.date] + parseFloat(d.dist);
            } else {
                debugger
                // holder[d.date] = parseFloat(d.dist);
                data.id = nanoid();
                setSteps(prevSteps => [...prevSteps, data]);
                return;
            }
        });

        // Создаём новый массив и заносим в него уже уникальные пункты
        // let newObj = [];
        for (let prop in holder) {
            debugger
            const newData = new StepsModel({ id: nanoid(), date: prop, dist: holder[prop] });
            console.log('new data: ' + newData);
            setSteps(prevSteps => [...prevSteps, newData]);
            // newObj.push({ id: nanoid(), date: prop, dist: holder[prop] });
        }
        
        // setSteps(prevSteps => [...prevSteps, newData]);
    }

    // Сортируем пункты согласно даты
    const sortFunction = (a, b) => {
        debugger
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA > dateB ? 1 : -1;
    };
    // Отсортировав переворачиваем их: ранние внизу, поздние вверху и сохраняем в новой константе 
    const newSteps = steps.sort(sortFunction).reverse();

    const handleRemove = id => {
        setSteps(prevSteps => prevSteps.filter(o => o.id !== id)); 
    }

    const handleEdit = id => {
        setEditItem(prevEditItem => ({
            prevEditItem, function() {
                return steps.filter(s => s.id === id && s);
            }
        }));
    }

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={handleAddData} />
                <StepsTable items={newSteps} onRemove={handleRemove} onEdit={handleEdit} />
            </div>
        </div>
    );
}

export default Steps;