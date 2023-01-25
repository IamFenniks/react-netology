import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useEffect } from "react";
import StepsModel from "./StepsModel";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState([]);
    const [tempData, setTempData] = useState([]);

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

    const handleEdit = id => {
        setEditItem(prevEditItem => ({
            prevEditItem, function() {
                return steps.filter(s => s.id === id && s);
            }
        }));
    }

    const handleRemove = date => {
        setSteps(prevSteps => prevSteps.filter(o => o.date !== date));
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

// const newData = steps.reduce((a,c)=>{    // a = [], с = StepsModel {id: 'foifjodsfj', date: '2023-01-01', dist: '1.5'}
//     let x = a.find(e=>e.date===c.date)
//     if(!x) a.push(Object.assign({},c))
//     else  x.dist += c.dist
//     return new StepsModel(a.id, a.date, a.dist);  // Object.assign({}, a)
// },[]);