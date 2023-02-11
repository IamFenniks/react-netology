import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsModel from "../StepsModel";
import PropTypes from "prop-types";

const StepsForm = ({ addData, editMode, editingItem,  setEditMode, setEditItem }) => {
    const [form, setForm] = useState({
        id: '',
        date: '',
        dist: 0
    });

    if(editMode && form.date === '') {
        setForm({...form, id: editingItem[0].id, date: editingItem[0].date, dist: editingItem[0].dist});
    }
    
    const handleDateChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));        
    }
    
    const handleStepsChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        let data = {};
        !editMode
            ? data = new StepsModel('', form.date, form.dist)
            : data = {id: form.id, date: form.date, dist: form.dist}; 
        addData(data);
        
        setForm({id: '', date: '', dist: ''});
        setEditItem({id: '', date: '', dist: ''});
        setEditMode(false);
    }

    return (
        <form onSubmit={ handleSubmit } className="steps-form">
            <label htmlFor="date">
                Дата (ДД.ММ.ГГ)
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    onChange={handleDateChange} 
                    defaultValue={ form.date } 
                />
            </label>
            <label htmlFor="dist">
                Пройдено км
                <input 
                    type="number" 
                    step="any" 
                    id="dist" 
                    name="dist" 
                    onChange={handleStepsChange} 
                    defaultValue={ form.dist } 
                />
            </label>
            <button type="submit">OK</button>
        </form>
    );
}

StepsForm.propTypes = {
    addData:     PropTypes.func.isRequired, 
    editMode:    PropTypes.bool.isRequired, 
    editingItem:  PropTypes.object.isRequired,  
    setEditMode: PropTypes.bool.isRequired, 
    setEditItem: PropTypes.func.isRequired
}

export default StepsForm;