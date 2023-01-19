import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState([]);
    // const [newObj, setNewObj] = useState([]);

    const handleAddData = data => { // {id: '01', date: '2023-01-18', dist: '2.3'}
        setSteps(prevSteps => [...prevSteps, data]);
    }

    // Находим одинакове даты и сумируем их километры
    var holder = {};
    steps.forEach(function (d) {
        if (holder.hasOwnProperty(d.date)) {
            holder[d.date] = holder[d.date] + parseFloat(d.dist);
        } else {
            holder[d.date] = parseFloat(d.dist);
        }
    });

    // Создаём новый массив и заносим в него уже уникальные пункты
    let newObj = [];
    for (let prop in holder) {
        newObj.push({ id: nanoid(), date: prop, dist: holder[prop] });
    }

    // Сортируем пункты согласно даты
    const sortFunction = (a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA > dateB ? 1 : -1;
    };
    // Отсортировав переворачиваем их: ранние внизу, поздние вверху и сохраняем в новой константе 
    const newSteps = newObj.sort(sortFunction).reverse();

    const handleRemove = id => {
       return newObj.forEach(function (el, i) {
        el.id === id && newObj.splice(i, 1)
    })
        // setSteps(prevSteps => prevSteps.filter(o => o.id !== id)); 
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