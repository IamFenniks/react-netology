import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsForm from "./steps_inner/StepsForm";
import StepsTable from "./steps_inner/StepsTable";

const Steps = () => {
    debugger
    const [steps, setSteps] = useState([]);
    const [editItem, setEditItem] = useState({
        id: '',
        date: '',
        dist: 0
    });
    const [editMode, setEditMode] = useState(false);

    const handleAddData = data => {
        if (!data.id) { debugger
            data.id = nanoid();
            setSteps(prevSteps => [...prevSteps, data]);
        } else { debugger
            // steps.filter(s => {
            //     s.id === data.id &&
            //         setSteps(prevSteps => [...prevSteps, data]);
            //         // setSteps({...steps, id: data.id, date: data.date, dist: data.dist});
            //     return;
            // });

            let updatedItems = steps.map(item => 
                {
                  if (item.id === data.id){
                    return {...item, id: data.id, date: data.date, dist: data.dist}; //gets everything that was already in item, and updates "done"
                  }
                  return item; // else return unmodified item 
                });
            
              setSteps(updatedItems); // set state to new object with updated list
        }
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
                setEditItem(prevEditItem => [{...prevEditItem, id: s.id, date: s.date, dist: s.dist}]);
            return;
        });

    }

    const handleRemove = date => {
        setSteps(prevSteps => prevSteps.filter(o => o.date !== date));
    }

    return (
        <div className="m-content">
            <div className="steps-wraper">
                <StepsForm addData={handleAddData} editMode={editMode} onEditItem={editItem} setEditMode={setEditMode} setEditItem={setEditItem} />
                <StepsTable items={newSteps} onRemove={handleRemove} onEdit={handleEdit} />
            </div>
        </div>
    );
}

export default Steps;