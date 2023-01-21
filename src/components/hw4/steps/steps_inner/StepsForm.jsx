import { nanoid } from "nanoid";
import React, { useState } from "react";
import StepsModel from "../StepsModel";
import PropTypes from "prop-types";

const StepsForm = ({ addData }) => {
    const [form, setForm] = useState({
        date: '',
        dist: 0
    });
    
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
        const data = new StepsModel(null, form.date, form.dist); 
        addData(data);
        
        setForm({date: '', dist: ''});
    }
    
    return (
        <form onSubmit={ handleSubmit } className="steps-form">
            <label htmlFor="date">
                Дата (ДД.ММ.ГГ)
                <input type="date" id="date" name="date" onChange={handleDateChange} value={form.date} />
            </label>
            <label htmlFor="dist">
                Пройдено км
                <input type="number" step="any" id="dist" name="dist" onChange={handleStepsChange} value={form.dist} />
            </label>
            <button type="submit">OK</button>
        </form>
    );
}

StepsForm.propTypes = {
    addData: PropTypes.func.isRequired
}

export default StepsForm;